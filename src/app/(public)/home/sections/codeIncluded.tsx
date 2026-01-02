"use client";

import { Star } from "lucide-react";

const items = [
  "Mentorias ao vivo para feedback direto.",
  "Playbooks de discovery, entrega e lançamento.",
  "Trilhas práticas com checkpoints claros.",
  "Comunidade ativa para trocar e abrir oportunidades.",
  "Templates visuais e narrativas para vender valor.",
];

export default function CodeIncluded() {
  return (
    <section className="relative z-10 w-screen max-w-none left-1/2 -translate-x-1/2 overflow-hidden pb-16 pt-8 -mt-16">
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{
          width: "100vw",
          left: "50%",
          transform: "translateX(-50%)",
          background: "var(--ds-primary-3)",
          minHeight: "100%",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 lg:px-28 text-left space-y-6 text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          O que você leva do The Code
        </h2>
        <ul className="space-y-3 text-lg">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 rounded-full bg-white/15 p-1.5">
                <Star className="h-4 w-4 text-white" />
              </span>
              <span className="text-white/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
