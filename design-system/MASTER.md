# Design System — Gundaling Farm
> Farm-to-table restaurant · Agritourism · Dairy · North Sumatra, Indonesia

---

## Brand Identity

### Concept
Gundaling Farm sits on the volcanic highlands near Berastagi, where cool air, rich volcanic soil, and traditional Karo farming culture converge. The brand should feel **grounded, honest, and alive** — evoking the smell of fresh grass, warm milk, and wood smoke from an open kitchen. It is not rustic-kitschy; it is *elevated rural*.

### Voice & Tone
- Warm, unhurried, unpretentious
- Proud of provenance — specifics over generics ("our Karo Holstein herd", not "our cows")
- Bilingual-ready: Bahasa Indonesia and English
- Avoid corporate polish; embrace the handcrafted

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-earth` | `#4A3728` | Primary text, headings |
| `--color-leaf` | `#3D6B35` | Primary brand, CTAs, accents |
| `--color-cream` | `#F5EDD6` | Page backgrounds, cards |
| `--color-milk` | `#FDFAF3` | Surface / off-white |
| `--color-clay` | `#C4724A` | Warm accent, hover states |
| `--color-mist` | `#8FA899` | Muted text, borders, dividers |
| `--color-sky` | `#D4E8E0` | Light tint backgrounds |
| `--color-charcoal` | `#2C2C2C` | Body text |

**Tailwind config mapping:**
```js
colors: {
  earth:    '#4A3728',
  leaf:     '#3D6B35',
  cream:    '#F5EDD6',
  milk:     '#FDFAF3',
  clay:     '#C4724A',
  mist:     '#8FA899',
  sky:      '#D4E8E0',
  charcoal: '#2C2C2C',
}
```

---

## Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Hero | `Playfair Display` | 700–900 | Serif, emotional gravitas |
| Headings | `Lora` | 600 | Serif, readable warmth |
| Body | `Inter` | 400–500 | Clean legibility |
| Captions / Labels | `Inter` | 400 | Uppercase tracking for labels |
| Accent / Handwritten feel | `Caveat` | 400 | Menus, farm notes, pull quotes |

**Scale (Tailwind):**
```
text-xs   → 12px  (labels)
text-sm   → 14px  (captions, nav)
text-base → 16px  (body)
text-lg   → 18px  (lead text)
text-xl   → 20px  (subheadings)
text-2xl  → 24px
text-3xl  → 30px
text-4xl  → 36px
text-5xl  → 48px  (section titles)
text-6xl  → 60px  (hero)
text-7xl  → 72px  (display)
```

---

## Spacing & Layout

- **Base unit:** 4px (Tailwind default)
- **Max content width:** `1200px` (`max-w-6xl`)
- **Section padding:** `py-20 lg:py-32` vertical, `px-6 lg:px-12` horizontal
- **Card radius:** `rounded-2xl` (16px)
- **Button radius:** `rounded-full` (pill)
- **Grid:** 12-column, `gap-6 lg:gap-10`

---

## Component Patterns

### Hero (Homepage)
- Full-bleed background image/video of the farm landscape (drone or golden-hour shot)
- Overlay gradient: `from-earth/80 via-earth/30 to-transparent`
- Display heading in `Playfair Display`, cream color
- Subheadline in `Lora`, mist color
- Two CTAs: primary (leaf bg) + secondary (outline cream)
- Badge: `"Dataran Tinggi Karo • Sumatera Utara"` in `Caveat`
- Subtle scroll indicator

### Navigation
- Transparent on hero, solid `milk` on scroll
- Logo: wordmark + simple farm icon (leaf + drop shape)
- Links: `text-sm font-medium tracking-wide text-earth`
- CTA button: `bg-leaf text-milk rounded-full px-5 py-2`
- Mobile: slide-in drawer, full-height

### Section — "From Our Farm"
- 3-col feature grid: Dairy, Produce, Experience
- Each card: full-bleed image, floating label badge, short copy
- Background: `cream`

### Section — Menu Highlights
- Asymmetric 2-col layout: large image left, scrollable dish list right
- Dish name in `Lora`, origin note in `Caveat` (e.g., *"Susu segar dari kandang pagi ini"*)
- Price in `Inter`, `text-clay`

### Section — The Experience (Agritourism)
- Horizontal scroll carousel on mobile, 3-col masonry on desktop
- Activity tags: farm tour, milking session, cooking class, glamping
- Image-forward, minimal text overlay

### Section — Testimonials
- Single featured quote, large `Playfair Display`, centered
- Farm landscape as background (low opacity)
- Secondary: 3 short review cards, photo + name + origin

### Footer
- Dark background: `bg-earth text-milk`
- 4-col grid: About · Menus · Visit · Follow
- Embedded Google Maps static thumbnail
- Social icons: Instagram, WhatsApp, TikTok
- Legal line in `text-mist text-xs`

---

## Motion

- Scroll-triggered fade-in: `opacity-0 → opacity-100`, `translateY(20px) → 0`, duration `600ms`, easing `ease-out`
- Stagger children: `100ms` delay per item
- Image parallax on hero: subtle `translateY` on scroll
- Hover on cards: `scale(1.02)`, `duration-300`
- Page transitions: fade, `200ms`

**Library:** `framer-motion` (already seen in inspiration components)

---

## Imagery Guidelines

- **Photography style:** golden hour, natural light, shallow depth of field
- **Subjects:** cows in misty morning fields, hands milking, fresh produce, steaming food, family dining outdoors
- **Avoid:** stock-photo generic farms, over-saturated edits, corporate grid layouts
- **Aspect ratios:** 16:9 (hero/landscape), 4:3 (cards), 1:1 (testimonial avatars)
- **Placeholder bg:** `bg-mist/20` with centered farm icon during loading

---

## Iconography

- Style: **outline**, 1.5px stroke, rounded caps (`lucide-react`)
- Farm-specific icons sourced from `lucide`: `Leaf`, `Droplets`, `Sun`, `MapPin`, `Phone`, `Instagram`
- Custom SVG needed: cow silhouette, traditional Karo house (rumah adat), coffee bean

---

## Page Index

| Page | Status | Override file |
|---|---|---|
| Homepage | `pages/homepage.md` | ✓ |
| Menu | — | — |
| Farm Experience | — | — |
| About | — | — |
| Visit / Contact | — | — |
| Gallery | — | — |

---

## Tech Stack (Recommended)

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS v3 + CSS variables |
| Components | shadcn/ui base + 21st.dev Magic |
| Animation | Framer Motion |
| Fonts | Google Fonts (Playfair Display, Lora, Inter, Caveat) |
| Icons | lucide-react |
| CMS | Sanity.io (bilingual content) |
| Deployment | Vercel |
