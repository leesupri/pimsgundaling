# Asset & Folder Layout — Gundaling Farmstead
> FTP-deployable static site. All files upload to `/public_html/`

---

## Folder Structure

```
public_html/
│
├── index.html
├── Restaurant.html
├── farm.html
├── promo.html
├── about.html
├── contact.html
├── shop.html
├── sitemap.xml
├── robots.txt
├── ASSETS.md            ← this file (delete before FTP)
│
├── ── ROOT IMAGES (existing, already referenced in HTML) ───────────
├── hero-farm.jpg            Hero background (aerial farm + Mt. Sinabung)
├── story.jpg                Restaurant interior (wood beams, dried plants)
├── promo-cheese.jpg         Cheese platter on wooden board
│
├── Logo_GUNDALING Farmstead_1-color_tall_on-white.png   Restaurant logo
├── logo gundaling.png       Farm logo
├── cow_mascot_apron.svg     Mascot with apron (hero, forms, CTAs)
├── cow_mascot_vector.svg    Mascot base (footer walking animation)
│
├── ── IMAGES/ (organized by subject) ──────────────────────────────
└── images/
    │
    ├── hero/
    │   └── hero-farm.jpg        (copy/alias of root hero-farm.jpg)
    │
    ├── restaurant/
    │   ├── kitchen.jpg          Open kitchen / wood-fire oven
    │   ├── interior.jpg         Restaurant ambiance wide shot
    │   ├── dining.jpg           Guests dining outdoors
    │   └── story.jpg            (copy/alias of root story.jpg)
    │
    ├── farm/
    │   ├── hero.jpg             Wide aerial farm shot
    │   ├── cows/
    │   │   ├── herd.jpg         Holstein herd in field
    │   │   ├── milking.jpg      Milking process
    │   │   └── close-up.jpg     Single cow portrait
    │   ├── gardens/
    │   │   ├── beds.jpg         Raised vegetable beds
    │   │   ├── harvest.jpg      Staff harvesting
    │   │   └── strawberry.jpg   Strawberry field
    │   ├── cheese-room/
    │   │   ├── aging-shelf.jpg  Cheese wheels on shelves
    │   │   ├── making.jpg       Cheese making process
    │   │   └── vault.jpg        Full aging room
    │   └── fieldtrip/
    │       ├── kids-tour.jpg    Children on farm tour
    │       └── tasting.jpg      Tasting station
    │
    ├── promo/
    │   ├── cheese-board.jpg     (copy/alias of root promo-cheese.jpg)
    │   ├── pizza-promo.jpg      Pizza promo banner
    │   └── gelato-promo.jpg     Gelato promo banner
    │
    ├── products/
    │   ├── dairy/
    │   │   ├── milk-bottle.jpg
    │   │   ├── yogurt-drink.jpg
    │   │   └── gelato-cups.jpg
    │   └── takehome/
    │       ├── jam-strawberry.jpg
    │       ├── jam-passionfruit.jpg
    │       ├── bumbu-arsik.jpg
    │       └── hamper-box.jpg
    │
    ├── logos/
    │   ├── logo-farmstead.png   (copy of root logo)
    │   └── logo-farm.png        (copy of root logo)
    │
    ├── mascot/
    │   ├── cow-apron.svg        (copy of root mascot SVG)
    │   └── cow-vector.svg       (copy of root mascot SVG)
    │
    └── menu/                    ← MENU PHOTOS (per category)
        │
        ├── appetizers/
        │   ├── cheese-board.jpg
        │   ├── bruschetta.jpg
        │   ├── corn-fritters.jpg
        │   └── garlic-herb-bread.jpg
        │
        ├── karo/
        │   ├── gulai-susu-karo.jpg       ★ Signature
        │   ├── sapi-panggang-karo.jpg
        │   ├── arsik-ikan-mas.jpg
        │   ├── naniura.jpg
        │   └── eintopf-karo.jpg
        │
        ├── western/
        │   ├── farmstead-steak.jpg       ★ Signature
        │   ├── farm-burger.jpg
        │   ├── grilled-chicken.jpg
        │   └── bbq-pork-ribs.jpg
        │
        ├── pizza/
        │   ├── carnivore-pizza.jpg       ★ Best Seller
        │   ├── margherita-farm.jpg
        │   ├── andaliman-chicken-pizza.jpg
        │   ├── sinabung-volcano-pizza.jpg
        │   └── cheese-lovers-pizza.jpg
        │
        ├── pasta/
        │   ├── carbonara-holstein.jpg
        │   ├── cacio-e-pepe.jpg
        │   ├── aglio-olio-berastagi.jpg
        │   └── bolognese-karo.jpg
        │
        ├── desserts/
        │   ├── tanah-berastagi.jpg       ★ Signature
        │   ├── cheese-fondue.jpg
        │   └── farm-cheesecake.jpg
        │
        ├── gelato/
        │   ├── gelato-overview.jpg       All flavors display shot
        │   ├── chocolate.jpg
        │   ├── strawberry.jpg
        │   ├── milk-honey.jpg
        │   ├── matcha.jpg
        │   ├── sweet-potato.jpg
        │   ├── corn.jpg
        │   ├── cheese.jpg
        │   ├── peanut-butter.jpg
        │   ├── coffee.jpg
        │   ├── passionfruit-sorbet.jpg
        │   └── tamarillo-sorbet.jpg
        │
        ├── drinks/
        │   ├── susu-segar.jpg
        │   ├── susu-coklat.jpg
        │   ├── yogurt-drink.jpg
        │   ├── kopi-arabika-karo.jpg
        │   ├── flat-white.jpg
        │   ├── jus-stroberi.jpg
        │   ├── passionfruit-lemonade.jpg
        │   └── tamarillo-smoothie.jpg
        │
        └── cheese/
            ├── mozzarella.jpg
            ├── gundaling-cheese.jpg
            ├── curd-ricotta.jpg
            ├── sinabung-tomme.jpg
            ├── andaliman-tomme.jpg         ★ Best Seller
            └── camembert.jpg
```

