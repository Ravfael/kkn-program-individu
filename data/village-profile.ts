export interface LocalizedString {
  id: string;
  en: string;
}

export interface ContactInfo {
  address: LocalizedString;
  phone: string;
  email?: string;
  operatingHours: LocalizedString;
  whatsapp?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface CommunityFigure {
  eyebrow: LocalizedString;
  heading: LocalizedString;
  paragraph: LocalizedString;
  quote: LocalizedString;
  authorName: LocalizedString;
  authorTitle: LocalizedString;
  photo: string;
}

/** @deprecated Use communityFigures array instead */
export type WelcomeMessageDetails = CommunityFigure;

export interface VillageProfile {
  name: LocalizedString;
  subdistrict: LocalizedString;
  district: LocalizedString;
  province: LocalizedString;
  tagline: LocalizedString;
  heroImages: string[];
  /** @deprecated Use communityFigures */
  welcomeMessage: CommunityFigure;
  communityFigures: CommunityFigure[];
  historyBrief: LocalizedString;
  locationMapUrl: string;
  contact: ContactInfo;
  socials: SocialLink[];
}

export const villageProfile: VillageProfile = {
  name: {
    id: "Desa Wisata Edukasi Kampung Inggris",
    en: "Kampung Inggris Educational Tourism Village",
  },
  subdistrict: {
    id: "Kecamatan Pare",
    en: "Pare District",
  },
  district: {
    id: "Kabupaten Kediri",
    en: "Kediri Regency",
  },
  province: {
    id: "Jawa Timur",
    en: "East Java",
  },
  tagline: {
    id: "Membangun Generasi Cakap Berbahasa Inggris & Berdaya Saing Global",
    en: "Empowering Youth with English Proficiency & Global Competitiveness",
  },
  heroImages: ["/images/hero/1.jpeg", "/images/hero/2.jpeg", "/images/hero/3.jpeg"],
  welcomeMessage: {
    eyebrow: {
      id: "SAMBUTAN KEPALA DESA",
      en: "VILLAGE HEAD WELCOME",
    },
    heading: {
      id: "Membangun Kampung Inggris",
      en: "Building Kampung Inggris Together",
    },
    paragraph: {
      id: "Program Desa Wisata Edukasi Kampung Inggris lahir dari semangat gotong royong antara warga desa dan tim mahasiswa KKN. Melalui sinergi ini, kami menghadirkan lingkungan belajar bahasa Inggris yang ramah, inklusif, dan terbuka bagi seluruh lapisan masyarakat. Kami percaya bahwa penguasaan bahasa internasional dan literasi digital akan menjadi kunci utama pembuka peluang masa depan yang lebih cerah bagi putra-putri daerah kami.",
      en: "The Kampung Inggris Educational Village Initiative stems from collaborative spirit between local residents and KKN student teams. Through this synergy, we provide an inclusive, welcoming English learning environment open to all community members. We believe international language mastery and digital literacy unlock brighter future opportunities for local youth.",
    },
    quote: {
      id: "Melalui program Kampung Inggris ini, kami ingin menjadikan desa kami sebagai pusat edukasi yang ramah, berdaya saing, dan menginspirasi bagi desa-desa lainnya.",
      en: "Through this Kampung Inggris program, we aim to transform our village into an inspiring, competitive, and welcoming educational hub for neighboring regions.",
    },
    authorName: {
      id: "Bpk. Sugeng Rahardjo",
      en: "Mr. Sugeng Rahardjo",
    },
    authorTitle: {
      id: "Kepala Desa Pare",
      en: "Head of Pare Village",
    },
    photo: "https://picsum.photos/600/750?random=105",
  },
  communityFigures: [
    {
      eyebrow: {
        id: "SAMBUTAN KETUA RT",
        en: "RT LEADER WELCOME",
      },
      heading: {
        id: "Bersama Memajukan Kampung",
        en: "Building the Hamlet Together",
      },
      paragraph: {
        id: "Sebagai Ketua RT, saya sangat mendukung program Kampung Inggris yang diinisiasi oleh mahasiswa KKN. Kehadiran mereka membawa semangat baru bagi warga, khususnya generasi muda kampung kita, untuk belajar dan berkembang.",
        en: "As the RT Leader, I fully support the Kampung Inggris program initiated by KKN students. Their presence brings a fresh spirit for residents, especially our young generation, to learn and grow.",
      },
      quote: {
        id: "Kehadiran mahasiswa KKN ini sangat bermanfaat bagi Candi Sari, terutama dalam bidang pendidikan Bahasa Inggris, pendampingan promosi dan pemasaran UMKM, serta penguatan ekonomi di wilayah Candi Sari.",
        en: "The presence of these KKN students is highly beneficial for Candi Sari, particularly in the areas of English language education, support for MSME promotion and marketing, and economic strengthening within the Candi Sari area..",
      },
      authorName: {
        id: "Bpk. Eko",
        en: "Mr. Eko",
      },
      authorTitle: {
        id: "Ketua RT 06, Kampung Candisari",
        en: "RT 06 Leader, Candisari Hamlet",
      },
      photo: "/images/village/rt06.jpeg",
    },
    {
      eyebrow: {
        id: "SAMBUTAN KETUA RT",
        en: "RT LEADER WELCOME",
      },
      heading: {
        id: "Terima Kasih Mahasiswa KKN",
        en: "Thank You, KKN Students",
      },
      paragraph: {
        id: "Atas nama seluruh pengurus kampung dan warga, saya menyampaikan terima kasih kepada adik-adik mahasiswa KKN. Kehadiran kalian selama satu bulan telah memberikan dampak dan semangat positif bagi kampung kita melalui berbagai program kerja yang bermanfaat.",
        en: "On behalf of all village officials and residents, I extend my deepest gratitude to the KKN students. Your one-month presence has brought positive impact and spirit to our hamlet through various beneficial programs.",
      },
      quote: {
        id: "Berbagai program mulai dari pemeriksaan kesehatan, penyuluhan, bimbingan belajar anak-anak di TPA, hingga pendampingan UMKM telah terlaksana dengan baik dan meninggalkan kesan mendalam bagi warga.",
        en: "Various programs ranging from health checkups, community outreach, children's tutoring at TPA, to MSME mentoring have been well-executed and left a lasting impression on our residents.",
      },
      authorName: {
        id: "Ketua RT 07",
        en: "RT 07 Leader",
      },
      authorTitle: {
        id: "Ketua RT 07, Kampung Candisari",
        en: "RT 07 Leader, Candisari Hamlet",
      },
      photo: "/images/village/rt07.jpeg",
    },
  ],
  historyBrief: {
    id: "Program KKN ini diinisiasi oleh mahasiswa universitas bersama perangkat kampung setempat untuk memperkuat potensi edukasi masyarakat.",
    en: "This KKN initiative was established by university students and village leaders to enhance local community educational potential.",
  },
  locationMapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.839250119056!2d110.4146773793457!3d-7.7003939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5f03a1100719%3A0x3b7d2aeea44fea86!2sBank%20Sampah%20Candisari!5e0!3m2!1sen!2sid!4v1788703285204!5m2!1sen!2sid",
  contact: {
    address: {
      id: "Kampung Candisari, Desa Sardonoharjo, Kec. Ngaglik, Kab. Sleman, D.I. Yogyakarta",
      en: "Candisari Hamlet, Sardonoharjo Village, Ngaglik District, Sleman Regency, Special Region of Yogyakarta",
    },
    phone: "+62 815-6886-035",
    operatingHours: {
      id: "Senin - Sabtu: 08.00 - 16.00 WIB",
      en: "Monday - Saturday: 08:00 AM - 04:00 PM WIB",
    },
    whatsapp: "https://wa.me/628156886035",
  },
  socials: [
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "YouTube", url: "https://youtube.com" },
    { platform: "WhatsApp", url: "https://wa.me/628156886035" },
  ],
};
