import { NextRequest, NextResponse } from "next/server";

const RESEND_URL = "https://api.resend.com/emails";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "khurtsidzetoko@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Martivi Website <onboarding@resend.dev>";

const MAX_LENGTH = 2000;

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone?: string;
  subject?: string;
  budget?: string;
  details: string;
}

function isNonEmptyString(value: unknown, max = MAX_LENGTH) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= max;
}

function isValidEmail(value: unknown) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parsePayload(body: unknown): ContactPayload | null {
  if (typeof body !== "object" || body === null) return null;
  const b = body as Record<string, unknown>;

  if (!isNonEmptyString(b.name, 200)) return null;
  if (!isNonEmptyString(b.company, 200)) return null;
  if (!isValidEmail(b.email)) return null;
  if (!isNonEmptyString(b.details, MAX_LENGTH)) return null;
  if (b.phone !== undefined && b.phone !== "" && !isNonEmptyString(b.phone, 50)) return null;
  if (b.subject !== undefined && b.subject !== "" && !isNonEmptyString(b.subject, 200)) return null;
  if (b.budget !== undefined && b.budget !== "" && !isNonEmptyString(b.budget, 100)) return null;

  return {
    name: (b.name as string).trim(),
    company: (b.company as string).trim(),
    email: (b.email as string).trim(),
    phone: typeof b.phone === "string" ? b.phone.trim() : undefined,
    subject: typeof b.subject === "string" ? b.subject.trim() : undefined,
    budget: typeof b.budget === "string" ? b.budget.trim() : undefined,
    details: (b.details as string).trim(),
  };
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Contact form is not configured on the server." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = parsePayload(body);
  if (!payload) {
    return NextResponse.json({ error: "Missing or invalid fields." }, { status: 400 });
  }

  const rows = [
    ["Name", payload.name],
    ["Company", payload.company],
    ["Email", payload.email],
    ["Phone", payload.phone || "—"],
    ["Subject", payload.subject || "—"],
    ["Budget", payload.budget || "—"],
  ];

  const html = `
    <div style="font-family: sans-serif; font-size: 14px; color: #15130d;">
      <h2 style="margin: 0 0 16px;">New project inquiry from martivi.com</h2>
      <table cellpadding="6" style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight: 600; vertical-align: top;">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="font-weight: 600; margin-top: 16px;">Project details</p>
      <p style="white-space: pre-wrap;">${escapeHtml(payload.details)}</p>
    </div>
  `;

  let upstream: Response;
  try {
    upstream = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: payload.email,
        subject: `New inquiry: ${payload.company} (${payload.name})`,
        html,
      }),
    });
  } catch {
    return NextResponse.json({ error: "Could not reach the email provider." }, { status: 502 });
  }

  if (!upstream.ok) {
    return NextResponse.json(
      { error: "The email provider returned an error." },
      { status: upstream.status },
    );
  }

  return NextResponse.json({ ok: true });
}
