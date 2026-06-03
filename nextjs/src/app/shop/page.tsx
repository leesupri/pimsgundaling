"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function ShopPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-earth-200 flex items-center justify-center px-6 py-32">
        <div className="max-w-lg w-full text-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.6, repeat: Infinity }}
          >
            <Image src="/images/mascot/cow_mascot_apron.svg" alt="Maskot Gundaling" width={160} height={160} className="mx-auto mb-8 select-none" draggable={false} />
          </motion.div>
          <AnimatedSection className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 bg-farm-100 text-farm-600 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-farm-400 animate-pulse" />
              Segera Hadir
            </div>
            <h1 className="font-display font-black text-earth-900 text-3xl lg:text-4xl mb-4">
              Online Shop<br />Gundaling Farmstead
            </h1>
            <p className="text-earth-600 text-base leading-relaxed mb-8">
              Kami sedang membangun toko online untuk memudahkan Anda memesan keju artisan, produk susu segar, selai buah, dan produk farm kami dari rumah. Segera hadir!
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8 text-left">
              {[["Akan Tersedia", ["Keju Artisan","Susu Segar","Gelato Cup"]],["Dan Juga", ["Selai Buah Farm","Bumbu Karo","Hamper Gift Box"]]].map(([heading, items]) => (
                <div key={heading as string} className="bg-earth-50 rounded-xl p-3">
                  <p className="text-earth-500 text-xs font-bold uppercase tracking-wide mb-1">{heading as string}</p>
                  <ul className="space-y-1">
                    {(items as string[]).map((item) => (
                      <li key={item} className="text-earth-700 text-xs flex items-center gap-1.5">
                        <span className="text-farm-500">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-earth-500 text-sm mb-5">Sementara itu, pesan langsung via WhatsApp:</p>
            <div className="flex flex-col gap-3">
              <motion.a href="https://wa.me/6282162599980?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Gundaling%20Farmstead"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Pesan via WhatsApp
              </motion.a>
              <Link href="/promo#shop" className="inline-flex items-center justify-center border-2 border-farm-500 text-farm-600 hover:bg-farm-500 hover:text-white font-bold px-6 py-3.5 rounded-full transition-all">
                Lihat Produk di Promo Page →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
