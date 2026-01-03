"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function CodeBuy() {
  return (
    <section
      id="code-buy-section"
      className="relative z-10 w-screen max-w-none left-1/2 -translate-x-1/2 overflow-hidden py-20"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{
          width: "100vw",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(to bottom, var(--ds-neutral-6) 0%, var(--ds-primary-3) 100%)",
        }}
      />

      <div className="relative max-w-[1300px] mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="space-y-5 text-left lg:pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ds-primary-2)]">
              Early Access to The Code
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Early Access to The Code
            </h2>
            <p className="text-lg text-white/85 max-w-3xl">
              By pre-ordering, you guarantee your spot in the upcoming cohort and secure your place as soon as the program officially launches.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[var(--ds-primary-3)]/30 rounded-2xl" />
            <div className="relative rounded-2xl bg-black/40 p-10 sm:p-12 space-y-6 text-white min-h-[420px]">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  Full Access
                </h3>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  Reserve your place now and join the next cohort with priority status when The Code officially begins.
                </p>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-white/80">
                {[
                  "Guaranteed spot in the next cohort",
                  "Full access to the complete program at launch",
                  "Live kick-off session with Marck & Melyssa",
                  "Official The Code Certificate upon completing all stages"
                ].map((line) => (
                  <div key={line} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--ds-primary-1)]" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/checkout"
                  className="flex-1 inline-flex items-center justify-center rounded-xl bg-[var(--ds-primary-1)] px-5 py-3 text-lg font-semibold text-white shadow-lg shadow-[var(--ds-primary-1)]/30 hover:brightness-110 transition"
                >
                  Pre-Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
