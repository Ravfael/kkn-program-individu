import { LocalizedString } from "./village-profile";

export interface NewsItem {
  id: string;
  category: LocalizedString;
  date: LocalizedString;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
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
      id: "Senam Posbindu Rutin Warga di RS Gramedika",
      en: "Routine Posbindu Exercise for Residents at Gramedika Hospital",
    },
    excerpt: {
      id: "Warga kampung bersama mahasiswa KKN mengikuti kegiatan senam posbindu rutin di RS Gramedika dengan penuh antusias dan semangat hidup sehat.",
      en: "Hamlet residents together with KKN students participated in the routine posbindu exercise at Gramedika Hospital with great enthusiasm and a healthy lifestyle spirit.",
    },
    content: {
      id: "Kegiatan senam posbindu rutin warga di RS Gramedika ini merupakan wujud nyata kepedulian terhadap kesehatan dan kebugaran masyarakat kampung. Acara berlangsung dengan meriah, dipandu oleh instruktur senam profesional, dan diikuti oleh berbagai kalangan warga mulai dari lansia, ibu-ibu, hingga pemuda. Selain senam bersama, kegiatan ini juga dirangkaikan dengan pemeriksaan kesehatan berkala untuk memantau kondisi fisik warga. Partisipasi aktif warga kampung menunjukkan kesadaran tinggi akan pentingnya olahraga dan pola hidup sehat secara berkelanjutan.",
      en: "This routine posbindu exercise for residents at Gramedika Hospital is a tangible manifestation of care for the health and fitness of the community. The event was lively, led by professional instructors, and attended by various residents ranging from seniors and mothers to youth. In addition to the exercise, this activity was also paired with regular health check-ups to monitor physical health.",
    },
    image: "/images/news/kd2.jpeg",
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
      id: "Peresmian Jalan Paving Block",
      en: "Inauguration of Paving Block Road",
    },
    excerpt: {
      id: "Peresmian jalan paving block baru di lingkungan kampung yang diresmikan bersama tokoh masyarakat dan warga sebagai penunjang akses mobilitas.",
      en: "Inauguration of the new paving block road in the hamlet environment with community leaders and residents to support mobility access.",
    },
    content: {
      id: "Peresmian jalan paving block ini menjadi momen penting bagi seluruh warga kampung. Kegiatan dibuka dan diresmikan bersama tokoh masyarakat, pengurus RT, dan warga sekitar. Pembangunan akses jalan paving block ini sangat bermanfaat dalam mempermudah mobilitas harian warga serta mempercantik tata lingkungan kampung. Melalui gotong royong dan sinergi bersama tim mahasiswa KKN, jalan yang kini rapi dan nyaman dilewati ini diharapkan dapat terus dirawat bersama demi kemaslahatan seluruh masyarakat.",
      en: "The inauguration of this paving block road is an important moment for all hamlet residents. The event was officially opened and inaugurated together with community leaders, RT heads, and local residents. The construction of this paving block road greatly facilitates daily resident mobility and beautifies the hamlet environment.",
    },
    image: "/images/news/kd3.jpeg",
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
    content: {
      id: "Kelas bahasa Inggris perdana berlangsung penuh keceriaan di ruang belajar yang telah disiapkan oleh tim KKN. Anak-anak kampung yang berusia 7 hingga 14 tahun mengikuti sesi ini dengan antusias. Materi dimulai dari pengenalan kosa kata dasar seperti salam, angka, dan warna melalui metode lagu dan permainan interaktif. Mahasiswa KKN menggunakan pendekatan yang menyenangkan agar anak-anak tidak merasa terintimidasi dengan bahasa asing. Beberapa anak bahkan sudah berani maju ke depan untuk memperkenalkan diri dalam bahasa Inggris. Keberhasilan sesi pertama ini menjadi motivasi besar bagi tim untuk terus mengembangkan kurikulum yang kreatif dan inklusif.",
      en: "The first English class took place full of joy in the learning room prepared by the KKN team. Village children aged 7 to 14 enthusiastically participated in this session. The material started from basic vocabulary such as greetings, numbers, and colors through songs and interactive games. KKN students used a fun approach so that children would not feel intimidated by the foreign language. Some children even dared to come forward to introduce themselves in English. The success of this first session became a great motivation for the team to continue developing creative and inclusive curricula.",
    },
    image: "/images/programs/g2.jpeg",
  },
];
