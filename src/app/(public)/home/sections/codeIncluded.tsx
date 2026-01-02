"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

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
      
      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 lg:px-28 text-left text-white">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-24">
          <div className="relative w-full lg:w-[40%] max-w-[520px]">
            <div className="absolute inset-0 bg-black/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/the_code.jpg"
                alt="The Code"
                width={900}
                height={1100}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 w-full lg:w-[60%] max-w-[700px]">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              O que você leva do The Code
            </h2>
            <ul className="space-y-4 text-lg">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-white mt-1" />
                  <span className="text-white/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
