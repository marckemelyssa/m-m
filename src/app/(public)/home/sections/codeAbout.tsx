"use client";

import { CheckCircle2, Shield, Rocket, Sparkles, Clock4, Crown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  {
    icon: Rocket,
    title: "Imersão acelerada",
    desc: "Método focado em ganhar tração rápida sem perder a base técnica.",
  },
  {
    icon: Shield,
    title: "Estrutura segura",
    desc: "Roteiros, planos e revisões para você não se perder no caminho.",
  },
  {
    icon: Sparkles,
    title: "Hands-on real",
    desc: "Projetos práticos e feedback contínuo para consolidar o aprendizado.",
  },
  {
    icon: Clock4,
    title: "Ritmo sustentável",
    desc: "Cronogramas calibrados para caber na sua rotina sem esgotar.",
  }
];

export default function CodeAbout() {
  return (
    <section className="relative z-10 w-full bg-transparent px-4 sm:px-6 md:px-12 lg:px-28 py-20">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div className="space-y-6">

          <motion.div
            className="absolute top-0 left-0 right-0 px-6 sm:px-10 lg:px-16"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: "center", willChange: "transform, opacity" }}
          >
            <div className="w-full h-0.5 bg-[var(--ds-primary-3)] rounded-full" />
          </motion.div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ds-primary-2)]">
            The Code
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Mais que um curso, um caminho completo para dominar o código.
          </h2>
          <p className="text-lg text-gray-200">
            Estruturamos uma jornada comercial e prática: do zero à entrega, com acompanhamento,
            projetos guiados e uma linha editorial que mantém você motivado.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md"
              >
                <div className="flex h-11 w-11 aspect-square items-center justify-center rounded-full bg-[var(--ds-primary-1)]/25">
                  <item.icon className="h-5 w-5 text-[var(--ds-primary-1)]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-white font-semibold text-base">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-[520px] mx-auto">
          <div className="absolute inset-0 bg-[var(--ds-primary-1)]/40 blur-3xl" />
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
