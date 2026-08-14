import type { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/auth/session";
import { logout } from "@/app/admin/actions";

export default async function AdminDashboardLayout({ children }: { children: ReactNode }) {
  if (!(await verifySession())) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <Link href="/admin" className="font-display text-lg font-medium tracking-tight">
          Martivi Admin
        </Link>
        <form action={logout}>
          <button type="submit" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Log out
          </button>
        </form>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>
    </div>
  );
}
