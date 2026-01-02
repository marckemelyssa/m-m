import {
  Sparkles,
  Compass,
  Activity,
  Clock4,
  Users,
  Layers
} from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Immersive depth",
    desc: "A process focused on awareness and refinement, allowing your dance to unfold with clarity and intention.",
  },
  {
    icon: Compass,
    title: "Structured clarity",
    desc: "A clear framework that guides your journey and supports confident, conscious progression.",
  },
  {
    icon: Activity,
    title: "Embodied practice",
    desc: "Guided explorations that transform understanding into physical expression.",
  },
  {
    icon: Clock4,
    title: "Sustainable journey",
    desc: "A long-term path designed to respect your body, rhythm, and life.",
  },
  {
    icon: Users,
    title: "Community and connection",
    desc: "A shared space to connect, exchange perspectives, and grow together.",
  },
  {
    icon: Layers,
    title: "Guided evolution",
    desc: "Structured chapters that support depth, consistency, and artistic integrity.",
  }
];

export default function CodeInfo() {
  return (
    <section className="relative z-10 w-full bg-transparent py-16">
      <div className="max-w-[1300px] mx-auto space-y-8 text-left">

        <div className="space-y-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-5xl">
            A code to guide your journey
          </h2>
          <p className="text-lg text-gray-200 max-w-4xl">
            We’ve designed a focused and intentional journey: from foundation to expression, with close guidance,
            structured chapters, and a clear methodology that keeps your evolution consistent and inspired.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5 w-full mx-auto">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex gap-3 items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md min-w-[280px]"
            >
              <div className="flex h-10 w-10 aspect-square items-center justify-center rounded-full bg-[var(--ds-primary-1)]/25">
                <item.icon className="h-4 w-4 text-[var(--ds-primary-1)]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-semibold text-sm sm:text-base">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
