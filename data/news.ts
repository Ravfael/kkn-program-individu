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
      id: "Senam Sehat Bersama Warga: Membangun Semangat Hidup Aktif di Desa",
      en: "Healthy Exercise with Villagers: Building an Active Lifestyle in the Village",
    },
    excerpt: {
      id: "Mahasiswa KKN menggelar senam sehat bersama warga desa di lapangan balai desa, diikuti oleh ibu-ibu, bapak-bapak, hingga anak-anak dengan penuh semangat.",
      en: "KKN students organized a healthy exercise session with villagers at the village hall field, enthusiastically joined by men, women, and children alike.",
    },
    content: {
      id: "Kegiatan senam sehat ini merupakan salah satu program kerja mahasiswa KKN yang bertujuan untuk meningkatkan kesadaran masyarakat akan pentingnya menjaga kesehatan tubuh melalui olahraga rutin. Acara berlangsung di lapangan balai desa pada pagi hari dan diikuti oleh berbagai kalangan, mulai dari ibu-ibu, bapak-bapak, hingga anak-anak. Instruktur senam dipandu langsung oleh mahasiswa KKN dengan gerakan-gerakan yang mudah diikuti oleh semua usia. Antusiasme warga sangat tinggi, dan kegiatan ini diharapkan dapat menjadi rutinitas mingguan yang berkelanjutan bahkan setelah program KKN berakhir.",
      en: "This healthy exercise event is one of the KKN student work programs aimed at raising community awareness about the importance of maintaining physical health through regular exercise. The event took place at the village hall field in the morning and was attended by various groups, from mothers, fathers, to children. The exercise instructor was led directly by KKN students with movements that are easy to follow for all ages. The enthusiasm of the residents was very high, and this activity is expected to become a sustainable weekly routine even after the KKN program ends.",
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
      id: "Peresmian Jalan Sehat: Langkah Bersama Menuju Desa yang Lebih Bugar",
      en: "Healthy Walk Inauguration: Stepping Together Toward a Healthier Village",
    },
    excerpt: {
      id: "Kegiatan jalan sehat yang diresmikan bersama Kepala Desa dan perangkat desa, diikuti ratusan warga sebagai bentuk kepedulian terhadap kesehatan masyarakat.",
      en: "A healthy walk event inaugurated with the Village Head and officials, joined by hundreds of residents as a form of community health awareness.",
    },
    content: {
      id: "Peresmian jalan sehat ini menjadi momen spesial bagi seluruh warga desa. Kegiatan dibuka secara resmi oleh Kepala Desa bersama perangkat desa dan diikuti oleh ratusan warga dari berbagai RT/RW. Rute jalan sehat mengelilingi area desa dengan jarak sekitar 3 kilometer, melewati pemandangan sawah dan perkampungan yang asri. Sepanjang perjalanan, mahasiswa KKN juga menyiapkan beberapa pos hidrasi dan pos kesehatan sederhana untuk memastikan keselamatan seluruh peserta. Di akhir acara, diadakan pembagian doorprize bagi peserta yang beruntung sebagai bentuk apresiasi atas partisipasi aktif warga.",
      en: "The inauguration of this healthy walk became a special moment for all villagers. The event was officially opened by the Village Head together with village officials and was followed by hundreds of residents from various neighborhoods. The walking route circled the village area for about 3 kilometers, passing through scenic rice fields and settlements. Along the way, KKN students also prepared several hydration stations and simple health posts to ensure the safety of all participants. At the end of the event, door prizes were distributed to lucky participants as a form of appreciation for the active participation of residents.",
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
      id: "Kelas bahasa Inggris perdana berlangsung penuh keceriaan di ruang belajar yang telah disiapkan oleh tim KKN. Anak-anak desa yang berusia 7 hingga 14 tahun mengikuti sesi ini dengan antusias. Materi dimulai dari pengenalan kosa kata dasar seperti salam, angka, dan warna melalui metode lagu dan permainan interaktif. Mahasiswa KKN menggunakan pendekatan yang menyenangkan agar anak-anak tidak merasa terintimidasi dengan bahasa asing. Beberapa anak bahkan sudah berani maju ke depan untuk memperkenalkan diri dalam bahasa Inggris. Keberhasilan sesi pertama ini menjadi motivasi besar bagi tim untuk terus mengembangkan kurikulum yang kreatif dan inklusif.",
      en: "The first English class took place full of joy in the learning room prepared by the KKN team. Village children aged 7 to 14 enthusiastically participated in this session. The material started from basic vocabulary such as greetings, numbers, and colors through songs and interactive games. KKN students used a fun approach so that children would not feel intimidated by the foreign language. Some children even dared to come forward to introduce themselves in English. The success of this first session became a great motivation for the team to continue developing creative and inclusive curricula.",
    },
    image: "/images/programs/g2.jpeg",
  },
];
