"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/AnimatedSection";

// ── Parallax hero ──────────────────────────────────────────────────
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const textY = useTransform(smooth, [0, 1], ["0%", "25%"]);

  const words = ["Every", "Dish", "Begins"];
  const highlight = "in Our Garden.";

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden flex items-center">
      {/* Parallax bg */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-farm-900/60 via-farm-900/30 to-farm-900/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-farm-900/50 to-transparent z-10" />
        <Image
          src="/images/restaurant/story.jpg"
          alt="Gundaling Farmstead"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Floating grain overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }} />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="inline-flex items-center gap-2 text-farm-300 text-xs uppercase tracking-[0.25em] font-bold mb-6"
        >
          <span className="w-8 h-px bg-farm-400 inline-block" />
          Open Kitchen · Wood-Fire Oven · Farm to Table
        </motion.span>

        <h1 className="font-display font-black text-white leading-[0.9] mb-6">
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="block overflow-hidden"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-5xl sm:text-7xl lg:text-9xl inline-block">{word}</span>
            </motion.span>
          ))}
          <motion.span
            className="block overflow-hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ delay: 0.4 + words.length * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-5xl sm:text-7xl lg:text-9xl text-farm-300 italic inline-block">
              {highlight}
            </span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="text-white/70 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed"
        >
          Menu kami berubah setiap musim — mengikuti apa yang tumbuh hari ini
          dari kebun dan kandang kami sendiri di Berastagi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/restaurant"
            className="group inline-flex items-center gap-3 bg-farm-400 hover:bg-farm-300 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-farm-400/40"
          >
            Lihat Menu
            <span className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center group-hover:translate-x-1 transition-transform text-xs">→</span>
          </Link>
          <Link
            href="/restaurant#reservation"
            className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          >
            Reservasi Meja
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 inset-x-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0 60L0 30Q360 0 720 30Q1080 60 1440 30L1440 60Z" fill="#F9F6EF" />
        </svg>
      </div>
    </section>
  );
}

// ── Stats counter ──────────────────────────────────────────────────
const stats = [
  { value: "20+", label: "Tahun berdiri" },
  { value: "50+", label: "Menu pilihan" },
  { value: "5", label: "Varian keju artisan" },
  { value: "13", label: "Rasa gelato segar" },
];

function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-earth-200 py-14">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="font-display font-black text-4xl lg:text-5xl text-farm-600 mb-1">{value}</p>
            <p className="text-earth-500 text-sm font-semibold uppercase tracking-wide">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── Story section ──────────────────────────────────────────────────
