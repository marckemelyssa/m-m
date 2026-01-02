"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CodeIntro() {
  return (
    <section className="relative z-10 w-full bg-transparent py-20">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
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
            Welcome to the code
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Um programa para elevar sua dança a um alto impacto.
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-4xl">
            Aceleramos sua evolução com uma curadoria prática, mentorias próximas e projetos que simulam o mercado real.
            Você entra com vontade; sai com um processo completo para entregar software e crescer na carreira.
          </p>
          <p className="text-base sm:text-lg text-white/70 max-w-3xl">
            É mais que um curso: é um caminho comercial, sustentável e acompanhado, para você não perder o ritmo,
            construir portfólio sólido e disputar as melhores oportunidades.
          </p>
        </div>

        <div className="relative w-full max-w-[380px] mx-auto">
          <div className="absolute inset-0 bg-[var(--ds-primary-1)]/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
            <Image
              src="/images/the_code.jpg"
              alt="The Code"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
