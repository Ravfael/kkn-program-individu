import { LocalizedString } from "./village-profile";

export interface Program {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  longDescription?: LocalizedString;
  objectives?: LocalizedString[];
  highlights?: LocalizedString[];
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
    longDescription: {
      id: "Program Kampung Inggris Unit dirancang khusus oleh mahasiswa KKN untuk menciptakan ekosistem belajar bahasa Inggris yang komunikatif, inklusif, dan menyenangkan di Desa Candisari. Program ini mencakup modul pembelajaran yang disesuaikan dengan tingkat kemampuan anak-anak hingga remaja desa, menggunakan pendekatan percakapan langsung, permainan edukatif, lagu kosa kata, dan pendampingan personal.",
      en: "The Kampung Inggris Unit program is specially designed by KKN students to create a communicative, inclusive, and fun English learning ecosystem in Candisari Village. This program includes learning modules tailored to the skill levels of children and village youth, utilizing direct conversation approaches, educational games, vocabulary songs, and personal mentoring.",
    },
    objectives: [
      {
        id: "Meningkatkan kepercayaan diri anak-anak desa dalam berkomunikasi menggunakan bahasa Inggris.",
        en: "Boost village children's confidence in communicating using English.",
      },
      {
        id: "Menyediakan modul belajar interaktif berbasis permainan dan percakapan sehari-hari.",
        en: "Provide interactive learning modules based on games and daily conversation.",
      },
      {
        id: "Mendirikan ruang posko belajar yang dapat dimanfaatkan secara berkelanjutan bagi warga.",
        en: "Establish a learning post space that can be sustainably used by residents.",
      },
    ],
    highlights: [
      {
        id: "Kelas Rutin Mingguan untuk Siswa SD & SMP",
        en: "Weekly Routine Classes for Primary & Junior High Students",
      },
      {
        id: "English Fun Games & Outdoor Activity",
        en: "English Fun Games & Outdoor Activity",
      },
      {
        id: "Pendampingan Bebas Biaya oleh Mahasiswa KKN",
        en: "Free Tutoring & Guidance by KKN Students",
      },
    ],
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
    longDescription: {
      id: "Inisiatif Kelompok Wanita Tani (KWT) berfokus pada optimasi pemanfaatan pekarangan rumah warga untuk bercocok tanam sayuran organik dan tanaman obat keluarga. Selain bercocok tanam, tim KKN juga memberikan edukasi pengolahan hasil panen menjadi produk olahan bernilai tambah yang dapat dijual untuk membantu perekonomian keluarga.",
      en: "The Women Farmer Group (KWT) initiative focuses on optimizing the use of household yards for growing organic vegetables and medicinal herbs. In addition to farming, the KKN team provides education on processing harvested yields into value-added products that can be sold to support family economics.",
    },
    objectives: [
      {
        id: "Meningkatkan kemandirian pangan rumah tangga melalui budidaya pekarangan organik.",
        en: "Enhance household food self-sufficiency through organic yard cultivation.",
      },
      {
        id: "Memberikan pelatihan diversifikasi produk olahan pangan berbahan dasar lokal.",
        en: "Provide training on diversifying food products using local ingredients.",
      },
      {
        id: "Membentuk kelompok usaha mikro ibu-ibu desa yang berdaya dan terorganisir.",
        en: "Form organized and empowered micro-business groups among village women.",
      },
    ],
    highlights: [
      {
        id: "Pelatihan Pembuatan Pupuk Kompos Organik",
        en: "Organic Compost Fertilizer Making Training",
      },
      {
        id: "Penanaman Bibit Sayuran & Tanaman Herbal",
        en: "Planting Vegetable Seeds & Herbal Plants",
      },
      {
        id: "Workshop Pengolahan & Pengemasan Hasil Panen",
        en: "Post-Harvest Processing & Packaging Workshop",
      },
    ],
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
    longDescription: {
      id: "Program Bank Sampah merupakan langkah strategis untuk menjaga kebersihan dan kelestarian lingkungan Desa Candisari. Melalui sistem tabungan sampah, warga diajak untuk memilah sampah organik dan anorganik dari rumah tangga. Sampah yang terkumpul disetorkan ke bank sampah desa dan dapat dikonversi menjadi tabungan bernilai ekonomis bagi warga.",
      en: "The Waste Bank program is a strategic step to maintain the cleanliness and environmental sustainability of Candisari Village. Through a waste savings system, residents are encouraged to sort organic and inorganic waste from households. Collected waste is deposited to the village waste bank and converted into economic savings for residents.",
    },
    objectives: [
      {
        id: "Mengurangi volume penumpukan sampah liar di lingkungan desa.",
        en: "Reduce the volume of illegal waste dumping in the village environment.",
      },
      {
        id: "Menumbuhkan kesadaran memilah sampah dari tingkat rumah tangga.",
        en: "Foster awareness of sorting waste from the household level.",
      },
      {
        id: "Memberikan nilai tambah ekonomis bagi warga melalui sistem tabungan sampah.",
        en: "Provide economic value added for residents through the waste savings system.",
      },
    ],
    highlights: [
      {
        id: "Sosialisasi Pemilahan Sampah Organik & Anorganik",
        en: "Socialization of Organic & Inorganic Waste Sorting",
      },
      {
        id: "Penyediaan Tempat Sampah Terpilah di Titik Strategis",
        en: "Provision of Sorted Waste Bins at Strategic Locations",
      },
      {
        id: "Pelatihan Kerajinan Daur Ulang Plastik & Kertas",
        en: "Plastic & Paper Recycling Handicraft Workshop",
      },
    ],
    image: "/images/programs/bankSampah.jpg",
    featured: false,
    category: {
      id: "Divisi Lingkungan",
      en: "Environment Division",
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
    longDescription: {
      id: "Program General Check-Up (GCU) Lansia diselenggarakan sebagai bentuk kepedulian terhadap kesehatan warga lanjut usia di Dusun Candisari. Kegiatan meliputi pemeriksaan tekanan darah, kadar gula darah, asam urat, serta konseling pola hidup sehat. Tim KKN bekerja sama dengan petugas posyandu lansia desa untuk memastikan layanan kesehatan terjangkau dan merata.",
      en: "The Elderly General Check-Up (GCU) Program is organized as a form of care for senior citizens in Candisari Hamlet. Activities include measuring blood pressure, blood sugar, cholesterol, uric acid levels, and offering healthy lifestyle counseling. The KKN team collaborates with village elderly health post officers to ensure affordable and accessible healthcare.",
    },
    objectives: [
      {
        id: "Deteksi dini faktor risiko penyakit tidak menular pada warga lanjut usia.",
        en: "Early detection of non-communicable disease risk factors in senior citizens.",
      },
      {
        id: "Meningkatkan pemahaman lansia mengenai pentingnya nutrisi dan aktivitas fisik ringan.",
        en: "Increase elderly understanding regarding nutrition and light physical activity.",
      },
      {
        id: "Mendukung kelancaran dan keberlanjutan agenda rutin Posyandu Lansia.",
        en: "Support the smooth operation and sustainability of the Elderly Health Post agenda.",
      },
    ],
    highlights: [
      {
        id: "Pemeriksaan Tekanan Darah, Gula Darah & Kolesterol Gratis",
        en: "Free Blood Pressure, Blood Sugar & Cholesterol Check-ups",
      },
      {
        id: "Konsultasi Kesehatan & Edukasi Pola Makan Sehat",
        en: "Health Consultation & Healthy Diet Education",
      },
      {
        id: "Senam Lansia & Pembagian Suplemen Kesehatan",
        en: "Elderly Exercise & Health Supplement Distribution",
      },
    ],
    image: "/images/programs/gcu.png",
    featured: false,
    category: {
      id: "Divisi Kesehatan",
      en: "Health",
    },
    targetAudience: {
      id: "Lansia Dusun Candisari",
      en: "Elderly in Candisari Hamlet",
    },
  },
];
