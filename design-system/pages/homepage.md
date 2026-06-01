# Page Override — Homepage
> Gundaling Farmstead · farm-to-table hero landing page · organic

---

## Page Goal
Convert first-time visitors (tourists, food lovers, Instagrammers) into reservations or experience bookings. Secondary: build emotional connection to the land and brand story.

---

## Hero Section

### Layout
Full-viewport height (`min-h-screen`), background video or high-res image of the Gundaling highland at golden hour. Overlay: `linear-gradient(to bottom, rgba(74,55,40,0.65) 0%, rgba(74,55,40,0.2) 50%, rgba(74,55,40,0.7) 100%)`.

### Content
```
[Badge — Caveat font]
"Dataran Tinggi Karo, 1.400 mdpl"

[H1 — Playfair Display 700, cream, text-6xl lg:text-7xl]
"Dari Ladang Kami
 ke Meja Anda"

[Sub — Lora, text-mist, text-xl, max-w-lg]
"Nikmati cita rasa asli Sumatera Utara — susu segar, sajian farm-to-table,
dan pengalaman agrowisata di ketinggian Berastagi."

[CTA row]
Primary:   "Reservasi Sekarang"   →  bg-leaf text-milk rounded-full
Secondary: "Jelajahi Farm"        →  border-cream text-cream rounded-full outline

[Trust badges — horizontal, small]
  🌿 100% Produk Lokal   🥛 Susu Sapi Segar Harian   🏔️ 1.400m di atas laut
```

### Inspiration match
Pattern from `Hero with image, text and two buttons` (21st.dev), adapted:
- Replace `aspect-square` placeholder with full-bleed bg image
- Change grid from 2-col to centered single-col overlay layout
- Animate with framer-motion `fadeIn` variant

---

## Section 2 — "Tiga Pilar Kami" (Three Pillars)

```
Background: cream
Layout: 3-col card grid, gap-8

Card 1 — Dairy
  Icon: Droplets (leaf color)
  Title: "Susu & Olahan Segar"
  Body: "Langsung dari kandang pagi ini — susu, yogurt, keju, dan es krim buatan sendiri."
  Image: cow being milked at sunrise

Card 2 — Restaurant
  Icon: Utensils
  Title: "Farm-to-Table Dining"
  Body: "Menu berubah sesuai musim panen. Semua bahan dari kebun dan kandang kami sendiri."
  Image: rustic outdoor dining table with food

Card 3 — Agritourism
  Icon: TreePine
  Title: "Agrowisata & Glamping"
  Body: "Ikut tur kandang, panen sendiri, masak bersama chef kami, atau menginap di tengah kebun."
  Image: glamping tent with mountain view
```

---

## Section 3 — Featured Dish (Seasonal Spotlight)

```
Background: milk
Layout: asymmetric — 60% image left, 40% content right
Transition: slide in from left on scroll

Image: hero dish (e.g., Soto Daging Sapi Muda dengan susu segar)

Content:
  [Caveat, clay]  "Hidangan Musim Ini"
  [H2, Lora]      "Gulai Susu Karo"
  [Body]          "Daging sapi muda dari peternakan kami, dimasak lambat dalam santan
                   dan susu segar selama 4 jam. Disajikan dengan nasi putih pulen
                   dan acar timun hasil kebun."
  [Tag badges]    Signature · Gluten-free · Farm-raised
  [CTA]           "Lihat Menu Lengkap →"
```

---

## Section 4 — The Story (Brand Narrative)

```
Background: sky (D4E8E0)
Layout: centered, max-w-3xl, text-center

[Caveat, earth, text-2xl]  "Sejak 1987"
[H2, Playfair, earth]      "Tiga Generasi Peternak Karo"
[Body, Lora, charcoal]
  "Kakek kami memulai dengan 12 ekor sapi di lereng Sinabung.
   Kini kami mengelola 200 ekor Holstein dan 3 hektar kebun organik.
   Gundaling Farm adalah bukti bahwa bertani dengan jujur adalah
   cara terbaik merawat tanah, binatang, dan manusia."

[Photo: sepia-toned family portrait, 3 generations]
```

---

## Section 5 — Testimonials

```
Background: earth (dark)
Text: cream

Featured quote (centered, large):
  [Playfair, text-3xl, cream, italic]
  "Ini bukan sekadar restoran — ini adalah perjalanan ke masa di mana makanan
   masih punya jiwa."
  — Raisa W., Jakarta · ⭐⭐⭐⭐⭐

Secondary cards (3-col grid):
  Each: photo avatar, name, city, 1-2 sentence review, star rating
```

---

## Section 6 — Visit / CTA Banner

```
Background: leaf (full-bleed)
Text: cream

[H2, Playfair, cream]  "Rencanakan Kunjungan Anda"
[Body, Inter, sky]     "Buka setiap hari 08.00–20.00 · Reservasi disarankan"
[Address, Caveat]      "Jl. Gundaling No. 1, Berastagi, Sumatera Utara"

[Two CTAs]
  "WhatsApp Kami"     →  bg-milk text-leaf  (opens wa.me link)
  "Lihat di Maps"     →  border-milk text-milk outline (Google Maps)
```

---

## Component Source Mapping

| Section | Base component (21st.dev) |
|---|---|
| Hero | `Hero with image, text and two buttons` |
| Three Pillars | `Feature cards grid` |
| Featured Dish | `Asymmetric image-text split` |
| Testimonials | `Testimonial with featured quote` |
| CTA Banner | `Full-bleed CTA section` |

---

## Animation Sequence (on load)

1. `0ms` — hero background fades in
2. `200ms` — badge slides down
3. `400ms` — H1 fades up
4. `600ms` — subheadline fades up
5. `800ms` — CTA buttons fade up
6. `1000ms` — trust badges fade in

All subsequent sections: scroll-triggered `fadeIn` with `staggerChildren: 100ms`.
