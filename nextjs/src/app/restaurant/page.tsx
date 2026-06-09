"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/i18n";

// ── Types ──────────────────────────────────────────────────────────
interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  img?: string;
  badge?: string;
}

interface PriceRow {
  name: string;
  price: string;
}

// ── Helpers ────────────────────────────────────────────────────────
const p = "/images/menu/";

function Card({ item, color }: Readonly<{ item: MenuItem; color: string }>) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {item.img ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-earth-200">
          <motion.div className="absolute inset-0" whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }}>
            <Image src={item.img} alt={item.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" onError={() => {}} />
          </motion.div>
          <div className={`absolute top-0 left-0 w-full h-1 ${color}`} />
          {item.badge && (
            <span className="absolute top-3 right-3 bg-farm-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">{item.badge}</span>
          )}
        </div>
      ) : (
        <div className={`h-1 ${color}`} />
      )}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display font-bold text-earth-900 text-base leading-snug">{item.name}</h3>
          <span className="text-earth-600 text-sm font-bold whitespace-nowrap shrink-0">Rp {item.price}</span>
        </div>
        {item.desc && <p className="text-earth-500 text-xs leading-relaxed line-clamp-2">{item.desc}</p>}
      </div>
    </motion.div>
  );
}

function PriceList({ rows, title }: Readonly<{ rows: PriceRow[]; title?: string }>) {
  return (
    <motion.div variants={staggerItem} className="bg-white rounded-2xl shadow-sm overflow-hidden p-5">
      <div className="h-1 -mt-5 -mx-5 mb-4" style={{ background: "#0284c7" }} />
      {title && <p className="font-display font-bold text-earth-800 text-base mb-3 pb-2 border-b border-earth-200">{title}</p>}
      {rows.map(({ name, price }) => (
        <div key={name} className="flex justify-between items-center py-2 border-b border-earth-100 last:border-0">
          <span className="text-earth-700 text-sm font-semibold">{name}</span>
          <span className="text-earth-600 text-xs font-bold whitespace-nowrap pl-3">{price}</span>
        </div>
      ))}
    </motion.div>
  );
}