function Story() {
  return (
    <section className="bg-farm-900 relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 opacity-10">
        <Image src="/images/farm/cows/herd.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-farm-400 text-xs uppercase tracking-[0.25em] font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-farm-400" />Our Story
            </span>
            <h2 className="font-display font-black text-white text-4xl lg:text-6xl leading-tight mb-6">
              Farm.<br />
              <span className="text-farm-300 italic">Table.</span><br />
              Community.
            </h2>
            <p className="text-farm-200 text-base leading-relaxed mb-6">
              Sejak 2005, kami membudidayakan sapi Holstein di ketinggian 1.400m
              di Berastagi. Dari susu segar lahir keju artisan, gelato, dan masakan
              yang merayakan tanah Karo.
            </p>
            <p className="text-farm-300 text-base leading-relaxed mb-8">
              Setiap hidangan bercerita tentang musim, tentang tangan yang merawat,
              dan tentang kepercayaan bahwa makanan terbaik tumbuh berdekatan dengan meja Anda.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-farm-300 hover:text-white font-bold text-sm uppercase tracking-wider transition-colors group"
            >
              Pelajari Lebih Lanjut
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
              >
                <Image
                  src="/images/farm/cows/herd.jpg"
                  alt="Sapi Holstein di Gundaling Farmstead"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-farm-900/40 to-transparent" />
              </motion.div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-farm-400 text-white rounded-2xl p-4 shadow-xl shadow-farm-400/30"
              >
                <p className="font-display font-black text-3xl leading-none">1400</p>
                <p className="text-sm font-semibold opacity-90">mdpl Berastagi</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ── Feature cards ──────────────────────────────────────────────────
const features = [
  {
    icon: "🧀",
    title: "Keju Artisan",
    description: "5 varietas keju hand-crafted dari susu segar Holstein kami. Andaliman, Sinabung, Mozzarella, Camembert, dan Gundaling Cheese.",
    href: "/restaurant#take-home",
    image: "/images/menu/cheese/Gundaling farmstead new menu-278-Edit.png",
  },
  {
    icon: "🍕",
    title: "Wood-Fire Pizza",
    description: "15 varian pizza dipanggang di oven kayu, dengan mozzarella buatan sendiri dan toping premium dari peternakan.",
    href: "/restaurant#pizza",
    image: "/images/menu/pizza/Gundaling farmstead-117-Edit.png",
  },
  {
    icon: "🍧",
    title: "Gelato Segar",
    description: "13 rasa gelato dan sorbet yang dibuat setiap hari dari susu Holstein kami. Bebas pengawet dan perisa buatan.",
    href: "/restaurant#gelato",
    image: "/images/menu/desserts/Gundaling farmstead-268.png",
  },
  {
    icon: "🌿",
    title: "Taste of Karo",
    description: "Resep autentik dataran tinggi Karo — Bakaran Karo, Iga Bakar, Tasak Telu, Ayam Nira, dan banyak lagi.",
    href: "/restaurant#karo",
    image: "/images/menu/karo/iga-bakar-karo.png",
  },
];

function Features() {
  return (
    <section className="py-24 lg:py-32 bg-earth-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-16">
          <span className="text-farm-500 text-xs uppercase tracking-[0.25em] font-bold mb-3 block">What We Offer</span>
          <h2 className="font-display font-black text-earth-900 text-4xl lg:text-6xl">
            The Gundaling<br />
            <span className="text-farm-600 italic">Experience</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon, title, description, href, image }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link href={href} className="block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-400">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      onError={() => {}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-900/40 to-transparent" />
                  </motion.div>
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-xl shadow-sm">
                    {icon}
                  </div>
                </div>
                {/* Text */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-earth-900 text-lg mb-2">{title}</h3>
                  <p className="text-earth-500 text-sm leading-relaxed line-clamp-3">{description}</p>
                  <div className="flex items-center gap-1 mt-4 text-farm-500 text-sm font-bold group-hover:gap-2 transition-all">
                    Lihat Menu <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── Farm tour CTA ──────────────────────────────────────────────────
function FarmCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-farm.jpg"
          alt="Gundaling Farm"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-farm-900/75" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <AnimatedSection>
          <span className="text-farm-300 text-xs uppercase tracking-[0.25em] font-bold mb-4 block">Farm Experience</span>
          <h2 className="font-display font-black text-white text-4xl lg:text-6xl mb-6">
            Kunjungi Peternakan<br />
            <span className="text-farm-300 italic">Kami Langsung</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Ikuti tur peternakan kami, lihat proses pembuatan keju, dan bawa pulang
            produk segar langsung dari sumbernya. Tersedia paket field trip untuk sekolah.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/farm"
              className="inline-flex items-center gap-3 bg-farm-400 hover:bg-farm-300 text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-farm-400/30"
            >
              Jelajahi Farm
            </Link>
            <a
              href="https://wa.me/6281269669280"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-all hover:bg-white/10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Hubungi via WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ── Menu preview ───────────────────────────────────────────────────
const menuHighlights = [
  { name: "Iga Bakar Karo", price: "160K", cat: "Taste of Karo", img: "/images/menu/karo/iga-bakar-karo.png" },
  { name: "Gundaling Farmstead Steak", price: "348K", cat: "Western", img: "/images/menu/western/Gundaling farmstead new menu-036.png" },
  { name: "Coffee Latte", price: "35–38K", cat: "Coffee", img: "/images/menu/drinks/Gundaling farmstead-192-coffe latte.png" },
  { name: "Tanah Berastagi", price: "50K", cat: "Desserts", img: "/images/menu/desserts/Gundaling farmstead-268.png" },
  { name: "Three Cheese Pizza", price: "120K", cat: "Pizza", img: "/images/menu/pizza/Gundaling farmstead-117-Edit.png" },
  { name: "Aglio E Olio Chicken", price: "80K", cat: "Pasta", img: "/images/menu/pasta/Gundaling farmstead-067.png" },
];

function MenuPreview() {
  return (
    <section className="py-24 lg:py-32 bg-earth-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <AnimatedSection>
            <span className="text-farm-500 text-xs uppercase tracking-[0.25em] font-bold mb-3 block">Our Menu</span>
            <h2 className="font-display font-black text-earth-900 text-4xl lg:text-5xl">
              Pilihan <span className="text-farm-600 italic">Terbaik</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <Link href="/restaurant" className="inline-flex items-center gap-2 text-farm-600 hover:text-farm-500 font-bold text-sm uppercase tracking-wider group">
              Lihat Semua Menu <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {menuHighlights.map(({ name, price, cat, img }) => (
            <motion.div
              key={name}
              variants={staggerItem}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/restaurant">
                <div className="relative aspect-[4/3] bg-earth-300">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                    onError={() => {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <span className="text-farm-300 text-xs font-bold uppercase tracking-widest block mb-1">{cat}</span>
                    <h3 className="font-display font-bold text-white text-base leading-snug">{name}</h3>
                    <p className="text-white/80 text-sm font-bold mt-1">Rp {price}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── Reservation CTA ────────────────────────────────────────────────
function ReservationCTA() {
  return (
    <section className="py-24 bg-earth-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="bg-farm-700 rounded-[2.5rem] p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-farm-300 translate-x-20 -translate-y-20" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-farm-400 -translate-x-16 translate-y-16" />
          </div>
          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mx-auto mb-6"
            >
              <Image
                src="/images/mascot/cow_mascot_apron.svg"
                alt="Maskot Gundaling"
                width={100}
                height={100}
                className="mx-auto"
              />
            </motion.div>
            <h2 className="font-display font-black text-white text-3xl lg:text-5xl mb-4">
              Reservasi Meja Anda
            </h2>
            <p className="text-farm-200 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Buka setiap hari pukul 10.00–20.00. Untuk grup lebih dari 8 orang, hubungi kami via WhatsApp.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/restaurant#reservation"
                className="inline-flex items-center gap-2 bg-white text-farm-700 hover:bg-farm-50 font-bold px-8 py-4 rounded-full transition-all"
              >
                Reservasi Online
              </Link>
              <a
                href="https://wa.me/6282162599980"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#22c55e] font-bold px-8 py-4 rounded-full transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Story />
        <MenuPreview />
        <FarmCTA />
        <ReservationCTA />
      </main>
      <Footer />
      {/* WhatsApp float */}
      <motion.a
        href="https://wa.me/6282162599980"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </motion.a>
    </>
  );
}
