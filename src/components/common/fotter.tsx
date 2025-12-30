"use client";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-black/40 backdrop-blur-lg border-t border-white/10 text-white">
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white/70">
          © 2026 Marck and Melyssa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
