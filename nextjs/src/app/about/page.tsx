"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

const valueIcons = ["🌿", "🧀", "🌍", "♻️"];

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const { t } = useLanguage();

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative h-[50vh] min-h-[380px] overflow-hidden flex items-end">
          <motion.div style={{ y }} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-farm-900/90 to-farm-900/30 z-10" />
            <Image src="/images/hero/hero-farm.jpg" alt="Gundaling Farmstead Story" fill className="object-cover" priority sizes="100vw" />
          </motion.div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-farm-300 text-xs uppercase tracking-[0.25em] font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-farm-400" />{t.about.heroLabel}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="font-display font-black text-white text-4xl lg:text-6xl">
              {t.about.heroTitle}
            </motion.h1>
          </div>
          <div className="absolute bottom-0 inset-x-0 z-20">
            <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
              <path d="M0 50L0 25Q360 0 720 25Q1080 50 1440 25L1440 50Z" fill="#F9F6EF" />
            </svg>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 lg:py-32 bg-earth-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <span className="text-farm-500 text-xs uppercase tracking-[0.25em] font-bold mb-4 block">{t.about.missionLabel}</span>
                <h2 className="font-display font-black text-earth-900 text-4xl lg:text-5xl mb-6">
                  {t.about.missionTitle1}<br /><span className="text-farm-600 italic">{t.about.missionTitle2}</span>
                </h2>
                <p className="text-earth-600 text-base leading-relaxed mb-4">{t.about.missionP1}</p>
                <p className="text-earth-600 text-base leading-relaxed">{t.about.missionP2}</p>
              </AnimatedSection>
              <AnimatedSection direction="right">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <Image src="/images/farm/cows/herd.jpg" alt="Holstein cattle at Gundaling" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-farm-900/30 to-transparent" />
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-earth-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-14">
              <h2 className="font-display font-black text-earth-900 text-4xl lg:text-5xl">{t.about.valuesTitle}</h2>
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.about.valuesData.map(({ title, desc }, idx) => (
                <motion.div key={title} variants={staggerItem} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-farm-50 rounded-2xl flex items-center justify-center text-2xl mb-4">{valueIcons[idx]}</div>
                  <h3 className="font-display font-bold text-earth-900 text-lg mb-2">{title}</h3>
                  <p className="text-earth-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-farm-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src="/images/hero/hero-farm.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-display font-black text-white text-4xl lg:text-5xl">{t.about.timelineTitle}</h2>
            </AnimatedSection>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-farm-700 -translate-x-1/2 hidden lg:block" />
              <div className="space-y-12">
                {t.about.timelineData.map(({ year, title, desc }, i) => (
                  <AnimatedSection key={year} delay={i * 0.05} direction={i % 2 === 0 ? "left" : "right"}>
                    <div className={`flex flex-col lg:flex-row gap-6 items-center lg:items-start ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                      <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                        <div className="inline-flex items-center gap-3 mb-2">
                          <span className="font-display font-black text-farm-400 text-xl">{year}</span>
                        </div>
                        <h3 className="font-display font-bold text-white text-xl mb-2">{title}</h3>
                        <p className="text-farm-200 text-sm leading-relaxed">{desc}</p>
                      </div>
                      <div className="hidden lg:flex w-5 h-5 rounded-full bg-farm-400 shrink-0 relative z-10 mt-1" />
                      <div className="flex-1 hidden lg:block" />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legal */}
        <section className="py-12 bg-earth-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <AnimatedSection>
              <p className="text-earth-500 text-sm">
                <span className="font-bold text-earth-700">PT. Putra Indo Mandiri Sejahtera</span><br />
                Jl. Jamin Ginting, Desa Jaranguda, Berastagi, Kab. Karo 22158, Sumatera Utara
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
