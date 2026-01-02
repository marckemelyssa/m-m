"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "44 in-depth video classes",
    desc: "Monthly themes with weekly progressions, covering Marck & Melyssa’s complete Brazilian Zouk methodology.",
  },
  {
    title: "11 live mentoring sessions with M&M",
    desc: "One group session per month (Feb–Dec 2026) to guide your progression and deepen understanding.",
  },
  {
    title: "Monthly personalized feedback",
    desc: "One video feedback per month (up to 1 minute), focused on refinement and clarity.",
  },
  {
    title: "Structured learning path",
    desc: "Clear chapters and checkpoints to maintain rhythm, focus, and continuity.",
  },
  {
    title: "Community & exchange",
    desc: "Access to an active international community for shared growth and perspective.",
  },
  {
    title: "Exclusive benefits",
    desc: "15% OFF private classes (from 2027) + Official The Code Certificate, approved and signed by M&M.",
  },
];

export default function CodeIncluded() {
  return (
    <section
      id="code-included-section"
      className="relative z-10 w-full bg-transparent py-20"
    >
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div className="relative w-full max-w-[550px] mx-auto lg:mx-0">
          <div className="absolute left-1/2 top-1/2 w-[78%] max-w-[420px] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ds-primary-3)]/22 blur-[42px]" />
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
            {items.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-[var(--ds-primary-3)] flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="text-base sm:text-lg font-semibold text-white leading-tight">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
