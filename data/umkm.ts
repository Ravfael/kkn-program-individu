import { LocalizedString } from "./village-profile";

export interface UMKMSeller {
  id: string;
  name: LocalizedString;
  ownerName: LocalizedString;
  description: LocalizedString;
  whatsappNumber: string;
  logo: string;
}

export interface Product {
  id: string;
  umkmId: string;
  name: LocalizedString;
  price: number;
  description: LocalizedString;
  image: string;
  category: LocalizedString;
  unit?: LocalizedString;
}

export const umkmSellers: UMKMSeller[] = [
  {
    id: "umkm-1",
    name: {
      id: "Dapur Olahan Jamur Candisari",
      en: "Candisari Mushroom Kitchen",
    },
    ownerName: {
      id: "Ibu Nurhayati",
      en: "Mrs. Nurhayati",
    },
    description: {
      id: "Spesialis kripik jamur tiram renyah dan olahan jamur organik khas Desa Candisari yang diproduksi secara higienis tanpa bahan pengawet.",
      en: "Specialist in crispy oyster mushroom chips and organic mushroom products from Candisari Village, produced hygienically without preservatives.",
    },
    whatsappNumber: "6281234567801",
    logo: "https://picsum.photos/200/200?random=301",
  },
  {
    id: "umkm-2",
    name: {
      id: "Batik Tulis & Cap Candisari",
      en: "Candisari Handwoven Batik",
    },
    ownerName: {
      id: "Bapak Rahmad Hidayat",
      en: "Mr. Rahmad Hidayat",
    },
    description: {
      id: "Kerajinan kain batik motif khas desa dengan pewarna alam ramah lingkungan, dikerjakan oleh para pengrajin wanita berpengalaman.",
      en: "Handcrafted batik fabrics featuring unique village motifs made with eco-friendly natural dyes by experienced female artisans.",
    },
    whatsappNumber: "6281234567802",
    logo: "https://picsum.photos/200/200?random=302",
  },
  {
    id: "umkm-3",
    name: {
      id: "Kopi Lereng Candisari",
      en: "Candisari Slope Coffee",
    },
    ownerName: {
      id: "Mas Joko Prasetyo",
      en: "Mr. Joko Prasetyo",
    },
    description: {
      id: "Biji kopi Robusta dan Arabika pilihan hasil perkebunan lereng desa yang disangrai dengan profil sangrai sedang berkualitas tinggi.",
      en: "Premium Robusta and Arabica coffee beans harvested from village slopes, roasted to perfection with medium roast profile.",
    },
    whatsappNumber: "6281234567803",
    logo: "https://picsum.photos/200/200?random=303",
  },
  {
    id: "umkm-4",
    name: {
      id: "Kerajinan Bambu & Anyaman Desa",
      en: "Village Bamboo & Weaving Crafts",
    },
    ownerName: {
      id: "Ibu Mariam",
      en: "Mrs. Mariam",
    },
    description: {
      id: "Aneka kerajinan tangan dari bambu petung lokal seperti tas anyaman, wadah serbaguna, dan lampu hias estetik untuk dekorasi rumah.",
      en: "Handmade local bamboo crafts including woven bags, multi-purpose containers, and aesthetic decorative lamps for home decor.",
    },
    whatsappNumber: "6281234567804",
    logo: "https://picsum.photos/200/200?random=304",
  },
];