---

## Image Naming Rules

| Rule | Example |
|---|---|
| All lowercase | `gulai-susu-karo.jpg` |
| Words separated by hyphens | `farmstead-steak.jpg` NOT `FarmsteadSteak.jpg` |
| No spaces | `cheese-board.jpg` NOT `cheese board.jpg` |
| Descriptive slug | `sapi-panggang-karo.jpg` NOT `img001.jpg` |
| Format: JPG for photos, SVG for icons/mascot | — |
| Recommended size: 800×600px (4:3) for menu items | — |
| Recommended size: 1200×900px for hero/feature images | — |
| Max file size: 300KB per menu image (use TinyJPG) | — |

---

## How `Restaurant.html` References Images

Every menu item uses this pattern:

```html
<img
  src="images/menu/pizza/carnivore-pizza.jpg"
  alt="Carnivore Pizza — beef sausage, prosciutto, bacon, mozzarella"
  class="w-full h-full object-cover"
  loading="lazy"
  decoding="async"
  onerror="this.parentElement.classList.add('img-error')"
>
```

If the image is missing, the card falls back to a **colored placeholder** automatically via the `.img-error` CSS class.

---

## Per-Category Color Codes

| Category | CSS Class | Color |
|---|---|---|
| Appetizers | `cat-appetizers` | earth-400 `#c4a882` |
| Taste of Karo | `cat-karo` | earth-600 `#7B4B2D` |
| Western & Grill | `cat-western` | `#3d2414` (earth-800) |
| Wood-Fire Pizza | `cat-pizza` | orange-700 |
| Pasta | `cat-pasta` | yellow-700 |
| Desserts | `cat-desserts` | pink-600 |
| Gelato | `cat-gelato` | `#ec4899` (pink-500) |
| Drinks | `cat-drinks` | sky-600 |
| Cheese Vault | `cat-cheese` | earth-600 |

---

## FTP Upload Checklist

Copy ALL of these to `/public_html/`:

```
[ ] index.html
[ ] Restaurant.html
[ ] farm.html
[ ] promo.html
[ ] about.html
[ ] contact.html
[ ] shop.html
[ ] sitemap.xml
[ ] robots.txt
[ ] hero-farm.jpg
[ ] story.jpg
[ ] promo-cheese.jpg
[ ] Logo_GUNDALING Farmstead_1-color_tall_on-white.png
[ ] logo gundaling.png
[ ] cow_mascot_apron.svg
[ ] cow_mascot_vector.svg
[ ] images/  (entire folder)
```

**Do NOT upload:**
- `ASSETS.md` (this file)
- `README.md`
- `design-system/` folder
- `.git/` folder
- `.claude/` folder
