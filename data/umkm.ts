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
  price?: number;
  description: LocalizedString;
  image: string;
  category: LocalizedString;
  unit?: LocalizedString;
}

export const umkmSellers: UMKMSeller[] = [
  {
    id: "umkm-kolam-ikan",
    name: {
      id: "Budidaya Kolam Ikan Candisari",
      en: "Candisari Fish Farm",
    },
    ownerName: {
      id: "Pengelola Kolam Ikan",
      en: "Fish Farm Manager",
    },
    description: {
      id: "Penyedia ikan segar hasil budidaya kolam air tawar lokal Desa Candisari yang dirawat dengan pakan alami berkualitas.",
      en: "Provider of fresh freshwater fish cultivated locally in Candisari Village ponds with quality natural feed.",
    },
    whatsappNumber: "628156886035",
    logo: "/images/umkm/kolamIkan.jpeg",
  },
  {
    id: "umkm-cilor",
    name: {
      id: "Jajanan Cilor Candisari",
      en: "Candisari Cilor Snack",
    },
    ownerName: {
      id: "Pengusaha Cilor Candisari",
      en: "Cilor Entrepreneur",
    },
    description: {
      id: "Jajanan khas Cilor (Aci Telur) dengan bumbu aneka rasa yang gurih, lezat, dan hangat disajikan setiap hari.",
      en: "Popular traditional Cilor (Aci Telur) snack served fresh and warm with savory seasonings daily.",
    },
    whatsappNumber: "628995138978",
    logo: "/images/umkm/cilor.jpg",
  },
  {
    id: "umkm-tiwul",
    name: {
      id: "Tiwul Tradisional Candisari",
      en: "Candisari Traditional Tiwul",
    },
    ownerName: {
      id: "Pengrajin Tiwul Candisari",
      en: "Tiwul Artisan",
    },
    description: {
      id: "Olahan tiwul olahan singkong khas desa yang gurih, manis alami, dan dibuat dengan resep warisan tradisional.",
      en: "Traditional cassava tiwul made with authentic heritage recipes, naturally sweet and savory.",
    },
    whatsappNumber: "6283121921880",
    logo: "/images/umkm/tiwul.jpeg",
  },
  {
    id: "umkm-laundry",
    name: {
      id: "Rizkia Laundry",
      en: "Rizkia Laundry",
    },
    ownerName: {
      id: "Pengelola Rizkia Laundry",
      en: "Rizkia Laundry Owner",
    },
    description: {
      id: "Layanan cuci bersih, wangi, dan rapi untuk pakaian harian, selimut, dan kebutuhan laundry warga serta santri.",
      en: "Clean, fragrant, and neat laundry services for daily clothes, blankets, and fabrics.",
    },
    whatsappNumber: "6285155392433",
    logo: "/images/umkm/laundry.jpg",
  },
  {
    id: "umkm-nora-computer",
    name: {
      id: "Nora Computer & Service",
      en: "Nora Computer & Service",
    },
    ownerName: {
      id: "Teknisi Nora Computer",
      en: "Nora Computer Technician",
    },
    description: {
      id: "Layanan perbaikan, maintenance, instalasi software, dan service laptop/komputer cepat dan terpercaya di Desa Candisari.",
      en: "Reliable computer & laptop repair, software installation, and IT maintenance services in Candisari Village.",
    },
    whatsappNumber: "628175482166",
    logo: "/images/umkm/nora_computer.jpeg",
  },
  {
    id: "umkm-pijat",
    name: {
      id: "Jasa Pijat Tradisional Candisari",
      en: "Candisari Traditional Massage Service",
    },
    ownerName: {
      id: "Terapis Pijat Candisari",
      en: "Candisari Massage Therapist",
    },
    description: {
      id: "Layanan pijat tradisional dan kebugaran tubuh untuk meredakan pegal-pegal serta memulihkan kesegaran kesehatan.",
      en: "Traditional massage and body therapy service to relieve fatigue and restore physical wellness.",
    },
    whatsappNumber: "6287738020944",
    logo: "/images/umkm/pijet.jpg",
  },
];

