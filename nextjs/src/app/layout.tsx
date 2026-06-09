import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gundaling Farmstead — Farm to Table Berastagi",
  description:
    "Restoran farm to table di dataran tinggi Karo, Berastagi. Nikmati masakan Karo autentik, pizza wood-fire, keju artisan, gelato segar, dan pengalaman agrowisata langsung dari peternakan kami.",
  keywords: "Gundaling Farmstead, restoran Berastagi, farm to table, keju artisan, gelato, masakan Karo",
  openGraph: {
    title: "Gundaling Farmstead",
    description: "Farm to Table · Berastagi, Sumatera Utara",
    type: "website",
    url: "https://pimsgundaling.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${nunito.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body
        className="min-h-screen bg-earth-200 font-body text-earth-900 antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
