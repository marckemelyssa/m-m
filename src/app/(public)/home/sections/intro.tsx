"use client";

import { CustomButton } from "@/components/common/custom-button";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";

export default function Intro() {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    const aboutElement = document.getElementById('about-section');
    if (aboutElement) {
      aboutElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center">
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-28">
        <div className="max-w-xl space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-5xl sm:text-6xl font-extrabold text-neutral-100"
          >
            Marck & Melyssa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-neutral-200"
          >
            Teachers, coreographys and creators of The Code: a one-year online experience that reveals the
            methodology behind their dance, refined through years of research
            and a journey across more than 30 countries.
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
