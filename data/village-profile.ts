export interface LocalizedString {
  id: string;
  en: string;
}

export interface ContactInfo {
  address: LocalizedString;
  phone: string;
  email: string;
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
        id: "Bersama Memajukan Dusun",
        en: "Building the Hamlet Together",
      },
      paragraph: {
        id: "Sebagai Ketua RT, saya sangat mendukung program Kampung Inggris yang diinisiasi oleh mahasiswa KKN. Kehadiran mereka membawa semangat baru bagi warga, khususnya generasi muda dusun kami, untuk belajar dan berkembang.",
        en: "As the RT Leader, I fully support the Kampung Inggris program initiated by KKN students. Their presence brings a fresh spirit for residents, especially our young generation, to learn and grow.",
      },
      quote: {
        id: "Saya bangga melihat anak-anak dusun kami semangat belajar bahasa Inggris. Ini adalah investasi terbaik untuk masa depan mereka.",
        en: "I am proud to see the children of our hamlet enthusiastically learning English. This is the best investment for their future.",
      },
      authorName: {
        id: "Bpk. [Nama RT 1]",
        en: "Mr. [RT 1 Name]",
      },
      authorTitle: {
        id: "Ketua RT 01, Dusun Candisari",
        en: "RT 01 Leader, Candisari Hamlet",
      },
      photo: "https://picsum.photos/600/750?random=106",
    },
    {
      eyebrow: {
        id: "SAMBUTAN KETUA RT",
        en: "RT LEADER WELCOME",
      },
      heading: {
        id: "Sinergi Warga & Mahasiswa",
        en: "Synergy of Residents & Students",
      },
      paragraph: {
        id: "Program KKN ini adalah contoh nyata bagaimana kolaborasi antara mahasiswa dan warga desa mampu menciptakan perubahan positif yang nyata. Kami sangat mengapresiasi dedikasi para mahasiswa dalam membantu warga kami.",
        en: "This KKN program is a real example of how collaboration between students and village residents can create tangible positive change. We greatly appreciate the dedication of the students in helping our community.",
      },
      quote: {
        id: "Kehadiran mahasiswa KKN benar-benar membawa angin segar. Warga kami jadi lebih semangat dan dusun kami pun semakin dikenal.",
        en: "The presence of KKN students truly brought a fresh breeze. Our residents are more enthusiastic and our hamlet is increasingly well-known.",
      },
      authorName: {
        id: "Bpk. [Nama RT 2]",
        en: "Mr. [RT 2 Name]",
      },
      authorTitle: {
        id: "Ketua RT 02, Dusun Candisari",
        en: "RT 02 Leader, Candisari Hamlet",
      },
      photo: "https://picsum.photos/600/750?random=107",
    },
  ],
  historyBrief: {
    id: "Program KKN ini diinisiasi oleh mahasiswa universitas bersama perangkat desa setempat untuk memperkuat potensi edukasi masyarakat.",
    en: "This KKN initiative was established by university students and village leaders to enhance local community educational potential.",
  },
  locationMapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.956622434318!2d110.3647!3d-7.7956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDcnNDQuMiJTIDExMMKwMjEnNTIuOSJF!5e0!3m2!1sid!2sid!4v1700000000000",
  contact: {
    address: {
      id: "Jl. Dahlia No. 12, Pare, Kediri, Jawa Timur 64212",
      en: "Dahlia Street No. 12, Pare, Kediri, East Java 64212",
    },
    phone: "+62 812-3456-7890",
    email: "info@desakampunginggris.id",
    operatingHours: {
      id: "Senin - Sabtu: 08.00 - 16.00 WIB",
      en: "Monday - Saturday: 08:00 AM - 04:00 PM WIB",
    },
    whatsapp: "https://wa.me/6281234567890",
  },
  socials: [
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "YouTube", url: "https://youtube.com" },
    { platform: "WhatsApp", url: "https://wa.me/6281234567890" },
  ],
};
