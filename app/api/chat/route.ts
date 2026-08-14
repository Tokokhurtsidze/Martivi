import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const PRIMARY_MODEL = process.env.OPENROUTER_MODEL || "google/gemma-4-31b-it:free";
const MAX_HISTORY = 12;
const MAX_MESSAGE_LENGTH = 2000;

// The primary model is a free, shared-pool model on OpenRouter and gets
// upstream 429s whenever that pool is busy. These fallbacks sit on different
// providers so a busy Google AI Studio pool doesn't take the whole chat down.
const FALLBACK_MODELS = ["openai/gpt-oss-20b:free", "nvidia/nemotron-nano-9b-v2:free"];
const MODEL_CHAIN = [PRIMARY_MODEL, ...FALLBACK_MODELS.filter((m) => m !== PRIMARY_MODEL)];

const SYSTEM_PROMPT = `You are the website assistant for Martivi, a consulting and digital agency with two sides:

1. Consulting: Marketing Consulting, Sales Consulting, and Business Development Consulting.
2. Digital: Branding, Social Media, Web Development, and Motion Graphics.

Martivi has offices in Tbilisi, Georgia and New York, USA. The lead consultant and founder is Giorgi Nozadze, with past experience at Heineken, Henkel, and Moët Hennessy.

Answer visitor questions about these services, the agency's approach, and past project work helpfully and concisely. If asked something you don't know, say so honestly rather than inventing specifics. When a visitor seems ready to start a project, invite them to use the contact form on the site. Keep replies short — a few sentences, not an essay. Reply in the same language the visitor writes in.`;

interface IncomingMessage {
  role: "user" | "assistant";
  content: string;
}

function isValidMessage(value: unknown): value is IncomingMessage {
  if (typeof value !== "object" || value === null) return false;
  const msg = value as Record<string, unknown>;
  return (
    (msg.role === "user" || msg.role === "assistant") &&
    typeof msg.content === "string" &&
    msg.content.trim().length > 0 &&
    msg.content.length <= MAX_MESSAGE_LENGTH
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function callModel(
  model: string,
  apiKey: string,
  messages: IncomingMessage[],
): Promise<Response | null> {
  const body = JSON.stringify({
    model,
    messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    temperature: 0.6,
  });

  for (let attempt = 0; attempt < 2; attempt++) {
    let res: Response;
    try {
      res = await fetch(OPENROUTER_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "X-Title": "Martivi Assistant",
        },
        body,
      });
    } catch {
      return null;
    }

    if (res.ok || res.status !== 429) return res;
    if (attempt === 0) await sleep(500);
    else return res;
  }
  return null;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat is not configured on the server." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const rawMessages = (body as { messages?: unknown }).messages;
  if (!Array.isArray(rawMessages)) {
    return NextResponse.json({ error: "Missing messages array." }, { status: 400 });
  }

  const messages = rawMessages.filter(isValidMessage).slice(-MAX_HISTORY);
  if (messages.length === 0) {
    return NextResponse.json({ error: "No valid messages provided." }, { status: 400 });
  }

  let lastResponse: Response | null = null;

  for (const model of MODEL_CHAIN) {
    const res = await callModel(model, apiKey, messages);
    if (res?.ok) {
      const data = await res.json();
      const reply: string = data?.choices?.[0]?.message?.content ?? "";
      if (reply) return NextResponse.json({ reply });
    }
    lastResponse = res;
  }

  const status = lastResponse?.status ?? 502;
  return NextResponse.json(
    {
      error:
        status === 429
          ? "Every available model is temporarily rate-limited upstream."
          : "The chat provider returned an error.",
      errorType: status === 429 ? "rate_limited" : "unknown",
    },
    { status },
  );
}
