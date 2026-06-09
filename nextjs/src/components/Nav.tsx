"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/restaurant", label: t.nav.restaurant },
    { href: "/farm", label: t.nav.farm },
    { href: "/promo", label: t.nav.promoShop },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 lg:px-12 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-farm-900/95 backdrop-blur-md shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logos/Logo_GUNDALING_2-color_tall_on-white.png"
            alt="Gundaling Farmstead"
            width={120}
            height={40}
            className="brightness-0 invert object-contain transition-all duration-300"
            style={{ height: scrolled ? "2.25rem" : "2.75rem", width: "auto" }}
            priority
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative text-sm font-semibold uppercase tracking-widest transition-colors group ${
                  pathname === href ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-farm-300 transition-all duration-300 ${
                    pathname === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="hidden lg:flex items-center gap-1 bg-white/10 rounded-full p-1">
            {(["id", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
                  lang === l
                    ? "bg-farm-400 text-white shadow"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            href="/restaurant#reservation"
            className="hidden lg:inline-flex items-center gap-2 bg-farm-400 hover:bg-farm-300 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-farm-400/30"
          >
            {t.nav.reserve}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            <motion.div animate={open ? "open" : "closed"} className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-white block origin-left"
                variants={{ open: { rotate: 45, y: -1 }, closed: { rotate: 0, y: 0 } }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white block"
                variants={{ open: { opacity: 0, x: -10 }, closed: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white block origin-left"
                variants={{ open: { rotate: -45, y: 1 }, closed: { rotate: 0, y: 0 } }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-40 bg-farm-900 pt-24 pb-8 px-6 shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {links.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={href}
                    className={`block py-3 border-b border-white/10 text-lg font-semibold uppercase tracking-wide transition-colors ${
                      pathname === href ? "text-farm-300" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              {/* Mobile language toggle */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.06 }}
                className="pt-3 flex gap-2"
              >
                {(["id", "en"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`flex-1 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                      lang === l
                        ? "bg-farm-400 text-white"
                        : "border border-white/30 text-white/70 hover:text-white"
                    }`}
                  >
                    {l === "id" ? "🇮🇩 Indonesia" : "🇬🇧 English"}
                  </button>
                ))}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (links.length + 1) * 0.06 }}
                className="pt-2"
              >
                <Link
                  href="/restaurant#reservation"
                  className="block text-center bg-farm-400 text-white font-bold py-3.5 rounded-full"
                >
                  {t.nav.reserveTable}
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
