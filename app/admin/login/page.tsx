"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/app/admin/actions";

const initialState: LoginState = {};

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <form action={formAction} className="w-full max-w-sm border border-border p-8">
        <h1 className="font-display text-2xl font-medium tracking-tight">Admin Login</h1>
        <p className="mt-2 text-sm text-muted-foreground">Martivi portfolio admin.</p>

        <label className="mt-6 block text-sm font-medium" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="mt-2 w-full border border-border bg-transparent px-3 py-2 text-sm focus:border-accent focus:outline-none"
        />

        {state?.error && <p className="mt-4 text-sm text-red-500">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="mt-6 w-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity disabled:opacity-60"
        >
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
