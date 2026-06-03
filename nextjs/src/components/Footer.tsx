"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const footerLinks = [
  {
    heading: "Menu",
    items: [
      { label: "Appetizer", href: "/restaurant#appetizers" },
      { label: "Taste of Karo", href: "/restaurant#karo" },
      { label: "Pizza & Pasta", href: "/restaurant#pizza" },
      { label: "Desserts", href: "/restaurant#desserts" },
      { label: "Gelato", href: "/restaurant#gelato" },
    ],
  },
  {
    heading: "Experience",
    items: [
      { label: "Farm Tour", href: "/farm" },
      { label: "Field Trip", href: "/farm#fieldtrip" },
      { label: "Cheese Room", href: "/farm#cheese" },
      { label: "Promo & Shop", href: "/promo" },
    ],
  },
  {
    heading: "Gundaling",
    items: [
      { label: "Our Story", href: "/about" },
      { label: "Reservasi", href: "/restaurant#reservation" },
      { label: "Kontak", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="bg-farm-900 text-white">
      {/* Walking mascot bar */}
      <div className="relative h-16 bg-farm-800 border-y border-white/10 overflow-hidden">
        <motion.div
          animate={{ x: ["calc(-120px)", "calc(100vw + 120px)"] }}
          transition={{ duration: 16, ease: "linear", repeat: Infinity }}
          className="absolute bottom-1 h-14 select-none"
        >
          <Image
            src="/images/mascot/cow_mascot_vector.svg"
            alt=""
            width={56}
            height={56}
            className="h-14 w-auto"
            draggable={false}
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-farm-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/logos/Logo_GUNDALING_2-color_tall_on-white.png"
              alt="Gundaling Farmstead"
              width={140}
              height={50}
              className="brightness-0 invert h-14 w-auto mb-5"
            />
            <p className="text-farm-200 text-sm leading-relaxed mb-5 max-w-xs">
              Farm to table di Dataran Tinggi Karo, Berastagi, Sumatera Utara.
              Dari ladang kami ke meja Anda sejak 2005.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-farm-700 text-farm-200 text-xs px-3 py-1 rounded-full">🌿 Organic</span>
              <span className="bg-farm-700 text-farm-200 text-xs px-3 py-1 rounded-full">Est. 2005</span>
              <span className="bg-farm-700 text-farm-200 text-xs px-3 py-1 rounded-full">Farm to Table</span>
            </div>
            <div className="flex gap-4">
              {[
                { label: "Instagram", href: "https://www.instagram.com/gundaling_farmstead" },
                { label: "Facebook", href: "https://www.facebook.com/GundalingFarmstead" },
                { label: "Linktree", href: "https://linktr.ee/gundaling_farmstead" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-farm-400 hover:text-white text-xs font-semibold transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map(({ heading, items }, gi) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (gi + 1) }}
            >
              <h4 className="font-display font-bold text-white text-base mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-farm-300 hover:text-white text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-farm-400 text-xs">
            © 2025 Gundaling Farmstead — PT. Putra Indo Mandiri Sejahtera
          </p>
          <p className="text-farm-500 text-xs">
            Jl. Jamin Ginting, Desa Jaranguda, Berastagi 22158 · 10.00–20.00 daily
          </p>
        </div>
      </div>
    </footer>
  );
}