// ── FOOD DATA ──────────────────────────────────────────────────────
const foodCategories = [
  {
    id: "appetizers", label: "Appetizer", color: "bg-[#765f52]",
    sub: "Salads, sandwiches & starters",
    items: [
      { name: "Caprese Salad", price: "40.000", desc: "Bocconcini, Sliced Tomato, Basil, Extra Virgin Olive Oil, Balsamic Vinegar", img: p+"appetizers/Gundaling farmstead-152-Edit.png" },
      { name: "House Salad", price: "35.000", desc: "Mixed Garden Greens, Mozzarella Cubes, Onion, Tomatoes, Cikala Vinaigrette", img: p+"appetizers/Gundaling farmstead-155-Edit.png" },
      { name: "Grilled Chicken Salad", price: "50.000", desc: "Grilled Chicken Breast, Romain Lettuce, Half Avocado, Garlic Crouton, Pastrami Chips, In-House Cheese Dressing" },
      { name: "Mortadella Sandwich", price: "50.000", desc: "Grilled Sliced Mortadella, Green Lettuce, Onions, Avocadoes, Tomatoes, Mustard & Focaccia Bread" },
      { name: "Smoked Chicken Sandwich", price: "50.000", desc: "Grilled Smoked Chicken, Green Lettuce, Avocadoes, Tomatoes, Mustard & Focaccia Bread" },
      { name: "Smoked Salmon Salad", price: "70.000", desc: "Smoked Salmon, Roman Lettuce, Half Avocado, Garlic Crouton, Poached Egg, Mayonaise Mustard Sauce" },
      { name: "Baked Cheese with Honey", price: "50.000", desc: "Our Baked Camembert Cheese served with Honey" },
    ] as MenuItem[],
  },
  {
    id: "snack", label: "Snack & Soup", color: "bg-[#b45309]",
    sub: "Light bites, cheese & creamy soups",
    items: [
      { name: "Gundaling Cheese Platter", price: "185.000", desc: "Gundaling Mozzarella, Tomme, Provolone & Camembert Cheese with Condiments", img: p+"appetizers/Gundaling farmstead-mixed platter-004.png", badge: "🧀 Farm made" },
      { name: "Gundaling Cheese Fondue", price: "235.000", desc: "Tomme, Caciocavallo & Mozzarella Cheese Dip with Sausage, Tortilla Chips & Croutons" },
      { name: "Mixed Platter", price: "150.000", desc: "Artisan Sausage, Mozzarella Stick, Fried Tortilla, Redskin Potato & Chicken Wings with Coleslaw" },
      { name: "BBQ Chicken Wings", price: "55.000", desc: "Deep-fried Chicken Wings with BBQ & Passion Fruit Sauce" },
      { name: "Popcorn Chicken", price: "55.000", desc: "A Basket of Breaded Chicken served with Tar-tar Sauce" },
      { name: "Poutine", price: "55.000", desc: "Thick Cut Deep Fried Fries with Mozzarella and Hot Brown Gravy" },
      { name: "Potato Wedges", price: "45.000", desc: "Deep-Fried Berastagi Redskin Potato served with Chilli Sauce" },
      { name: "Pastrami Chips", price: "45.000", desc: "Deep Fried Sliced Pastrami with Mayonaise Mustard Dip" },
      { name: "Chips and Salsa", price: "40.000", desc: "Crispy Flour Tortilla with Avocado Guacamole and Tomato Salsa" },
      { name: "Singkong Goreng", price: "45.000", desc: "Deepfried Garlic Flavour Cassava served with Sambal Terasi" },
      { name: "Crispy Edamame", price: "30.000", desc: "Deep Fried Battered Edamame with a Touch of Chilli Flake" },
      { name: "Fried Mushroom", price: "45.000", desc: "Deepfried Oyster Mushrooms with Spicy Mayonaise Sauce" },
      { name: "Mozzarella Stick", price: "115.000", desc: "Deepfried breaded Mozzarella Stick with Tomato Basil Dip" },
      { name: "Pumpkin Cream Soup", price: "40.000", desc: "A Cream Soup Consist of Pumpkin Puree" },
      { name: "Mushroom Cream Soup", price: "50.000", desc: "A Cream Soup Consist of Mushrooms" },
      { name: "Potatoes Cream Soup", price: "50.000", desc: "A Cream Soup Consist of Chunk Potatoes" },
    ] as MenuItem[],
  },
  {
    id: "karo", label: "Taste of Karo", color: "bg-[#7B4B2D]",
    sub: "Warisan kuliner dataran tinggi Karo · *Kampung chicken used",
    items: [
      { name: "Bakaran Karo", price: "100.000", desc: "Local Steak, Free Range Chicken & Artisan Arsik Sausage with Arsik Fried Rice & Condiments" },
      { name: "Nasi Campur Karo", price: "90.000", desc: "Steamed Rice with Essential Karo Dishes, Grilled Chicken Arsik, Artisan Arsik Sausage & Egg Balado" },
      { name: "Sapi Panggang Karo", price: "100.000", desc: "Halal Karo Dish with Steamed Rice, Gatgat Karo Vegetables, Kecombrang Soup & Sambal Andaliman" },
      { name: "Iga Bakar Karo", price: "160.000", desc: "Grill Beef Ribs with Authentic Karo Seasoning, Served with Steamed Rice", badge: "⭐ Signature" },
      { name: "Lidah Sapi Bakar", price: "95.000", desc: "Grill Arsik Beef Tongue, Served with Vegetables and Steamed Rice" },
      { name: "Tasak Telu", price: "87.000", desc: '"Cooked Three Ways" — Chicken Rice of Karo, Boiled Chicken, Traditional Cipera & Cassava Leaves' },
      { name: "Nasi Ayam Bakar Arsik", price: "87.000", desc: "Grill Arsik Chicken, Served with Vegetables and Steamed Rice" },
      { name: "Sop Iga", price: "95.000", desc: "Beef Ribs in Clear Soup with Vegetables, Crackers, Steamed Rice & Condiments" },
      { name: "Laksa Karo", price: "65.000", desc: "Spicy Coconut Broth, Sliced Beef, Tofu, Boiled Egg, Beansprout, Pumpkin on Noodles" },
      { name: "Ikan Arsik", price: "87.000", desc: "Dori Fish Fillet Poached on Arsik Broth, Served with Steamed Rice & Condiments" },
      { name: "Nasi Ayam Cikala", price: "87.000", desc: "Soup Chicken with Traditional Karo Spiced, Served with Steamed Rice & Condiments" },
      { name: "Nasi Goreng Arsik", price: "65.000", desc: "Taste of Karo Fried Rice with Fried Chicken, Fried Egg & Condiments" },
      { name: "Ayam Nira", price: "87.000", desc: "Free-Range Chicken in Nira, Slow Cooked in Spicy Arsik Coconut Milk with Steamed Rice" },
    ] as MenuItem[],
  },
  {
    id: "fried-rice", label: "Fried Rice", color: "bg-[#a16207]",
    sub: "Oriental fried rice with premium toppings",
    items: [
      { name: "Gundaling Steak Fried Rice", price: "85.000", desc: "Grilled Local Steak with Oriental Fried Rice, Sunny Side Up, Mixed Green & Condiments" },
      { name: "Grilled Salmon Fried Rice", price: "95.000", desc: "Grilled Salmon with Oriental Fried Rice, Sunny Side Up Egg, Mixed Greens & Condiments" },
      { name: "Beef Kecombrang Fried Rice", price: "85.000", desc: "Karo Smoked Beef with Oriental Fried Rice, Served with Mixed Green & Condiments" },
    ] as MenuItem[],
  },
  {
    id: "western", label: "Western", color: "bg-[#3d2414]",
    sub: "Steak, grill & smoked · *Side dishes vary by season",
    items: [
      { name: "Gundaling Farmstead Steak", price: "348.000", desc: "250gr Grilled Imported Beef, Mashed Pumpkin, Homefried Potatoes & Backyard Greens with Choices of Sauce", badge: "⭐ Signature", img: "/images/menu/western/Gundaling farmstead new menu-036.png" },
      { name: "Grilled Chicken Mustard", price: "120.000", desc: "Half Chicken Marinated in Mustard, Backyard Mixed Greens, Homefried Potatoes & Tar-tar Sauce" },
      { name: "BBQ Beef Ribs", price: "255.000", desc: "Farmer Style BBQ Ribs, Coleslaw, Homefried Potatoes, Mixed Greens & Passion Fruit BBQ Sauce" },
      { name: "Crumb Chicken Steak", price: "100.000", desc: "Fried Breaded Chicken Breast with Tomato Basil, Melted Mozzarella, Coleslaw & Tar-tar Sauce" },
      { name: "Lemon Butter Salmon", price: "170.000", desc: "Pan-Fried Salmon Fillet, Mashed Pumpkin, Potato Salad, Mixed Greens & Lemon Butter Sauce" },
      { name: "Gundaling Hot Dog", price: "70.000", desc: "Homemade Sausage with Onion, Backyard Greens, Coleslaw & Homemade Potato Fries" },
      { name: "Gundaling Pan Fried Dory", price: "87.000", desc: "150gr Dory Fillet, Mashed Pumpkin, Potato Salad, Coleslaw & Lemon Butter Sauce" },
      { name: "Grilled Smoke Platter", price: "120.000", desc: "Chicken Sausage, Beef Sausage, Beef Pastrami, Chicken Ham & Mortadella with Mixed Greens & Brown Gravy" },
    ] as MenuItem[],
  },
  {
    id: "pasta", label: "Pasta", color: "bg-[#a16207]",
    sub: "Choice of spaghetti or fettuccine",
    items: [
      { name: "Aglio E Olio Chicken Pasta", price: "80.000", desc: "Classic Pasta with Olive Oil & Garlic, Sliced Chicken and Garlic Bread", img: p+"pasta/Gundaling farmstead-067.png" },
      { name: "Aglio E Olio Salmon Pasta", price: "90.000", desc: "Classic Pasta with Olive Oil & Garlic, Diced Salmon and Garlic Bread", img: p+"pasta/Gundaling farmstead-075.png" },
      { name: "Grilled Chicken Pasta", price: "90.000", desc: "Creamy Mushroom Spaghetti with Grilled Chicken Mustard and Garlic Bread" },
      { name: "Sapi Panggang Karo Pasta", price: "100.000", desc: "Olive Oil & Garlic Pasta with Smoked Beef, Sambal Kecombrang and Garlic Bread" },
      { name: "Creamy Chicken Pasta", price: "90.000", desc: "Cream & Parmesan Cheese Sauce with Sliced Chicken and Garlic Bread" },
      { name: "Creamy Salmon Pasta", price: "100.000", desc: "Cream & Parmesan Cheese Sauce with Diced Salmon and Garlic Butter" },
      { name: "Creamy Tomato Pasta", price: "80.000", desc: "Tomato and Cream Sauce with Sliced Beef, Oyster Mushroom and Garlic Bread" },
      { name: "Smoked Chicken Pasta", price: "80.000", desc: "Aglio E Olio Style with Smoked Chicken and Garlic Bread" },
      { name: "Creamy Chicken Pesto Pasta", price: "90.000", desc: "Pesto and Cream Sauce with Sliced Chicken and Garlic Bread" },
      { name: "Smoked Salmon Pasta", price: "90.000", desc: "Aglio E Olio Style with Smoked Salmon and Garlic Bread" },
      { name: "Pepperoni Pasta", price: "90.000", desc: "Aglio E Olio Style with Pepperoni and Garlic Bread" },
      { name: "Bolognese Pasta", price: "80.000", desc: "Tomatoes, Minced Beef, Garlic and Herbs Served with Garlic Bread" },
    ] as MenuItem[],
  },
  {
    id: "pizza", label: "Pizza", color: "bg-[#c2410c]",
    sub: "Wood-fired · Sauce bases interchangeable · Tomme & Sinabung made fresh in-house",
    items: [
      { name: "Three Cheese", price: "120.000", desc: "Tomato Sauce, Mixed Hard Cheese and Mozzarella Cheese", img: p+"pizza/Gundaling farmstead-117-Edit.png" },
      { name: "Margherita", price: "105.000", desc: "Tomato Sauce, Basil, Mixed Hard Cheese and Mozzarella Cheese", img: p+"pizza/Gundaling farmstead-127-Edit.png" },
      { name: "Carnivore", price: "130.000", desc: "Tomato Sauce, Beef, Chicken Sausage, Arsik Smoked Chicken, Mixed Hard Cheese and Mozzarella" },
      { name: "Sapi Panggang Karo", price: "140.000", desc: "Tomato Sauce, Smoked Beef, Sambal Kecombrang, Mixed Hard Cheese and Mozzarella" },
      { name: "Beef Tongue", price: "120.000", desc: "Tomato Sauce, Beef Tongue, Onion, Oven Dried Tomato, Mushroom, Mixed Hard Cheese & Mozzarella" },
      { name: "Beef and Mushroom", price: "120.000", desc: "Tomato Sauce, Beef, Mushroom, Mixed Hard Cheese and Mozzarella" },
      { name: "Chicken Ham and Cheese", price: "100.000", desc: "Bechamel, Chicken Ham, Mixed Hard Cheese and Mozzarella" },
      { name: "Arsik Smoked Chicken", price: "100.000", desc: "Arsik Basting Sauce, Onion, Tomato Sauce, Slices Smoked Chicken Arsik, Mixed Hard Cheese & Mozzarella" },
      { name: "Sausage and Mushroom", price: "120.000", desc: "Tomato Sauce, Chicken Sausage, Mushroom, Mixed Hard Cheese and Mozzarella" },
      { name: "Mushroom", price: "95.000", desc: "Bechamel, Oyster Mushroom, Mixed Hard Cheese and Mozzarella" },
      { name: "Farmers Vegetarian", price: "90.000", desc: "Tomato Sauce, Carrot, Pumpkin, Onion, Mushroom, Mixed Hard Cheese and Mozzarella" },
      { name: "Chicken and Mushroom", price: "120.000", desc: "Tomato Sauce, Arsik Smoked Chicken, Mushroom, Mixed Hard Cheese and Mozzarella" },
      { name: "Smoked Salmon", price: "130.000", desc: "Tomato Sauce, Smoked Salmon, Mixed Hard Cheese and Mozzarella" },
      { name: "Mortadella", price: "110.000", desc: "Tomato Sauce, Mortadella, Mixed Hard Cheese and Mozzarella" },
      { name: "Pepperoni", price: "110.000", desc: "Tomato Sauce, Pepperoni, Mixed Hard Cheese and Mozzarella" },
    ] as MenuItem[],
  },
  {
    id: "desserts", label: "Desserts & Cake", color: "bg-[#9d174d]",
    sub: "Sweet endings & whole cakes by order",
    items: [
      { name: "Tanah Berastagi", price: "50.000", desc: "Chocolate Mousse with Brownies, Crumble and a Choice of Gelato", img: p+"desserts/Gundaling farmstead-268.png", badge: "⭐ Signature" },
      { name: "Pannacotta", price: "40.000", desc: "Vanilla Milk Pudding with Tamarillo Sauce or Passion Fruit Sauce", img: p+"desserts/Gundaling farmstead-285.png" },
      { name: "Crème Brûlée", price: "40.000", desc: "Rich Custard and Sugar on Top, Served with Chunky Strawberry and Meringue", img: p+"desserts/Gundaling farmstead-307.png" },
      { name: "Bread Butter Pudding", price: "40.000", desc: "Classic Comfort Dessert, Fresh Baked Bread served with 3 Choices of Gelato", img: p+"desserts/Gundaling farmstead-357.png" },
      { name: "Pineapple Crumble", price: "40.000", desc: "Compound Pineapple and Raisin with Herbs, Served with 3 Choices of Gelato" },
      { name: "Avocado Mousse", price: "45.000", desc: "Creamy Avocado with Cookie Layers, Crumble and Ganache Chocolate" },
    ] as MenuItem[],
  },
  {
    id: "gelato", label: "Gelato", color: "bg-[#db2777]",
    sub: "Rp 40.000 · Cheese & Peanut Butter Rp 45.000",
    items: [
      "Chocolate","Strawberry","Milk Honey","Matcha","Sweet Potato","Corn",
      "Cheese","Peanut Butter","Coffee","Sorbet Strawberry","Sorbet Passion Fruit",
      "Sorbet Mango","Sorbet Martabe",
    ].map((name) => ({
      name,
      price: name.includes("Cheese") || name.includes("Peanut") ? "45.000" : "40.000",
    })) as MenuItem[],
    isGelato: true,
  },
];

