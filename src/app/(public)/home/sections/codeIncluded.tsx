"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CodeIncluded() {
  return (
    <section
      id="code-included-section"
      className="relative z-10 w-full bg-transparent py-20"
    >
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div className="relative w-full max-w-[550px] mx-auto lg:mx-0">
          <div className="absolute left-1/2 top-4/7 w-[78%] max-w-[420px] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ds-primary-3)]/22 blur-[42px]" />
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/included.svg"
              alt="The Code"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <motion.div
            className="absolute top-0 left-0 right-0 px-6 sm:px-10 lg:px-16"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: "center", willChange: "transform, opacity" }}
          >
            <div className="w-full h-0.5 bg-[var(--ds-primary-3)] rounded-full" />
          </motion.div>

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ds-primary-2)]">
            Many Benefits
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            What’s included in your The Code experience
          </h2>
          <div className="space-y-4 text-lg sm:text-xl text-white/85">
            {[
              "44 in-depth video classes",
              "Playbooks práticos de discovery, entrega e lançamento para acelerar resultados.",
              "Trilhas com checkpoints claros para manter ritmo, foco e consistência.",
              "Comunidade ativa para trocar, testar ideias e abrir oportunidades reais.",
              "Templates visuais e narrativas para vender valor com clareza e impacto."
            ].map((line) => (
              <div key={line} className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[var(--ds-primary-3)] flex-shrink-0" />
                <span className="leading-relaxed">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
