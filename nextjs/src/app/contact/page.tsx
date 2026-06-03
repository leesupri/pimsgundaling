"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-earth-200 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-14">
            <span className="text-farm-500 text-xs uppercase tracking-[0.25em] font-bold mb-3 block">Get in Touch</span>
            <h1 className="font-display font-black text-earth-900 text-5xl lg:text-7xl">Kontak Kami</h1>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left" className="space-y-6">
              {[
                { icon: "📍", title: "Alamat", value: "Jl. Jamin Ginting, Desa Jaranguda\nBerastagi, Kab. Karo 22158\nSumatera Utara" },
                { icon: "🕐", title: "Jam Buka", value: "Senin – Minggu\n10.00 – 20.00 WIB\nLast order pukul 19.00" },
                { icon: "📞", title: "Telepon / WhatsApp", value: "+62 821-6259-9980 (Restaurant)\n+62 812-6966-9280 (Farm Tour)" },
                { icon: "✉️", title: "Email", value: "info@pimsgundaling.com" },
              ].map(({ icon, title, value }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 bg-farm-100 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
                  <div>
                    <p className="font-bold text-earth-800 mb-1">{title}</p>
                    <p className="text-earth-600 text-sm whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <p className="font-bold text-earth-800 mb-3">Sosial Media</p>
                <div className="flex gap-3">
                  {[
                    { label: "Instagram", href: "https://www.instagram.com/gundaling_farmstead" },
                    { label: "Facebook", href: "https://www.facebook.com/GundalingFarmstead" },
                    { label: "Linktree", href: "https://linktr.ee/gundaling_farmstead" },
                  ].map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 bg-farm-600 text-white text-xs font-bold rounded-full hover:bg-farm-500 transition-colors">{label}</a>
                  ))}
                </div>
              </div>
              {/* OpenStreetMap */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=98.4920%2C3.1750%2C98.5120%2C3.1950&layer=mapnik&marker=3.1850%2C98.5020"
                  width="100%" height="280" style={{ border: 0 }} loading="lazy" title="Lokasi Gundaling Farmstead"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="font-display font-bold text-earth-900 text-2xl mb-6">Kirim Pesan</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="text-earth-700 text-sm font-bold block mb-1.5">Nama</label>
                    <input type="text" placeholder="Nama Anda" className="w-full border border-earth-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-farm-400" /></div>
                  <div><label className="text-earth-700 text-sm font-bold block mb-1.5">Email</label>
                    <input type="email" placeholder="email@contoh.com" className="w-full border border-earth-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-farm-400" /></div>
                </div>
                <div><label className="text-earth-700 text-sm font-bold block mb-1.5">Topik</label>
                  <select className="w-full border border-earth-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-farm-400">
                    <option>Reservasi Meja</option><option>Field Trip & Edu Farm</option>
                    <option>Pemesanan Produk</option><option>Kerjasama & Event</option><option>Lainnya</option>
                  </select></div>
                <div><label className="text-earth-700 text-sm font-bold block mb-1.5">Pesan</label>
                  <textarea rows={5} placeholder="Tuliskan pesan Anda..." className="w-full border border-earth-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-farm-400 resize-none" /></div>
                <motion.a href="https://wa.me/6282162599980" target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full bg-farm-500 hover:bg-farm-400 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Kirim via WhatsApp
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