// ── DRINK DATA ─────────────────────────────────────────────────────
const drinkCategories = [
  {
    id: "drinks-coffee", label: "Coffee", color: "#0284c7",
    sub: "Coffee Based & Coffee Dessert",
    imgItems: [
      { name: "Coffee Latte", price: "Rp 35K / 38K", sub: "Hot / Cold", img: p+"drinks/Gundaling farmstead-192-coffe latte.png" },
      { name: "Rempah Milk Coffee", price: "Rp 32K / 34K", sub: "Hot / Cold", img: p+"drinks/Gundaling farmstead-207-kopi susu rempah.png" },
      { name: "Affogato", price: "Rp 35.000", sub: "Cold only · Coffee Dessert", img: p+"drinks/Gundaling farmstead-216-affogato.png" },
    ],
    lists: [
      { title: "Coffee Based", rows: [
        { name: "Cold Brew", price: "— / Rp 45K" }, { name: "Espresso", price: "Rp 30K / —" },
        { name: "Sanger", price: "Rp 30K / 32K" }, { name: "Americano", price: "Rp 23K / 25K" },
        { name: "Picollo", price: "Rp 38K / —" }, { name: "Coffee Milk", price: "Rp 35K / 35K" },
      ]},
      { title: "", rows: [
        { name: "Rempah Coffee", price: "Rp 27K / 29K" }, { name: "Palm Sugar Coffee", price: "Rp 35K / 35K" },
        { name: "Cappuccino", price: "Rp 35K / 38K" }, { name: "Cinnamon Coffee", price: "Rp 27K / —" },
        { name: "Moccacino", price: "Rp 38K / 38K" }, { name: "White Mocca", price: "Rp 38K / 38K" },
        { name: "Caramel Latte", price: "Rp 38K / 38K" }, { name: "Caramel Machiato", price: "Rp 38K / 38K" },
        { name: "Vanilla Latte", price: "Rp 38K / 38K" }, { name: "Hazelnut Latte", price: "Rp 38K / 38K" },
        { name: "Tiramisu Latte", price: "Rp 38K / 38K" }, { name: "Avocado Dessert", price: "— / Rp 41K" },
      ]},
    ],
  },
  {
    id: "drinks-tea", label: "Tea & Signature", color: "#2C5F2D",
    sub: "Signature & Tea",
    imgItems: [
      { name: "Cikala Tea", price: "Rp 20K / 24K", sub: "Hot / Cold", img: p+"drinks/Gundaling farmstead-228-ice tea cikala.png" },
      { name: "Cinnamon Tea", price: "Rp 20K / 24K", sub: "Hot / Cold", img: p+"drinks/Gundaling farmstead-229-cinnamon tea.png" },
    ],
    lists: [
      { title: "Signature · Cold Only", rows: [
        { name: "Sumatera Island", price: "— / Rp 38K" }, { name: "Strawberry Latte", price: "— / Rp 38K" },
        { name: "Mystical Beet", price: "— / Rp 35K" }, { name: "Cinnamon Coffee", price: "— / Rp 35K" },
      ]},
      { title: "Tea", rows: [
        { name: "Regular Tea", price: "Rp 18K / 22K" }, { name: "Rosemary Tea", price: "Rp 20K / 24K" },
        { name: "Daun Sirih Tea", price: "Rp 20K / 24K" }, { name: "Pineapple Tea", price: "Rp 20K / 24K" },
        { name: "Markisa Tea", price: "Rp 21K / 25K" }, { name: "Cinnamon Tea", price: "Rp 20K / 24K" },
      ]},
    ],
  },
  {
    id: "drinks-noncoffee", label: "Non Coffee & Milk", color: "#4a9c56",
    sub: "Non Coffee & Milk",
    imgItems: [
      { name: "Green Tea Latte", price: "Rp 38K / 38K", sub: "Hot / Cold", img: p+"drinks/Gundaling farmstead-199-green tea latte.png" },
      { name: "Chocolate Latte", price: "Rp 38K / 38K", sub: "Hot / Cold", img: p+"drinks/Gundaling farmstead-200-choco latte.png" },
      { name: "Thai Tea Latte", price: "Rp 38K / 38K", sub: "Hot / Cold", img: p+"drinks/Gundaling farmstead-313-thai tea.png" },
    ],
    lists: [
      { title: "Non Coffee", rows: [
        { name: "Taro Latte", price: "Rp 38K / 38K" }, { name: "Milo", price: "Rp 38K / 40K" },
      ]},
      { title: "Milk", rows: [
        { name: "Fresh Milk", price: "Rp 35K / 35K" }, { name: "Honey Fresh Milk", price: "Rp 38K / 40K" },
        { name: "Ginger Fresh Milk", price: "Rp 38K / 40K" }, { name: "Honey Ginger Fresh Milk", price: "Rp 38K / 40K" },
        { name: "Fresh Milk Tea", price: "Rp 38K / 40K" }, { name: "Cinnamon Milk Tea", price: "Rp 38K / 40K" },
      ]},
    ],
  },
  {
    id: "drinks-blended", label: "Blended & Frappe", color: "#7c3aed",
    sub: "Smoothies, Milkshakes, Blended & Frappe",
    imgItems: [
      { name: "Oreo Blended", price: "Rp 45.000", sub: "Cold only", img: p+"drinks/Gundaling farmstead-323-oreo blended.png" },
      { name: "Markisa Cookies", price: "Rp 45.000", sub: "Cold only", img: p+"drinks/Gundaling farmstead-325-markisa cookies.png" },
      { name: "Tamarillo Cookies", price: "Rp 45.000", sub: "Cold only", img: p+"drinks/Gundaling farmstead-319-tamarilo cookies.png" },
    ],
    lists: [
      { title: "Smoothies", rows: [
        { name: "Banana", price: "Rp 50.000" }, { name: "Strawberry", price: "Rp 50.000" },
        { name: "Pineapple", price: "Rp 50.000" }, { name: "Tamarillo", price: "Rp 50.000" },
      ]},
      { title: "Milkshakes & Frappe", rows: [
        { name: "Vanilla Milkshake", price: "Rp 38.000" }, { name: "Chocolate Milkshake", price: "Rp 38.000" },
        { name: "Strawberry Milkshake", price: "Rp 38.000" }, { name: "Taro Blended", price: "Rp 45.000" },
        { name: "Choco Brownie", price: "Rp 45.000" }, { name: "Green Tea Blended", price: "Rp 45.000" },
        { name: "Choco Chip Frappuccino", price: "Rp 45.000" }, { name: "Frozen Cappuccino", price: "Rp 45.000" },
        { name: "Banana Cappuccino", price: "Rp 45.000" },
      ]},
    ],
  },
  {
    id: "drinks-alcohol", label: "Beer & Wine", color: "#1f2937",
    sub: "Beer, Cocktail & Wine",
    imgItems: [] as { name: string; price: string; sub: string; img: string }[],
    lists: [
      { title: "Beer & Cocktail", rows: [
        { name: "Beer Bintang Large", price: "Rp 70.000" }, { name: "Beer Heineken Large", price: "Rp 95.000" },
        { name: "Beer Heineken Small", price: "Rp 58.000" }, { name: "Wisky Sour", price: "Rp 100.000" },
        { name: "Gin Tonic", price: "Rp 95.000" }, { name: "Screwdriver", price: "Rp 80.000" },
      ]},
      { title: "Wine", rows: [
        { name: "Lindemans Chardonnay", price: "Rp 667.000" }, { name: "Lindemans Sauvignon Blanc", price: "Rp 667.000" },
        { name: "Lindemans Shiraz", price: "Rp 667.000" }, { name: "Lindemans Moscato", price: "Rp 667.000" },
        { name: "Jacob's Creek Cab Sauvignon", price: "Rp 667.000" }, { name: "Jacob's Creek Shiraz", price: "Rp 667.000" },
        { name: "Cockburn Port", price: "Rp 1.450.000" }, { name: "Nederbrug Cuvee Brut", price: "Rp 754.000" },
        { name: "Obikwa Shiraz", price: "Rp 638.000" }, { name: "Obikwa Pinotage", price: "Rp 638.000" },
        { name: "Sarah's Creek Cab Sauvignon", price: "Rp 928.000" },
      ]},
    ],
  },
];

