"use client";

export default function CodeAbout() {
  return (
    <section className="relative z-10 w-full overflow-hidden py-20">
      {/* Fundo full-bleed com gradiente neutro → rosa (meio) → neutro */}
      <div className="absolute inset-0 pointer-events-none" style={{ width: "100vw", left: "50%", transform: "translateX(-50%)" }}>
        <div className="absolute inset-0 bg-[var(--ds-neutral-6)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ds-neutral-6)] via-[var(--ds-primary-2)]/22 to-[var(--ds-neutral-6)]" />
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[var(--ds-primary-2)]/18 blur-3xl" />
        <div className="absolute -bottom-32 right-1/3 h-80 w-80 rounded-full bg-[var(--ds-primary-1)]/18 blur-3xl" />
      </div>

      <div className="relative max-w-[1300px] mx-auto text-left space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ds-primary-2)]">
          A atmosfera do The Code
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-4xl">
          Um cenário rosa imersivo para entrar no ritmo do programa.
        </h2>
        <p className="text-lg text-white/80 max-w-3xl">
          Nada de cartões, listas ou distrações — só um ambiente contínuo que começa no neutro e se
          desdobra em rosa, refletindo a energia comercial do The Code enquanto você se prepara para criar.
        </p>
      </div>
    </section>
  );
}