export const products: Product[] = [
  {
    id: "prod-kolam-ikan",
    umkmId: "umkm-kolam-ikan",
    name: {
      id: "Ikan Segar Kolam Candisari",
      en: "Fresh Fish Candisari Pond",
    },
    description: {
      id: "Ikan segar langsung dari kolam budidaya warga Desa Candisari",
      en: "Fresh fish harvested directly from Candisari Village ponds, healthy and high quality.",
    },
    image: "/images/umkm/kolamIkan.jpeg",
    category: {
      id: "Perikanan & Pangan",
      en: "Fisheries & Food",
    },
  },
  {
    id: "prod-cilor",
    umkmId: "umkm-cilor",
    name: {
      id: "Cilor Gurih & Lezat",
      en: "Savory & Delicious Cilor (Egg Tapioca)",
    },
    description: {
      id: "Cilor kenyal dan gurih dengan aneka pilihan bumbu tabur sesuai selera",
      en: "Chewy and savory Cilor with various powdered seasoning options.",
    },
    image: "/images/umkm/cilor.jpg",
    category: {
      id: "Makanan & Camilan",
      en: "Food & Snacks",
    },
  },
  {
    id: "prod-tiwul",
    umkmId: "umkm-tiwul",
    name: {
      id: "Tiwul Tradisional Khas Desa",
      en: "Traditional Village Tiwul",
    },
    description: {
      id: "Tiwul olahan singkong pilihan khas Desa Candisari yang nikmat",
      en: "Traditional cassava tiwul snack from Candisari Village, delicious and satisfying.",
    },
    image: "/images/umkm/tiwul.jpeg",
    category: {
      id: "Makanan & Camilan",
      en: "Food & Snacks",
    },
  },
  {
    id: "prod-laundry",
    umkmId: "umkm-laundry",
    name: {
      id: "Jasa Rizkia Laundry (Cuci & Setrika)",
      en: "Rizkia Laundry Service (Wash & Iron)",
    },
    description: {
      id: "Layanan cuci pakaian bersih, harum, pengerjaan rapi dan cepat",
      en: "Fast, fragrant, and clean laundry and ironing service for your daily clothes.",
    },
    image: "/images/umkm/laundry.jpg",
    category: {
      id: "Jasa & Layanan",
      en: "Services & Repair",
    },
  },
  {
    id: "prod-nora-computer",
    umkmId: "umkm-nora-computer",
    name: {
      id: "Service Computer & Laptop Nora Computer",
      en: "Nora Computer & Laptop Repair Service",
    },
    description: {
      id: "Jasa perbaikan laptop/PC, pembersihan hardware, dan konsultasi komputer",
      en: "Laptop/PC repair, hardware cleaning, and IT consultation service.",
    },
    image: "/images/umkm/nora_computer.jpeg",
    category: {
      id: "Jasa & Layanan",
      en: "Services & Repair",
    },
  },
  {
    id: "prod-pijat",
    umkmId: "umkm-pijat",
    name: {
      id: "Jasa Pijat & Terapi Kesehatan",
      en: "Traditional Massage & Health Therapy",
    },
    description: {
      id: "Layanan pijat tradisional dan terapi kebugaran badan di Desa Candisari",
      en: "Traditional body massage and wellness therapy service in Candisari Village.",
    },
    image: "/images/umkm/pijet.jpg",
    category: {
      id: "Jasa & Layanan",
      en: "Services & Repair",
    },
  },
];

// Helper to generate WhatsApp click-to-chat URL for ordering/inquiring a product
export function getWhatsAppOrderUrl(seller: UMKMSeller, product: Product, lang: "id" | "en" = "id"): string {
  const productName = product.name[lang];

  const message =
    lang === "en"
      ? `Hello ${seller.name.en}, I am interested in *${productName}* on Candisari Village UMKM Marketplace. Is it available? Thank you!`
      : `Halo ${seller.name.id}, saya berminat dengan *${productName}* di Pasar UMKM Desa Candisari. Apakah masih tersedia/bisa dipesan? Terima kasih!`;

  return `https://wa.me/${seller.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