export const products: Product[] = [
  // UMKM 1 Products
  {
    id: "prod-101",
    umkmId: "umkm-1",
    name: {
      id: "Keripik Jamur Tiram Crispy Original 150g",
      en: "Crispy Original Oyster Mushroom Chips 150g",
    },
    price: 18000,
    description: {
      id: "Keripik jamur tiram segar dengan balutan tepung rempah gurih, renyah tahan lama dan cocok untuk cemilan keluarga.",
      en: "Fresh oyster mushroom chips coated in savory spiced flour, long-lasting crispiness perfect for family snacking.",
    },
    image: "https://picsum.photos/600/450?random=311",
    category: {
      id: "Makanan & Camilan",
      en: "Food & Snacks",
    },
    unit: {
      id: "Bungkus",
      en: "Pack",
    },
  },
  {
    id: "prod-102",
    umkmId: "umkm-1",
    name: {
      id: "Keripik Jamur Tiram Pedas Manis 150g",
      en: "Sweet & Spicy Oyster Mushroom Chips 150g",
    },
    price: 20000,
    description: {
      id: "Varian rasa pedas manis berbumbu cabai asli dan gula merah alami tanpa bahan pengawet sintetis.",
      en: "Sweet and spicy flavor seasoned with real chili and natural palm sugar without synthetic preservatives.",
    },
    image: "https://picsum.photos/600/450?random=312",
    category: {
      id: "Makanan & Camilan",
      en: "Food & Snacks",
    },
    unit: {
      id: "Bungkus",
      en: "Pack",
    },
  },
  {
    id: "prod-103",
    umkmId: "umkm-1",
    name: {
      id: "Abon Jamur Tiram Gurih 100g",
      en: "Savory Oyster Mushroom Floss 100g",
    },
    price: 25000,
    description: {
      id: "Abon jamur higienis sebagai lauk praktis tinggi serat dan protein nabati, cocok untuk vegetaris.",
      en: "Hygienic mushroom floss as a practical high-fiber and plant protein side dish, ideal for vegetarians.",
    },
    image: "https://picsum.photos/600/450?random=313",
    category: {
      id: "Makanan & Camilan",
      en: "Food & Snacks",
    },
    unit: {
      id: "Toples",
      en: "Jar",
    },
  },
  {
    id: "prod-104",
    umkmId: "umkm-1",
    name: {
      id: "Kaldu Jamur Organik Bubuk 100g",
      en: "Organic Mushroom Seasoning Powder 100g",
    },
    price: 15000,
    description: {
      id: "Penyedap rasa alami dari ekstrak jamur tanpa MSG tambahan untuk masakan sehat keluarga.",
      en: "Natural seasoning from mushroom extract with no added MSG for healthy family cooking.",
    },
    image: "https://picsum.photos/600/450?random=314",
    category: {
      id: "Bumbu & Olahan",
      en: "Seasoning & Mixes",
    },
    unit: {
      id: "Botol",
      en: "Bottle",
    },
  },

  // UMKM 2 Products
  {
    id: "prod-201",
    umkmId: "umkm-2",
    name: {
      id: "Kain Batik Tulis Motif Daun Candisari 2m",
      en: "Handwritten Batik Cloth Candisari Leaf Motif 2m",
    },
    price: 250000,
    description: {
      id: "Kain katun prima halus bertuliskan tangan dengan pewarna alami mahoni yang elegan dan nyaman dipakai.",
      en: "Fine prima cotton cloth hand-drawn with elegant mahogany natural dyes, comfortable for daily formal wear.",
    },
    image: "https://picsum.photos/600/450?random=321",
    category: {
      id: "Pakaian & Batik",
      en: "Apparel & Batik",
    },
    unit: {
      id: "Lembar",
      en: "Piece",
    },
  },
  {
    id: "prod-202",
    umkmId: "umkm-2",
    name: {
      id: "Kemeja Batik Cap Pria Lengan Pendek",
      en: "Men Short Sleeve Stamped Batik Shirt",
    },
    price: 135000,
    description: {
      id: "Kemeja batik pria modern berpotongan reguler fit dengan lapisan furing lembut di bagian dalam.",
      en: "Modern men's batik shirt in regular fit with soft inner lining for maximum comfort.",
    },
    image: "https://picsum.photos/600/450?random=322",
    category: {
      id: "Pakaian & Batik",
      en: "Apparel & Batik",
    },
    unit: {
      id: "Pcs",
      en: "Pcs",
    },
  },
  {
    id: "prod-203",
    umkmId: "umkm-2",
    name: {
      id: "Selendang Batik Pewarna Alami",
      en: "Natural Dye Batik Shawl",
    },
    price: 95000,
    description: {
      id: "Selendang batik sutra halus motif etnik aksen pastel manis untuk aksesori busana formal wanita.",
      en: "Fine silk batik shawl with ethnic motif and pastel accent for formal women's fashion accessories.",
    },
    image: "https://picsum.photos/600/450?random=323",
    category: {
      id: "Aksesori & Fashion",
      en: "Accessories & Fashion",
    },
    unit: {
      id: "Pcs",
      en: "Pcs",
    },
  },

  // UMKM 3 Products
  {
    id: "prod-301",
    umkmId: "umkm-3",
    name: {
      id: "Kopi Robusta Candisari Sangrai 250g",
      en: "Candisari Roasted Robusta Coffee Beans 250g",
    },
    price: 45000,
    description: {
      id: "Biji kopi Robusta murni dengan aroma nutty dan cokelat mantap, ditanam di ketinggian 800 mdpl.",
      en: "Pure Robusta coffee beans with intense nutty and chocolate aroma, grown at 800m altitude.",
    },
    image: "https://picsum.photos/600/450?random=331",
    category: {
      id: "Minuman & Kopi",
      en: "Beverages & Coffee",
    },
    unit: {
      id: "Bungkus",
      en: "Pack",
    },
  },
  {
    id: "prod-302",
    umkmId: "umkm-3",
    name: {
      id: "Kopi Arabika Single Origin Bubuk 200g",
      en: "Single Origin Ground Arabica Coffee 200g",
    },
    price: 65000,
    description: {
      id: "Kopi Arabika spesial dengan cita rasa asam buah segar dan tingkat kepahitan yang seimbang.",
      en: "Specialty Arabica coffee featuring fruity acidity notes and balanced bitterness level.",
    },
    image: "https://picsum.photos/600/450?random=332",
    category: {
      id: "Minuman & Kopi",
      en: "Beverages & Coffee",
    },
    unit: {
      id: "Bungkus",
      en: "Pack",
    },
  },
  {
    id: "prod-303",
    umkmId: "umkm-3",
    name: {
      id: "Kopi Drip Bag Praktis (Isi 5 Sachet)",
      en: "Practical Drip Bag Coffee (Pack of 5)",
    },
    price: 35000,
    description: {
      id: "Kopi drip bag siap seduh tanpa ampas, praktis dibawa saat bepergian atau berkemah.",
      en: "Ready-to-brew filter drip bags without grounds, convenient for travel and outdoor camping.",
    },
    image: "https://picsum.photos/600/450?random=333",
    category: {
      id: "Minuman & Kopi",
      en: "Beverages & Coffee",
    },
    unit: {
      id: "Kotak",
      en: "Box",
    },
  },

  // UMKM 4 Products
  {
    id: "prod-401",
    umkmId: "umkm-4",
    name: {
      id: "Tas Anyaman Bambu Estetik Vintage",
      en: "Vintage Aesthetic Woven Bamboo Bag",
    },
    price: 85000,
    description: {
      id: "Tas tangan wanita buatan jemari pengrajin lokal dengan bahan bambu pilihan dan tali kulit sintetis.",
      en: "Women's handbag handwoven by local artisans using selected bamboo and synthetic leather straps.",
    },
    image: "https://picsum.photos/600/450?random=341",
    category: {
      id: "Kerajinan & Rumah Tangga",
      en: "Crafts & Household",
    },
    unit: {
      id: "Pcs",
      en: "Pcs",
    },
  },
  {
    id: "prod-402",
    umkmId: "umkm-4",
    name: {
      id: "Set Tempat Tisu & Wadah Bambu",
      en: "Bamboo Tissue Box & Container Set",
    },
    price: 55000,
    description: {
      id: "Set wadah serbaguna dengan finishing halus tahan rayap untuk hiasan meja makan dan ruang tamu.",
      en: "Multi-purpose box set with smooth termite-resistant finish for dining and living room decor.",
    },
    image: "https://picsum.photos/600/450?random=342",
    category: {
      id: "Kerajinan & Rumah Tangga",
      en: "Crafts & Household",
    },
    unit: {
      id: "Set",
      en: "Set",
    },
  },
  {
    id: "prod-403",
    umkmId: "umkm-4",
    name: {
      id: "Kap Lampu Gantung Bambu Anyam Minimalis",
      en: "Minimalist Woven Bamboo Pendant Lamp Shade",
    },
    price: 110000,
    description: {
      id: "Kap lampu dekoratif dengan pendar cahaya hangat yang menenangkan untuk interior cafe atau rumah.",
      en: "Decorative lamp shade casting warm ambient light perfect for cozy home or cafe interiors.",
    },
    image: "https://picsum.photos/600/450?random=343",
    category: {
      id: "Kerajinan & Rumah Tangga",
      en: "Crafts & Household",
    },
    unit: {
      id: "Pcs",
      en: "Pcs",
    },
  },
];

// Helper to generate WhatsApp click-to-chat URL for ordering a product
export function getWhatsAppOrderUrl(
  seller: UMKMSeller,
  product: Product,
  lang: "id" | "en" = "id"
): string {
  const productName = product.name[lang];
  const formattedPrice = new Intl.NumberFormat(lang === "en" ? "en-US" : "id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(product.price);

  const message =
    lang === "en"
      ? `Hello ${seller.ownerName.en} (${seller.name.en}), I would like to order: *${productName}* (${formattedPrice}). Is it currently available? Thank you!`
      : `Halo ${seller.ownerName.id} (${seller.name.id}), saya berminat memesan produk: *${productName}* (${formattedPrice}). Apakah produk ini masih tersedia? Terima kasih!`;

  return `https://wa.me/${seller.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
