"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, Send } from "lucide-react";

import { CustomButton } from "@/components/common/custom-button";
import { Input } from "@/components/ui/input";

const contactEmail = "hello@marckmelyssa.com";
const contactPhone = "+55 (11) 99999-9999";
const contactPhoneHref = "tel:+5511999999999";

const contactEntries = [
  {
    label: "Instagram",
    value: "@marckmelyssa",
    href: "https://www.instagram.com/marckmelyssa",
    icon: Instagram,
  },
  {
    label: "Facebook",
    value: "/marckmelyssa",
    href: "https://www.facebook.com/marckmelyssa",
    icon: Facebook,
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
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[var(--ds-neutral-6)]" />
      <div className="absolute -left-32 top-16 -z-10 h-80 w-80 rounded-full bg-[var(--ds-primary-3)]/25 blur-[110px]" />
      <div className="absolute -right-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-[var(--ds-primary-1)]/20 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

      <div className="px-4 sm:px-6 md:px-12 lg:px-28">
        <section className="relative z-10 py-24 space-y-12">
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
                      Contatos
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
                <div className="absolute inset-0 bg-[var(--ds-primary-1)]/25 blur-3xl" />
                <div className="relative rounded-3xl border border-white/10 bg-black/50 p-8 sm:p-10 shadow-2xl shadow-black/40 backdrop-blur-xl">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-[var(--ds-primary-3)]/25 flex items-center justify-center">
                        <Send className="h-5 w-5 text-[var(--ds-primary-3)]" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--ds-primary-2)]">Mensagem</p>
                        <h2 className="text-xl font-semibold text-white">Envie um email rápido</h2>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm text-white/80">Nome</label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Seu nome"
                          className="h-11 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/50 focus:border-[var(--ds-primary-2)] focus:ring-[var(--ds-primary-2)]/40"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-white/80">Email</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="voce@email.com"
                          className="h-11 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/50 focus:border-[var(--ds-primary-2)] focus:ring-[var(--ds-primary-2)]/40"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm text-white/80">Mensagem</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Conte-nos como podemos ajudar ou qual convite você tem em mente."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/50 focus:border-[var(--ds-primary-2)] focus:ring-[var(--ds-primary-2)]/40 focus:outline-none transition"
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                      <p className="text-sm text-white/60">
                        Respondemos em até 48h. Quanto mais contexto, melhor o retorno.
                      </p>
                      <CustomButton type="submit" className="px-6 py-4">
                        Enviar email
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
