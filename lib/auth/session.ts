import "server-only";
import { cookies } from "next/headers";
import {
  ADMIN_SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  createSessionToken,
  isValidSessionToken,
} from "./token";

export async function createSession(): Promise<void> {
  const store = await cookies();
  store.set(ADMIN_SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE_SECONDS,
    path: "/",
  });
}

export async function verifySession(): Promise<boolean> {
  const store = await cookies();
  return isValidSessionToken(store.get(ADMIN_SESSION_COOKIE)?.value);
}

export async function deleteSession(): Promise<void> {
  const store = await cookies();
  store.delete(ADMIN_SESSION_COOKIE);
}
