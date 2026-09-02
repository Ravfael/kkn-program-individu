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
    image: "/images/programs/g2.jpeg",
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
    id: "kwt",
    title: {
      id: "Kelompok Wanita Tani (KWT)",
      en: "Women Farmer Group (KWT)",
    },
    description: {
      id: "Pemberdayaan perempuan desa melalui pelatihan pertanian urban, budidaya sayuran organik, dan pengolahan hasil panen untuk meningkatkan ketahanan pangan dan pendapatan keluarga.",
      en: "Empowering village women through urban farming training, organic vegetable cultivation, and post-harvest processing to improve food security and household income.",
    },
    image: "/images/programs/kwt.jpg",
    featured: false,
    category: {
      id: "Divisi Pemberdayaan Perempuan",
      en: "Women Empowerment Division",
    },
    targetAudience: {
      id: "Ibu Rumah Tangga & Wanita Desa",
      en: "Housewives & Village Women",
    },
  },
  {
    id: "bank-sampah",
    title: {
      id: "Bank Sampah & Lingkungan Bersih",
      en: "Waste Bank & Clean Environment Program",
    },
    description: {
      id: "Program pengelolaan sampah berbasis komunitas melalui pemilahan, pengumpulan, dan pendistribusian sampah daur ulang, disertai edukasi lingkungan bagi seluruh warga desa.",
      en: "Community-based waste management program through sorting, collecting, and distributing recyclable waste, along with environmental education for all village residents.",
    },
    image: "/images/programs/bank-sampah.jpg",
    featured: false,
    category: {
      id: "Divisi Kesehatan & Lingkungan",
      en: "Health & Environment Division",
    },
    targetAudience: {
      id: "Seluruh Warga Desa",
      en: "All Village Residents",
    },
  },
  {
    id: "gcu-lansia",
    title: {
      id: "Program GCU Untuk Lansia",
      en: "Program GCU For Elderly",
    },
    description: {
      id: "Program pelayanan dan pemeriksaan kesehatan berkala bagi para lansia di Dusun Candisari untuk memastikan kesejahteraan dan memantau kondisi kesehatan mereka.",
      en: "Routine healthcare services and medical check-ups for the elderly in Candisari Hamlet to ensure their well-being and monitor health conditions.",
    },
    image: "/images/programs/gcu.png",
    featured: false,
    category: {
      id: "Divisi Kesehatan & Lingkungan",
      en: "Health & Environment Division",
    },
    targetAudience: {
      id: "Lansia Dusun Candisari",
      en: "Elderly in Candisari Hamlet",
    },
  },
];
