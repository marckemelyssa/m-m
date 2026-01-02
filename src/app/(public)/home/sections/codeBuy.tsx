"use client";

import Link from "next/link";

const bullets = [
  "Pré-venda com vaga garantida para a próxima turma.",
  "Acesso antecipado aos 3 primeiros módulos e playbooks-chave.",
  "Bonus: sessão ao vivo exclusiva de kick-off com Marck & Melyssa.",
  "Certificado oficial The Code ao concluir todas as etapas.",
];

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

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 lg:px-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="space-y-5 text-left lg:pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ds-primary-2)]">
              Pré-venda The Code
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Garanta sua vaga agora.
            </h2>
            <p className="text-lg text-white/85 max-w-3xl">
              Entre com vantagem: bloqueie sua vaga, receba acesso antecipado aos materiais iniciais
              e comece a aplicar o processo antes mesmo da turma abrir oficialmente.
            </p>
            <div className="space-y-3 text-white/90">
              {bullets.map((item) => (
                <div key={item} className="flex items-center gap-3 text-base sm:text-lg">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--ds-primary-1)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-[38px] bg-[var(--ds-primary-3)]/30 rounded-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,0.45)] p-8 sm:p-10 space-y-6 text-white">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--ds-primary-2)]">
                    Oferta de pré-venda
                  </p>
                  <h3 className="text-2xl font-semibold">Acesso completo + bônus</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/70 line-through">R$ 2.497</p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-[var(--ds-primary-1)]">
                    R$ 1.997
                  </p>
                  <p className="text-xs text-white/70">à vista ou 12x no cartão</p>
                </div>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-white/80">
                <p>✅ Vaga garantida na próxima turma.</p>
                <p>✅ Acesso antecipado aos 3 primeiros módulos.</p>
                <p>✅ Sessão ao vivo de kick-off exclusiva.</p>
                <p>✅ Certificado oficial assinado por M&M.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/checkout"
                  className="flex-1 inline-flex items-center justify-center rounded-xl bg-[var(--ds-primary-1)] px-5 py-3 text-lg font-semibold text-white shadow-lg shadow-[var(--ds-primary-1)]/30 hover:brightness-110 transition"
                >
                  Garantir pré-venda agora
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-lg font-semibold text-white/85 hover:border-white/40 transition"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
