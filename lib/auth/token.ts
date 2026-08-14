import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "martivi_admin_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function sign(payload: string): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET is not set.");
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function createSessionToken(): string {
  const expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const payload = `admin.${expiresAt}`;
  return `${payload}.${sign(payload)}`;
}

export function isValidSessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [scope, expiresAtRaw, signature] = parts;

  let expected: string;
  try {
    expected = sign(`${scope}.${expiresAtRaw}`);
  } catch {
    return false;
  }

  const signatureBuf = Buffer.from(signature);
  const expectedBuf = Buffer.from(expected);
  if (signatureBuf.length !== expectedBuf.length || !timingSafeEqual(signatureBuf, expectedBuf)) {
    return false;
  }
  if (scope !== "admin") return false;

  const expiresAt = Number(expiresAtRaw);
  return Number.isFinite(expiresAt) && Date.now() <= expiresAt;
}

export function verifyPassword(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const candidateBuf = Buffer.from(candidate);
  const expectedBuf = Buffer.from(expected);
  return candidateBuf.length === expectedBuf.length && timingSafeEqual(candidateBuf, expectedBuf);
}
