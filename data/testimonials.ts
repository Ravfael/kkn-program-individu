import { LocalizedString } from "./village-profile";

export interface Testimonial {
  id: string;
  name: LocalizedString;
  role: LocalizedString;
  quote: LocalizedString;
  avatar: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "testi-1",
    name: {
      id: "Bpk. Sugeng Rahardjo",
      en: "Mr. Sugeng Rahardjo",
    },
    role: {
      id: "Kepala Desa",
      en: "Head of Village",
    },
    quote: {
      id: "Kehadiran tim KKN dengan program Kampung Inggris membawa dampak positif yang nyata bagi anak-anak di kampung kami. Mereka menjadi lebih percaya diri dan bersemangat belajar.",
      en: "The arrival of the KKN team with the Kampung Inggris program brought a real positive impact for our village children. They have become far more confident and excited to learn.",
    },
    avatar: "https://picsum.photos/150/150?random=31",
    rating: 5,
  },
  {
    id: "testi-2",
    name: {
      id: "Siti Nurhaliza",
      en: "Siti Nurhaliza",
    },
    role: {
      id: "Siswa Kelas 5 SD",
      en: "5th Grade Student",
    },
    quote: {
      id: "Belajar bahasa Inggris di sini seru banget! Kakak-kakak mahasiswa mengajar sambil main game dan bernyanyi, jadi tidak membosankan.",
      en: "Learning English here is super fun! The university students teach while playing games and singing, so it's never boring.",
    },
    avatar: "https://picsum.photos/150/150?random=32",
    rating: 5,
  },
  {
    id: "testi-3",
    name: {
      id: "Mas Rian Ardianto",
      en: "Rian Ardianto",
    },
    role: {
      id: "Ketua Karang Taruna",
      en: "Youth Club Leader",
    },
    quote: {
      id: "Pelatihan digital branding dan public speaking sangat membantu pemuda kampung untuk mempromosikan potensi lokal ke luar daerah.",
      en: "The digital branding and public speaking workshops immensely helped our village youth promote local business potential beyond our region.",
    },
    avatar: "https://picsum.photos/150/150?random=33",
    rating: 5,
  },
  {
    id: "testi-4",
    name: {
      id: "Ibu Endang Lestari",
      en: "Mrs. Endang Lestari",
    },
    role: {
      id: "Orang Tua Murid",
      en: "Parent of Student",
    },
    quote: {
      id: "Sangat bersyukur ada program ini. Anak saya sekarang rajin latihan perkenalan bahasa Inggris di rumah setiap hari.",
      en: "So grateful for this program. My child now practices English self-introductions at home every day.",
    },
    avatar: "https://picsum.photos/150/150?random=34",
    rating: 5,
  },
];
