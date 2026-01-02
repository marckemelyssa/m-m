"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "The Code", href: "/home" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-14 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/icons/mm_logo.svg"
                alt="Marck e Melyssa"
                width={10}
                height={5}
                priority
                className="h-8 sm:h-9 w-auto select-none"
              />
            </Link>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-14 lg:gap-16 text-sm font-semibold uppercase tracking-[0.16em] ml-auto mr-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors text-white/80 hover:text-[var(--ds-primary-3)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 z-[70]">
          <button
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-[var(--ds-primary-1)] hover:text-[var(--ds-primary-2)] transition"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
              exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
            }}
            className="fixed top-0 left-0 h-screen w-screen sm:hidden bg-black/90 backdrop-blur-lg z-[60] flex flex-col px-8 py-20"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    },
                    exit: {
                      opacity: 0,
                      y: 10,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 text-2xl font-semibold tracking-wide transition-colors ${
                      pathname === item.href
                        ? "text-white"
                        : "text-white hover:text-[var(--ds-primary-1)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
