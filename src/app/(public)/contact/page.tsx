"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Send } from "lucide-react";

import { CustomButton } from "@/components/common/custom-button";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/services/email";

const contactPhone = "+55 (11) 94754-5338";
const contactPhoneHref = "https://wa.me/5511947545338";

const contactEntries = [
  {
    label: "Instagram",
    value: "@marckemelyssa.oficial",
    href: "https://www.instagram.com/marckemelyssa.oficial/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    value: "Marck e Melyssa",
    href: "https://www.facebook.com/melyssa.tamada/",
    icon: Facebook,
  },
  {
    label: "Telefone",
    value: contactPhone,
    href: contactPhoneHref,
    icon: WhatsappIcon,
  },
];

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
      {...props}
    >
      <path d="M128.3.6c-69.9 0-126.6 56.7-126.6 126.6 0 22.3 5.8 44.1 17 63.4L.8 255.4l65.8-17.2c18.4 10.1 39.2 15.5 60.5 15.5h.3c69.9 0 126.6-56.7 126.6-126.6C254 .6 198.2.6 128.3.6zm72.1 179.9c-3 8.5-14.8 15.6-24.3 17.7-6.5 1.4-15 2.5-43.8-9.4-36.7-15.2-60.2-52.5-62.1-55-1.8-2.5-14.8-19.7-14.8-37.6s9.1-26.7 12.3-30.3c3-3.4 7.9-4.9 10.4-4.9 2.5 0 5.2.1 7.5.1 2.4 0 5.6-.9 8.7 6.6 3 7.3 10 25.1 10.9 26.9.9 1.8 1.5 3.9.3 6.4-1.2 2.5-1.8 3.9-3.6 6-1.8 2.1-3.9 4.7-1.6 8.9 2.3 4.1 10.1 16.5 21.7 26.6 14.9 13.3 26.9 17.5 31 19.4 4.1 1.8 6.4 1.5 8.8-.9 2.4-2.4 10.2-11.9 12.9-16 2.7-4.1 5.5-3.4 9.2-2 3.7 1.4 23.6 11.1 27.6 13.1 4.1 2 6.8 3 7.8 4.7 1 1.7 1 9.8-2 18.3z" />
    </svg>
  );
}

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const name = (formData.get("name") as string) || "Contato";
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";

    setIsSending(true);
    setFeedback(null);

    const time = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      hour12: false,
    });

    sendEmail({
      template: "contact",
      data: { name, email, message, time },
    })
      .then(() => {
        setFeedback({ type: "success", message: "Mensagem enviada com sucesso!" });
        formElement.reset();
      })
      .catch((err: any) => {
        console.error("Email send error", err);
        const reason =
          err?.text || err?.message || "Não foi possível enviar agora. Tente novamente em instantes.";
        setFeedback({ type: "error", message: reason });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="relative w-full overflow-hidden min-h-screen">
      <div className="absolute inset-0 -z-10 bg-[var(--ds-neutral-6)]" />
      <div className="absolute -left-32 top-16 -z-10 h-80 w-80 rounded-full bg-[var(--ds-primary-3)]/25 blur-[110px]" />
      <div className="absolute -right-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-[var(--ds-primary-1)]/20 blur-[120px]" />

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
                      <CustomButton type="submit" className="px-6 py-4" disabled={isSending}>
                        {isSending ? "Enviando..." : "Send email"}
                      </CustomButton>
                    </div>

                    {feedback && (
                      <div
                        className={`text-sm ${
                          feedback.type === "success" ? "text-emerald-300" : "text-rose-300"
                        }`}
                      >
                        {feedback.message}
                      </div>
                    )}
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
