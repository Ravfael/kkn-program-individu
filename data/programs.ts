import { LocalizedString } from "./village-profile";

export interface Program {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  featured?: boolean;
  category?: LocalizedString;
  targetAudience?: LocalizedString;
}

export const programs: Program[] = [
  {
    id: "kampung-inggris-unit",
    title: {
      id: "Kampung Inggris Unit & Kelas Bahasa Intensif",
      en: "Kampung Inggris Unit & Intensive Language Classes",
    },
    description: {
      id: "Program unggulan pembelajaran bahasa Inggris berbasis komunitas dengan metode percakapan harian, bimbingan belajar interaktif, serta laboratorium bahasa lapangan untuk anak-anak dan pemuda desa.",
      en: "Flagship community-based English learning program featuring daily conversation methods, interactive tutoring, and field language labs for local youth.",
    },
    image: "https://picsum.photos/800/600?random=10",
    featured: true,
    category: {
      id: "Program Utama KKN",
      en: "Primary KKN Program",
    },
    targetAudience: {
      id: "Seluruh Warga & Pelajar Desa",
      en: "All Village Residents & Students",
    },
  },
  {
    id: "pendidikan-literasi",
    title: {
      id: "Rumah Literasi & Edukasi Anak",
      en: "Children Literacy & Education Hub",
    },
    description: {
      id: "Pendampingan belajar membaca, pojok baca gratis, dan permainan edukatif untuk meningkatkan literasi anak-anak desa usia dini.",
      en: "Reading assistance, free book corners, and educational games to foster early childhood literacy in the village.",
    },
    image: "https://picsum.photos/600/400?random=11",
    featured: false,
    category: {
      id: "Divisi Pendidikan",
      en: "Education Division",
    },
    targetAudience: {
      id: "Anak Usia 6-12 Tahun",
      en: "Children Aged 6-12 Years",
    },
  },
  {
    id: "kesehatan-lingkungan",
    title: {
      id: "Edukasi Pola Hidup Sehat & Lingkungan Asri",
      en: "Healthy Lifestyle & Green Environment Workshop",
    },
    description: {
      id: "Penyuluhan sanitasi desa, gerakan memilah sampah rumah tangga, serta pemeriksaan kesehatan gratis bagi lansia dan balita.",
      en: "Village sanitation education, household waste sorting campaigns, and free health checkups for seniors and toddlers.",
    },
    image: "https://picsum.photos/600/400?random=12",
    featured: false,
    category: {
      id: "Divisi Kesehatan & Lingkungan",
      en: "Health & Environment Division",
    },
    targetAudience: {
      id: "Warga & Lansia Desa",
      en: "Village Residents & Elderly",
    },
  },
  {
    id: "ekonomi-digital",
    title: {
      id: "Pemberdayaan Ekonomi & Branding Digital UMKM",
      en: "Economic Empowerment & MSME Digital Branding",
    },
    description: {
      id: "Workshop pemasaran produk desa via e-commerce, pelatihan foto produk, dan pembuatan profil digital untuk pelaku usaha lokal.",
      en: "E-commerce marketing workshops, product photography training, and digital profile creation for local small business owners.",
    },
    image: "https://picsum.photos/600/400?random=13",
    featured: false,
    category: {
      id: "Divisi Ekonomi & Teknologi",
      en: "Economy & Technology Division",
    },
    targetAudience: {
      id: "Pelaku UMKM & Karang Taruna",
      en: "Local MSMEs & Youth Club",
    },
  },
];
