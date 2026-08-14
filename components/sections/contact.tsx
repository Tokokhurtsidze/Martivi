"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          budget: data.get("budget"),
          details: data.get("details"),
        }),
      });

      if (!res.ok) throw new Error("send_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center pb-6 pt-28 sm:pb-14 sm:pt-32 lg:min-h-[100svh]"
    >
      <Container>
        <SectionHeading
          index="06"
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          compactMobile
        />

        <div className="mt-3 flex flex-col gap-8 sm:mt-6 lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-10">
          <Reveal>
            <div className="flex flex-col divide-y divide-border border border-border sm:border-y sm:border-x-0 lg:border-0 lg:divide-border">
              {t.contact.offices.map((office) => (
                <div
                  key={office.city}
                  className="flex flex-col items-center p-4 text-center sm:items-start sm:p-0 sm:text-left sm:py-6 sm:first:pt-0 sm:last:pb-0"
                >
                  <h3 className="font-display text-lg font-medium italic sm:text-2xl">
                    {office.city}
                  </h3>
                  <div className="mt-3 flex flex-col items-center gap-2 text-xs text-muted-foreground sm:mt-4 sm:items-start sm:gap-2.5 sm:text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {office.address}
                    </div>
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-start gap-3 transition-colors hover:text-foreground"
                    >
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {office.email}
                    </a>
                    <a
                      href={`tel:${office.phone.replace(/\s+/g, "")}`}
                      className="flex items-start gap-3 transition-colors hover:text-foreground"
                    >
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col gap-2 border border-border bg-card p-3 sm:gap-4 sm:p-6 lg:gap-5 lg:p-7"
            >
                <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
                  <label className="flex flex-col gap-0.5 text-[11px] font-medium sm:gap-1 sm:text-sm">
                    {t.contact.form.name}
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder={t.contact.form.namePlaceholder}
                      className="h-8 border-b border-border bg-transparent px-1 text-xs font-normal outline-none transition-colors focus:border-accent sm:h-10 sm:text-sm"
                    />
                  </label>
                  <label className="flex flex-col gap-0.5 text-[11px] font-medium sm:gap-1 sm:text-sm">
                    {t.contact.form.company}
                    <input
                      required
                      name="company"
                      type="text"
                      placeholder={t.contact.form.companyPlaceholder}
                      className="h-8 border-b border-border bg-transparent px-1 text-xs font-normal outline-none transition-colors focus:border-accent sm:h-10 sm:text-sm"
                    />
                  </label>
                  <label className="col-span-2 flex flex-col gap-0.5 text-[11px] font-medium sm:gap-1 sm:text-sm lg:col-span-1">
                    {t.contact.form.email}
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder={t.contact.form.emailPlaceholder}
                      className="h-8 border-b border-border bg-transparent px-1 text-xs font-normal outline-none transition-colors focus:border-accent sm:h-10 sm:text-sm"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
                  <label className="flex flex-col gap-0.5 text-[11px] font-medium sm:gap-1 sm:text-sm">
                    {t.contact.form.phone}
                    <input
                      name="phone"
                      type="tel"
                      placeholder={t.contact.form.phonePlaceholder}
                      className="h-8 border-b border-border bg-transparent px-1 text-xs font-normal outline-none transition-colors focus:border-accent sm:h-10 sm:text-sm"
                    />
                  </label>
                  <label className="flex flex-col gap-0.5 text-[11px] font-medium sm:gap-1 sm:text-sm">
                    {t.contact.form.subject}
                    <input
                      name="subject"
                      type="text"
                      placeholder={t.contact.form.subjectPlaceholder}
                      className="h-8 border-b border-border bg-transparent px-1 text-xs font-normal outline-none transition-colors focus:border-accent sm:h-10 sm:text-sm"
                    />
                  </label>
                  <label className="col-span-2 flex flex-col gap-0.5 text-[11px] font-medium sm:gap-1 sm:text-sm lg:col-span-1">
                    {t.contact.form.budget}
                    <select
                      name="budget"
                      defaultValue={t.contact.form.budgetOptions[0]}
                      className="h-8 border-b border-border bg-transparent px-1 text-xs font-normal text-foreground outline-none transition-colors focus:border-accent sm:h-10 sm:text-sm"
                    >
                      {t.contact.form.budgetOptions.map((option) => (
                        <option key={option} value={option} className="bg-card text-foreground">
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-0.5 text-[11px] font-medium sm:gap-1 sm:text-sm">
                  {t.contact.form.details}
                  <textarea
                    required
                    name="details"
                    rows={2}
                    placeholder={t.contact.form.detailsPlaceholder}
                    className="resize-none border-b border-border bg-transparent px-1 py-1.5 text-xs font-normal outline-none transition-colors focus:border-accent sm:py-2 sm:text-sm"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex h-9 w-fit items-center gap-2 bg-accent px-5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] disabled:opacity-60 sm:h-11 sm:px-6"
                >
                  {status === "sending" ? t.contact.form.sending : t.contact.form.send}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
          </Reveal>
        </div>
      </Container>

      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className={cn(
              "fixed inset-x-6 bottom-6 z-[65] mx-auto flex max-w-md items-center gap-2 border px-4 py-3 text-sm shadow-lg sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2",
              status === "success"
                ? "border-primary/30 bg-primary/10 text-primary"
                : "border-red-500/30 bg-red-500/10 text-red-500",
            )}
          >
            {status === "success" ? (
              <CheckCircle2 className="h-4 w-4 shrink-0" />
            ) : (
              <AlertCircle className="h-4 w-4 shrink-0" />
            )}
            {status === "success" ? t.contact.form.success : t.contact.form.error}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
