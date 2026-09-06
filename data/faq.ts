import { LocalizedString } from "./village-profile";

export interface FaqItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category?: LocalizedString;
}

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: {
      id: "Apa itu Program Wisata Edukasi Kampung Inggris?",
      en: "What is the Kampung Inggris Educational Tourism Program?",
    },
    answer: {
      id: "Program KKN ini merupakan inisiatif pengabdian mahasiswa bersama perangkat kampung untuk menghadirkan pusat pembelajaran bahasa Inggris gratis, ramah anak, dan berbasis komunitas guna meningkatkan kualitas SDM kampung.",
      en: "This KKN initiative is a collaborative effort between university students and village leaders to provide free, community-based, child-friendly English learning hubs that empower local residents.",
    },
    category: {
      id: "Umum",
      en: "General",
    },
  },
  {
    id: "faq-2",
    question: {
      id: "Siapa saja yang boleh mengikuti program pembelajaran ini?",
      en: "Who can participate in these learning programs?",
    },
    answer: {
      id: "Seluruh warga kampung dari berbagai jenjang usia terbuka untuk bergabung — mulai dari anak-anak SD, remaja SMP/SMA, pemuda karang taruna, hingga pelaku UMKM lokal.",
      en: "All village residents across all age groups are welcome to join — from elementary pupils, teenagers, youth club members, to local business owners.",
    },
    category: {
      id: "Peserta",
      en: "Eligibility",
    },
  },
  {
    id: "faq-3",
    question: {
      id: "Apakah ada biaya pendaftaran atau biaya bulanan?",
      en: "Are there any registration or monthly tuition fees?",
    },
    answer: {
      id: "Tidak ada biaya sama sekali (100% Gratis). Seluruh biaya modul, buku panduan, dan fasilitas pendukung ditanggung oleh tim KKN bekerjasama dengan kas pengabdian universitas.",
      en: "Absolutely free (100% Free). All learning modules, guidebooks, and facilities are fully funded by the KKN team and university community service grants.",
    },
    category: {
      id: "Biaya",
      en: "Fees",
    },
  },
  {
    id: "faq-4",
    question: {
      id: "Bagaimana cara pendaftaran dan jadwal pelaksanaan kelas?",
      en: "How do I register and what is the class schedule?",
    },
    answer: {
      id: "Pendaftaran dapat dilakukan langsung di Balai Kampung atau melalui formulir kontak di situs ini. Kelas diadakan setiap sore hari (Senin, Rabu, dan Jumat) pukul 16.00 WIB di posko belajar kampung.",
      en: "Registration is available directly at the Village Hall or via our online contact section. Classes take place every weekday afternoon (Monday, Wednesday, and Friday at 16.00 PM WIB).",
    },
    category: {
      id: "Pendaftaran",
      en: "Registration",
    },
  },
  {
    id: "faq-5",
    question: {
      id: "Berapa lama program KKN dan kelas ini berlangsung?",
      en: "How long does the KKN program and class series last?",
    },
    answer: {
      id: "Program intensif mahasiswa KKN berlangsung selama 1 bulan. Setelahnya, pengajaran akan dilanjutkan oleh kader muda kampung yang telah dilatih secara mandiri.",
      en: "The intensive student KKN program lasts for 1 month. Afterward, classes will be sustained independently by trained local youth cadres.",
    },
    category: {
      id: "Durasi",
      en: "Duration",
    },
  },
];
