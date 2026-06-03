"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/AnimatedSection";

const promos = [
  { title: "Weekend Farm Brunch", badge: "🌟 Promo", desc: "Setiap Sabtu & Minggu, nikmati brunch spesial farm to table dengan menu eksklusif dari ladang kami. Tersedia 10.00–13.00.", discount: "20%", img: "/images/promo/brunch.jpg" },
  { title: "Family Package", badge: "👨‍👩‍👧", desc: "Paket keluarga untuk 4 orang: 2 main course, 2 pizza, 4 gelato, dan 2 minuman spesial.", discount: "15%", img: "/images/promo/family.jpg" },
  { title: "Cheese Lovers Box", badge: "🧀 Bundle", desc: "Dapatkan 3 varietas keju artisan (masing-masing 250gr) + 2 jars selai buah + 1 bottle tomato basil sauce.", discount: "Bundle Deal", img: "/images/promo/cheese-box.jpg" },
];

const products = [
  { name: "Andaliman Cheese 250gr", price: "Rp 158.000", img: "/images/menu/cheese/Gundaling farmstead new menu-278-Edit.png" },
  { name: "Gundaling Cheese 250gr", price: "Rp 128.000", img: "/images/menu/cheese/Gundaling farmstead new menu-281-Edit.png" },
  { name: "Sinabung Cheese 250gr", price: "Rp 128.000", img: "/images/menu/cheese/Gundaling farmstead new menu-285-Edit.png" },
  { name: "Mozzarella 250gr", price: "Rp 118.000", img: "/images/menu/cheese/Gundaling farmstead new menu-293-Edit.png" },
  { name: "Strawberry Jam 150ml", price: "Rp 45.000", img: "/images/products/takehome/strawberry-jam.jpg" },
  { name: "Passionfruit Jam 150ml", price: "Rp 45.000", img: "/images/products/takehome/passionfruit-jam.jpg" },
];

export default function PromoPage() {
  return (
    <>
      <Nav />
      <main className="bg-earth-200 pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
          {/* Promos */}
          <AnimatedSection className="mb-14">
            <span className="text-farm-500 text-xs uppercase tracking-[0.25em] font-bold mb-3 block">Special Offers</span>
            <h1 className="font-display font-black text-earth-900 text-5xl lg:text-7xl">Promo <span className="text-farm-600 italic">Spesial</span></h1>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            {promos.map(({ title, badge, desc, discount, img }) => (
              <motion.div key={title} variants={staggerItem} whileHover={{ y: -6 }} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] bg-earth-200 overflow-hidden">
                  <Image src={img} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" onError={() => {}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/50 to-transparent" />
                  <div className="absolute top-4 left-4 bg-farm-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">{badge}</div>
                  <div className="absolute bottom-4 right-4 bg-white text-farm-600 text-sm font-black px-3 py-1.5 rounded-full">-{discount}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-earth-900 text-xl mb-2">{title}</h3>
                  <p className="text-earth-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <a href="https://wa.me/6282162599980" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-farm-500 hover:text-farm-400 font-bold text-sm group/link">
                    Klaim Promo <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Shop */}
          <AnimatedSection className="mb-10" id="shop">
            <span className="text-farm-500 text-xs uppercase tracking-[0.25em] font-bold mb-3 block">Take Home</span>
            <h2 className="font-display font-black text-earth-900 text-4xl lg:text-5xl">Produk Farm</h2>
            <p className="text-earth-500 mt-2">Bawa pulang kesegaran Gundaling Farmstead ke rumah Anda</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {products.map(({ name, price, img }) => (
              <motion.div key={name} variants={staggerItem} whileHover={{ y: -4 }} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="relative aspect-square bg-earth-200 overflow-hidden">
                  <Image src={img} alt={name} fill className="object-cover transition-transform duration-400 group-hover:scale-105" onError={() => {}} />
                </div>
                <div className="p-3">
                  <p className="font-bold text-earth-900 text-xs leading-tight mb-1">{name}</p>
                  <p className="text-farm-600 font-bold text-xs">{price}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
          <AnimatedSection className="mt-10 text-center">
            <a href="https://wa.me/6282162599980?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Gundaling%20Farmstead"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Pesan via WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
