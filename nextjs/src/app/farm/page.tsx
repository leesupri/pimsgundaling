"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

const sectionIds = ["cows", "cheese", "gardens"];
const sectionImgs = [
  "/images/farm/cows/herd.jpg",
  "/images/farm/cheese-room/cheese.jpg",
  "/images/farm/gardens/beds.jpg",
];
const sectionBadges = ["🐄 Free Range", "🧀 Artisan", "🌱 Organic"];

export default function FarmPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const { t } = useLanguage();

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative h-[65vh] min-h-[500px] overflow-hidden flex items-end">
          <motion.div style={{ y }} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-farm-900/90 via-farm-900/40 to-farm-900/20 z-10" />
            <Image src="/images/hero/hero-farm.jpg" alt="Gundaling Farm" fill className="object-cover object-center" priority sizes="100vw" />
          </motion.div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-farm-300 text-xs uppercase tracking-[0.25em] font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-farm-400" />{t.farm.heroLabel}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="font-display font-black text-white text-5xl lg:text-7xl leading-tight">
              {t.farm.heroTitle1}<br /><span className="text-farm-300 italic">{t.farm.heroTitle2}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="text-white/70 mt-4 text-base lg:text-lg max-w-lg">
              {t.farm.heroDesc}
            </motion.p>
          </div>
          <div className="absolute bottom-0 inset-x-0 z-20">
            <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
              <path d="M0 50L0 25Q360 0 720 25Q1080 50 1440 25L1440 50Z" fill="#F9F6EF" />
            </svg>
          </div>
        </section>

        {/* Farm sections */}
        <section className="py-24 lg:py-32 bg-earth-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
            {t.farm.sectionsData.map(({ title, sub, desc }, i) => (
              <AnimatedSection key={sectionIds[i]} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <span className="inline-flex items-center gap-2 bg-farm-50 text-farm-600 text-xs font-bold px-3 py-1.5 rounded-full mb-4">{sectionBadges[i]}</span>
                    <h2 className="font-display font-black text-earth-900 text-3xl lg:text-4xl mb-2">{title}</h2>
                    <p className="text-farm-600 font-bold text-sm mb-4">{sub}</p>
                    <p className="text-earth-600 text-base leading-relaxed">{desc}</p>
                  </div>
                  <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl bg-earth-300">
                      <Image src={sectionImgs[i]} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" onError={() => {}} />
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Field Trip */}
        <section id="fieldtrip" className="py-24 bg-farm-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/farm/fieldtrip/kids.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="text-center mb-14">
              <span className="text-farm-300 text-xs uppercase tracking-[0.25em] font-bold mb-3 block">{t.farm.fieldTripLabel}</span>
              <h2 className="font-display font-black text-white text-4xl lg:text-5xl">{t.farm.fieldTripTitle}</h2>
              <p className="text-farm-200 mt-3 text-base max-w-xl mx-auto">{t.farm.fieldTripDesc}</p>
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {t.farm.packagesData.map(({ title, price, duration, items }) => (
                <motion.div key={title} variants={staggerItem} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                  <h3 className="font-display font-bold text-white text-xl mb-1">{title}</h3>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-farm-300 font-bold text-base">{price}</span>
                    <span className="text-farm-400 text-sm">· {duration}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-farm-200 text-sm">
                        <span className="text-farm-400 mt-0.5 shrink-0">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </StaggerContainer>
            <AnimatedSection className="text-center mt-10">
              <a href="https://wa.me/6281269669280" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {t.farm.registerWa}
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
