"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Briefcase, CalendarDays, Heart, LogOut, Menu, Ticket, User, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "@/hooks/useTranslation";

type MenuItem = { separator: true } | { separator?: false; label: string; href: string; icon: LucideIcon };

export default function NavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const {t} = useTranslation();

  const navLinks = [
    { label: "Codex", href: "/codex" },
    { label: "Sobre Nós", href: "/about" },
  ];

  const menuItems: MenuItem[] = [
    { label: "Cursos", href: "/courses", icon: Heart },
    { separator: true },
    { label: "Perfil", href: "/user/profile", icon: User },
    { label: "Sair", href: "#logout", icon: LogOut },
  ];
  const displayName = user?.displayName || "Usuário";
  const avatarFallback = displayName.slice(0, 2).toUpperCase();

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const renderAvatarButton = () => (
    <button
      className="hidden sm:flex items-center gap-2 rounded-full p-0.5 transition focus-visible:outline-none hover:bg-white/10"
      aria-label="Menu do usuário"
      disabled={loading}
    >
      <Avatar className="h-10 w-10 transition hover:ring-2 hover:ring-[var(--ds-primary-1)] hover:shadow-lg hover:shadow-black/50">
        <AvatarImage
          src={user?.photoURL ?? undefined}
          alt={displayName}
          className="object-cover"
        />
        <AvatarFallback className="bg-white/10 text-white text-xs font-semibold">
          {avatarFallback}
        </AvatarFallback>
      </Avatar>
    </button>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg">
      <div className="relative w-full px-1 sm:px-2 py-3 sm:py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/icons/mm_logo.png"
                alt="Marck e Melyssa"
                width={120}
                height={40}
                priority
                className="h-7 sm:h-8 w-auto select-none"
              />
            </Link>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-20 lg:gap-22 text-sm font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-[var(--ds-secondary-pure)]"
                  : "text-white/80 hover:text-[var(--ds-primary-1)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions + Mobile toggle */}
        <div className="flex items-center gap-4 z-[70]">
          {mounted && (loading || user) ? (
            <DropdownMenu open={userMenuOpen} onOpenChange={setUserMenuOpen} modal={false}>
              <DropdownMenuTrigger asChild>{renderAvatarButton()}</DropdownMenuTrigger>
              {user && (
                <DropdownMenuContent
                  align="end"
                  className="w-52 rounded-2xl border border-white/25 bg-black/35 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.5)] p-2 text-white/90"
                  sideOffset={10}
                >
                  {menuItems.map((item, index) =>
                    item.separator ? (
                      <DropdownMenuSeparator key={`sep-${index}`} className="mx-3 my-1 bg-white/15" />
                    ) : (
                      <DropdownMenuItem
                        key={item.href}
                        asChild
                        className="group flex items-center gap-3 rounded-lg px-3 py-2 text-[15px] font-medium hover:bg-white/5 focus:bg-white/5"
                      >
                        <Link
                          href={item.href}
                          className={
                            pathname === item.href ? "text-[var(--ds-secondary-pure)]" : "text-white/90"
                          }
                        >
                          <span className="flex items-center gap-3 text-white/90 group-hover:text-[var(--ds-primary-1)] group-focus:text-[var(--ds-primary-1)]">
                            <item.icon className="h-4 w-4 text-white/70 group-hover:text-[var(--ds-primary-1)] group-focus:text-[var(--ds-primary-1)]" />
                            {item.label}
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    )
                  )}
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          ) : (loading || user) ? (
            renderAvatarButton()
          ) : (
            <Link href="/login" className="hidden sm:block">
              <Button className="bg-[var(--ds-primary-2)] text-white hover:bg-[var(--ds-primary-pure)] font-semibold px-5 py-1 text-sm rounded-md">
                Login
              </Button>
            </Link>
          )}
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

      <Separator className="bg-gradient-to-r from-[var(--ds-primary-1)] to-[var(--ds-primary-2)]" />


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

              {user ? (
                <>
                  {menuItems
                    .filter((item) => !item.separator)
                    .map((item) => (
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
                          className={`flex items-center gap-3 text-2xl font-medium tracking-wide transition-colors ${
                            pathname === item.href
                              ? "text-[var(--ds-secondary-pure)]"
                              : "text-gray-700 hover:text-[var(--ds-secondary-pure)]"
                          }`}
                        >
                          <item.icon className="h-6 w-6" />
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  <Button
                    onClick={() => setMenuOpen(false)}
                    className="w-fit bg-[var(--ds-primary-2)] text-white hover:bg-[var(--ds-primary-pure)] font-semibold px-6"
                  >
                    Sair
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setMenuOpen(false)}
                  className="w-fit bg-[var(--ds-primary-2)] text-white hover:bg-[var(--ds-primary-pure)] font-semibold px-6"
                >
                  Login
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
