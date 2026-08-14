"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/auth/session";
import { verifyPassword } from "@/lib/auth/token";

export interface LoginState {
  error?: string;
}

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get("password");
  if (typeof password !== "string" || !password) {
    return { error: "Enter the admin password." };
  }
  if (!process.env.ADMIN_PASSWORD) {
    return { error: "Admin login isn't configured on the server yet." };
  }
  if (!verifyPassword(password)) {
    return { error: "Incorrect password." };
  }

  await createSession();
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await deleteSession();
  redirect("/admin/login");
}
