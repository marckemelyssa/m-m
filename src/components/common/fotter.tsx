"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";
import { CustomButton } from "./custom-button";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollToTopInstantly } from "@/components/utils/scroll-to-top";
import LanguageModal from "./languageModal";
import { Globe2 } from "lucide-react";

type LanguageCode = "en" | "pt" ;

const languages: { code: LanguageCode; label: string }[] = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português (Brasil)" }
];

export default function Footer() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const displayLanguage =
    languages.find((l) => l.code === language)?.label || "Language";

  return (
    <footer className="relative z-20 w-full bg-black/40 backdrop-blur-lg border-t border-white/10 text-white">
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white/70">
          CopyRight
        </p>

        <CustomButton
          variant="neutral"
          onClick={() => setIsOpen(true)}
          icon={<Globe2 className="w-4 h-4 text-[var(--ds-primary-1)]" />}
          className="bg-white/10 border border-[var(--ds-primary-1)] text-white hover:bg-[var(--ds-primary-1)]/20"
        >
          {displayLanguage}
        </CustomButton>
      </div>

      {/* Modal */}
      <LanguageModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Título"
        description="Descrição"
      >
        <div className="grid grid-cols-2 gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                ScrollToTopInstantly();
                window.location.reload();
              }}
              className={`
                flex items-center justify-center text-center
                rounded-xl px-4 py-3
                border border-white/20
                bg-white/5 hover:bg-white/10
                text-white transition cursor-pointer
                ${lang.code === language ? "border-[var(--ds-primary-1)] bg-[var(--ds-primary-1)]/15" : ""}
              `}
            >
              <span className="text-white text-sm">
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      </LanguageModal>
    </footer>
  );
}
