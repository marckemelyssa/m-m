"use client";

import { CheckCircle2, Shield, Rocket, Sparkles, Clock4, Crown, Users, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

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
  },
  {
    icon: Users,
    title: "Comunidade e networking",
    desc: "Trocas com profissionais e pares para gerar conexões e oportunidades.",
  },
  {
    icon: ClipboardCheck,
    title: "Entrega guiada",
    desc: "Trilhas com checkpoints e revisões para manter a qualidade e o foco.",
  }
];

export default function CodeInfo() {
  return (
    <section className="relative z-10 w-full bg-transparent py-16">
      <div className="max-w-[1300px] mx-auto space-y-8 text-left">

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-5xl">
          Mais que um curso, um caminho completo para dominar o código.
        </h2>
        <p className="text-lg text-gray-200 max-w-4xl">
          Estruturamos uma jornada comercial e prática: do zero à entrega, com acompanhamento,
          projetos guiados e uma linha editorial que mantém você motivado.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5 max-w-6xl">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex gap-3 items-center rounded-2xl border border-white/10 bg-white/5 px-3.5 py-3 backdrop-blur-md"
            >
              <div className="flex h-10 w-10 aspect-square items-center justify-center rounded-full bg-[var(--ds-primary-1)]/25">
                <item.icon className="h-4 w-4 text-[var(--ds-primary-1)]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-semibold text-sm sm:text-base">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
