"use client";

import { CustomButton } from "@/components/common/custom-button";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";

export default function Intro() {
  const { t } = useTranslation();

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
        <div className="max-w-xl space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl sm:text-5xl font-extrabold text-neutral-100"
          >
            Welcome to the Code.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-neutral-200"
          >
            A one-year online experience that blends live mentoring, on-demand training, and a replicable Brazilian Zouk methodology.
            Designed to keep you in rhythm, launch your artistic voice, and deliver real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CustomButton onClick={scrollToAbout}>
              Explore
            </CustomButton>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
