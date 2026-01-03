"use client";

import { CustomButton } from "@/components/common/custom-button";
import { motion } from "framer-motion";

export default function Intro() {
  const scrollToAbout = () => {
    const target = document.getElementById("code-intro-section");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center">
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="max-w-3xl space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0 }}
            className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ds-primary-2)]"
          >
            The Code by Marck & Melyssa
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }}
            className="text-4xl sm:text-5xl font-extrabold text-neutral-100 leading-tight"
          >
            Elevate your dance through a signature Brazilian Zouk methodology.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.16 }}
            className="text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-2xl"
          >
            A one-year guided online experience with Marck & Melyssa, combining live mentoring and on-demand training through a refined Brazilian Zouk methodology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <CustomButton onClick={scrollToAbout}>
              Explore the experience
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
