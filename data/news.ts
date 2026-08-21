import { LocalizedString } from "./village-profile";

export interface NewsItem {
  id: string;
  category: LocalizedString;
  date: LocalizedString;
  title: LocalizedString;
  excerpt: LocalizedString;
  image: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    category: {
      id: "Kegiatan KKN",
      en: "KKN Activity",
    },
    date: {
      id: "12 Juli 2026",
      en: "July 12, 2026",
    },
    title: {
      id: "Peresmian Program Kampung Inggris KKN Disambut Antusias Warga",
      en: "Launch of KKN Kampung Inggris Welcomed Enthusiastically by Residents",
    },
    excerpt: {
      id: "Acara pembukaan resmi dihadiri oleh Kepala Desa, perangkat desa, serta puluhan orang tua murid yang antusias mendaftarkan anak-anak mereka.",
      en: "Opening ceremony attended by Village Head, community leaders, and dozens of parents eager to enroll their children.",
    },
    image: "https://picsum.photos/800/500?random=151",
  },
  {
    id: "news-2",
    category: {
      id: "Gotong Royong",
      en: "Community Work",
    },
    date: {
      id: "18 Juli 2026",
      en: "July 18, 2026",
    },
    title: {
      id: "Mahasiswa KKN Bersama Pemuda Karang Taruna Renovasi Posko Belajar",
      en: "KKN Students & Youth Club Renovate Learning Hub Together",
    },
    excerpt: {
      id: "Aksi gotong royong merapikan dan mengecat ruangan balai desa menjadi ruang kelas interaktif berkonsep ramah anak.",
      en: "Joint community effort cleaning and painting village hall spaces into child-friendly interactive learning rooms.",
    },
    image: "https://picsum.photos/800/500?random=152",
  },
  {
    id: "news-3",
    category: {
      id: "Dokumentasi",
      en: "Documentation",
    },
    date: {
      id: "25 Juli 2026",
      en: "July 25, 2026",
    },
    title: {
      id: "Keseruan Kelas Bahasa Inggris Perdana: Belajar Sambil Bermain",
      en: "Joyful First English Class: Learning Through Play",
    },
    excerpt: {
      id: "Sesi perdana diawali dengan pengenalan kosa kata melalui lagu dan permainan kelompok yang melatih keberanian siswa berbincang.",
      en: "Debut session started with vocabulary songs and group games encouraging student conversational confidence.",
    },
    image: "https://picsum.photos/800/500?random=153",
  },
];