// ── Take Home ──────────────────────────────────────────────────────
function TakeHomeSection() {
  return (
    <div className="space-y-6">
      <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="relative aspect-[4/3] sm:aspect-auto bg-earth-200">
              <Image src={p+"cheese/Gundaling farmstead new menu-278-Edit.png"} alt="Artisan Cheese" fill className="object-cover" />
            </div>
            <div className="p-5">
              <p className="font-display font-bold text-earth-800 text-base mb-3 pb-2 border-b border-earth-200">Artisan Cheese · 250gr</p>
              {[["Andaliman Cheese","Rp 158.000"],["Gundaling Cheese","Rp 128.000"],["Sinabung Cheese","Rp 128.000"],["Mozzarella Cheese","Rp 118.000"],["Camembert","Rp 87.000"]].map(([n,pr]) => (
                <div key={n} className="flex justify-between py-1.5 border-b border-earth-100 last:border-0">
                  <span className="text-earth-700 text-sm font-semibold">{n}</span>
                  <span className="text-earth-600 text-xs font-bold">{pr}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <p className="font-display font-bold text-earth-800 text-base mb-3 pb-2 border-b border-earth-200">Jams · 150ml</p>
            {[["Strawberry","Rp 45K"],["Passionfruit","Rp 45K"],["Tammarillo","Rp 45K"],["Pinneapple","Rp 45K"]].map(([n,pr]) => (
              <div key={n} className="flex justify-between py-1.5 border-b border-earth-100 last:border-0 text-sm">
                <span className="text-earth-700 font-semibold">{n}</span><span className="text-earth-600 text-xs font-bold">{pr}</span>
              </div>
            ))}
            <p className="font-display font-bold text-earth-800 text-base mt-4 mb-3 pb-2 border-b border-earth-200">Paste · 150ml</p>
            {[["Cikala Paste","Rp 25K"],["Arsik Paste","Rp 20K"],["Tomato Basil Sauce","Rp 25K"]].map(([n,pr]) => (
              <div key={n} className="flex justify-between py-1.5 border-b border-earth-100 last:border-0 text-sm">
                <span className="text-earth-700 font-semibold">{n}</span><span className="text-earth-600 text-xs font-bold">{pr}</span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <p className="font-display font-bold text-earth-800 text-base mb-3 pb-2 border-b border-earth-200">Frozen Food</p>
            {[["Bakso Urat 20pcs","Rp 116K"],["Bakso Halus 30pcs","Rp 125K"],["Sosis Ayam 5pcs","Rp 70K"],["Sosis Sapi 5pcs","Rp 85K"],["Chicken Meatloaf 250gr","Rp 87.5K"],["Beef Pastrami 250gr","Rp 117.5K"],["Beef Mortadella 250gr","Rp 87.5K"],["Pepperoni 250gr","Rp 100K"]].map(([n,pr]) => (
              <div key={n} className="flex justify-between py-1.5 border-b border-earth-100 last:border-0 text-xs">
                <span className="text-earth-700 font-semibold">{n}</span><span className="text-earth-600 font-bold">{pr}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────
export default function RestaurantPage() {
  const [tab, setTab] = useState<"food" | "drink">("food");
  const [foodCat, setFoodCat] = useState("appetizers");
  const [drinkCat, setDrinkCat] = useState("drinks-coffee");
  const { t } = useLanguage();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const currentFood = foodCategories.find((c) => c.id === foodCat) ?? foodCategories[0];
  const currentDrink = drinkCategories.find((c) => c.id === drinkCat) ?? drinkCategories[0];

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative h-[55vh] min-h-[400px] overflow-hidden flex items-end">
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-farm-900/90 via-farm-900/40 to-farm-900/30 z-10" />
            <Image src="/images/restaurant/story.jpg" alt="Gundaling Restaurant" fill className="object-cover" priority sizes="100vw" />
          </motion.div>
          <motion.div style={{ opacity: heroOpacity }} className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-14">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-farm-300 text-xs uppercase tracking-[0.25em] font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-farm-400" />{t.restaurant.heroLabel}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="font-display font-black text-white text-4xl lg:text-6xl">
              {t.restaurant.heroTitle}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="text-white/70 mt-3 text-base">
              {t.restaurant.heroSub}
            </motion.p>
          </motion.div>
          <div className="absolute bottom-0 inset-x-0 z-20">
            <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
              <path d="M0 50L0 25Q360 0 720 25Q1080 50 1440 25L1440 50Z" fill="#F9F6EF" />
            </svg>
          </div>
        </section>

        {/* Menu area */}
        <div className="bg-earth-200 min-h-screen" id="menu">
          <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-8">
            {/* Food / Drink toggle */}
            <div className="flex gap-3 mb-6 flex-wrap">
              {(["food", "drink"] as const).map((tabKey) => (
                <motion.button
                  key={tabKey}
                  onClick={() => setTab(tabKey)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    tab === tabKey
                      ? "bg-farm-500 text-white shadow-lg shadow-farm-500/25"
                      : "bg-white text-earth-700 hover:bg-farm-50"
                  }`}
                >
                  {tabKey === "food" ? t.restaurant.tabFood : t.restaurant.tabDrink}
                </motion.button>
              ))}
            </div>

            {/* Sticky category nav */}
            <div className="sticky top-[60px] z-40 -mx-4 lg:-mx-12 bg-earth-200/95 backdrop-blur-sm border-b border-earth-300 shadow-sm mb-8">
              <div className="px-4 lg:px-12">
                <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
                  <AnimatePresence mode="wait">
                    {tab === "food" ? (
                      <motion.div key="food-cats" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex gap-2 min-w-max">
                        {foodCategories.map((c) => (
                          <button key={c.id} onClick={() => setFoodCat(c.id)}
                            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${foodCat === c.id ? "bg-farm-500 text-white" : "bg-white text-earth-700 hover:bg-farm-50"}`}>
                            {c.label}
                          </button>
                        ))}
                        <button onClick={() => setFoodCat("take-home")}
                          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${foodCat === "take-home" ? "bg-farm-500 text-white" : "bg-white text-earth-700 hover:bg-farm-50"}`}>
                          Take Home
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div key="drink-cats" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex gap-2 min-w-max">
                        {drinkCategories.map((c) => (
                          <button key={c.id} onClick={() => setDrinkCat(c.id)}
                            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${drinkCat === c.id ? "bg-farm-500 text-white" : "bg-white text-earth-700 hover:bg-farm-50"}`}>
                            {c.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {tab === "food" ? (
                <motion.div key={`food-${foodCat}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="pb-20">
                  {foodCat === "take-home" ? (
                    <>
                      <div className="mb-8">
                        <h2 className="font-display font-black text-earth-900 text-2xl mb-1">{t.restaurant.takeHomeTitle}</h2>
                        <p className="text-earth-500 text-sm">{t.restaurant.takeHomeSub}</p>
                      </div>
                      <TakeHomeSection />
                    </>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="font-display font-black text-earth-900 text-2xl mb-1">{currentFood.label}</h2>
                        <p className="text-earth-500 text-sm">{currentFood.sub}</p>
                      </div>
                      {(currentFood as { isGelato?: boolean }).isGelato ? (
                        <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
                          {currentFood.items.map((item) => (
                            <motion.div key={item.name} variants={staggerItem} className="bg-white rounded-2xl shadow-sm overflow-hidden text-center">
                              <div className={`h-1 ${currentFood.color}`} />
                              <div className="p-3">
                                <p className="font-display font-bold text-earth-900 text-xs leading-tight mb-1">{item.name}</p>
                                <p className="text-earth-500 text-xs">Rp {item.price}</p>
                              </div>
                            </motion.div>
                          ))}
                        </StaggerContainer>
                      ) : (
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                          {currentFood.items.map((item) => (
                            <Card key={item.name} item={item} color={currentFood.color} />
                          ))}
                        </StaggerContainer>
                      )}
                    </>
                  )}
                </motion.div>
              ) : (
                <motion.div key={`drink-${drinkCat}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="pb-20">
                  <div className="mb-8">
                    <h2 className="font-display font-black text-earth-900 text-2xl mb-1">{currentDrink.label}</h2>
                    <p className="text-earth-500 text-sm">{currentDrink.sub}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {currentDrink.imgItems.map((item) => (
                      <motion.div key={item.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                        <div className="relative aspect-[4/3] overflow-hidden bg-earth-200">
                          <motion.div className="absolute inset-0" whileHover={{ scale: 1.06 }} transition={{ duration: 0.4 }}>
                            <Image src={item.img} alt={item.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" onError={() => {}} />
                          </motion.div>
                          <div className="absolute top-0 inset-x-0 h-1" style={{ background: currentDrink.color }} />
                        </div>
                        <div className="p-4">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-display font-bold text-earth-900 text-base">{item.name}</h3>
                            <span className="text-earth-600 text-sm font-bold whitespace-nowrap">{item.price}</span>
                          </div>
                          <p className="text-earth-500 text-xs mt-0.5">{item.sub}</p>
                        </div>
                      </motion.div>
                    ))}
                    {currentDrink.lists.map((list) => (
                      <PriceList key={list.title || list.rows[0].name} rows={list.rows} title={list.title} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Reservation */}
        <section id="reservation" className="bg-farm-700 py-20 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <span className="text-farm-300 text-xs uppercase tracking-[0.25em] font-bold mb-3 block">{t.restaurant.reserveLabel}</span>
                <h2 className="font-display font-black text-white text-4xl mb-4">{t.restaurant.reserveTitle}</h2>
                <p className="text-farm-200 text-base leading-relaxed mb-6">{t.restaurant.reserveDesc}</p>
                <div className="space-y-3 text-farm-200 text-sm">
                  <div className="flex items-center gap-3"><span className="text-farm-400">🕐</span>{t.restaurant.reserveHours}</div>
                  <div className="flex items-center gap-3"><span className="text-farm-400">📞</span>{t.restaurant.reservePhone}</div>
                </div>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="mt-8 hidden lg:block">
                  <Image src="/images/mascot/cow_mascot_apron.svg" alt="Mascot" width={100} height={100} />
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction="right" className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl">
                <h3 className="font-display font-bold text-earth-900 text-xl mb-5">{t.restaurant.reserveFormTitle}</h3>
                <div className="space-y-4">
                  <input type="text" placeholder={t.restaurant.reserveNamePh} className="w-full border border-earth-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-farm-400" />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="date" className="w-full border border-earth-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-farm-400" />
                    <select className="w-full border border-earth-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-farm-400">
                      {["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"].map(time => <option key={time}>{time}</option>)}
                    </select>
                  </div>
                  <select className="w-full border border-earth-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-farm-400">
                    {t.restaurant.guestOptions.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                  <textarea rows={2} placeholder={t.restaurant.reserveNotePh} className="w-full border border-earth-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-farm-400 resize-none" />
                  <motion.a
                    href="https://wa.me/6282162599980"
                    target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full bg-farm-500 hover:bg-farm-400 text-white font-bold py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    {t.restaurant.reserveSend}
                  </motion.a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <motion.a href="https://wa.me/6282162599980" target="_blank" rel="noopener noreferrer"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </motion.a>
    </>
  );
}
