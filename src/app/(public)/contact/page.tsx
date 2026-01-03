"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Send } from "lucide-react";

import { CustomButton } from "@/components/common/custom-button";
import { Input } from "@/components/ui/input";

const contactEmail = "hello@marckmelyssa.com";
const contactPhone = "+55 (11) 94754-5338";
const contactPhoneHref = "tel:+5511947545338";

function InstagramLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
    </svg>
  );
}

const contactEntries = [
  {
    label: "Instagram",
    value: "@marckemelyssa.oficial",
    href: "https://www.instagram.com/marckemelyssa.oficial/",
    icon: InstagramLogo,
  },
  {
    label: "Facebook",
    value: "MarckSilvaeMelyssaTamada",
    href: "https://www.facebook.com/MarckSilvaeMelyssaTamada/",
    icon: FacebookLogo,
  },
  {
    label: "Telefone",
    value: contactPhone,
    href: contactPhoneHref,
    icon: Phone,
  },
];

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string) || "Contato";
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";

    const subject = encodeURIComponent(`Mensagem do site - ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative w-full overflow-hidden min-h-screen">
      <div className="absolute inset-0 -z-10 bg-[var(--ds-neutral-6)]" />
      <div className="absolute -left-32 top-16 -z-10 h-80 w-80 rounded-full bg-[var(--ds-primary-3)]/25 blur-[110px]" />
      <div className="absolute -right-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-[var(--ds-primary-1)]/20 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

      <div className="px-4 sm:px-6 md:px-12 lg:px-28">
        <section className="relative z-10 pt-52 pb-24 space-y-12 min-h-screen">
          <div className="max-w-[1300px] mx-auto space-y-8">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                className="relative"
              >
                <div className="relative h-full p-2 sm:p-1 flex flex-col gap-12">
                  <div className="space-y-2">
                    <p className="text-lg uppercase tracking-[0.22em] text-[var(--ds-primary-2)]">
                      Contacts
                    </p>
                  </div>

                  <div className="space-y-10 pb-10">
                    {contactEntries.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group flex items-center gap-3 text-white hover:text-[var(--ds-primary-2)] transition"
                        aria-label={`${item.label}: ${item.value}`}
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-base font-semibold">{item.value}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.14 }}
                className="relative"
              >
                <div className="relative rounded-3xl border border-white/10 bg-transparent p-8 sm:p-10 shadow-lg shadow-black/30 backdrop-blur-xl">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-[var(--ds-primary-3)]/25 flex items-center justify-center">
                        <Send className="h-5 w-5 text-[var(--ds-primary-3)]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold text-white">
                          Talk with us!
                        </h2>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-6">
                        <label htmlFor="name" className="text-sm text-white/80 block mb-2">Nome</label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          className="h-11 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/50 focus:border-[var(--ds-primary-2)] focus:ring-[var(--ds-primary-2)]/40"
                          required
                        />
                      </div>
                      <div className="space-y-6">
                        <label htmlFor="email" className="text-sm text-white/80 block mb-2">Email</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@email.com"
                          className="h-11 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/50 focus:border-[var(--ds-primary-2)] focus:ring-[var(--ds-primary-2)]/40"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-8">
                      <label htmlFor="message" className="text-sm text-white/80 block mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us how we can help or what invitation you have in mind."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/50 focus:border-[var(--ds-primary-2)] focus:ring-[var(--ds-primary-2)]/40 focus:outline-none transition"
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                      <p className="text-sm text-white/60">
                        We’ll get back to you as soon as possible.
                      </p>
                      <CustomButton type="submit" className="px-6 py-4">
                        Send email
                      </CustomButton>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
