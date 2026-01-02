"use client";

export default function CodeBuy() {
  return (
    <section
      id="code-about-section"
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

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 lg:px-28 text-left space-y-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-4xl">
          A space where technique meets presence and expression.
        </h2>
        <p className="text-lg text-white/80 max-w-3xl">
          A visual and emotional space designed to support the journey of the program.
          The environment invites presence, focus, and sensitivity — creating the right conditions for perception, connection, and expression to emerge.
        </p>

        <p className="text-lg text-white/80 max-w-3xl">
          Subtle transitions in tone and color reflect the evolution proposed by The Code: from awareness to choice, from structure to freedom, from movement to meaning.
        </p>

        <p className="text-lg text-white/80 max-w-3xl">
          The experience doesn’t explain or instruct.
          It simply holds the space where your dance can unfold with depth and intention.
        </p>
      </div>
    </section>
  );
}
