import { LocalizedString } from "./village-profile";

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: LocalizedString;
  category?: LocalizedString;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "photo-1",
    src: "/images/gallery/gds1.jpg",
    caption: {
      id: "Pembukaan Fasilitas Posyandu Tunas Melati Padukuhan Candikarang",
      en: "Opening of the Integrated Health Post (Posyandu) Facility",
    },
    category: {
      id: "Kesehatan",
      en: "Healthcare",
    },
  },
  {
    id: "photo-2",
    src: "/images/gallery/gds2.jpg",
    caption: {
      id: "Senam Sehat Bersama Warga Dusun Candisari",
      en: "Healthy Exercise with Residents of Candisari Hamlet",
    },
    category: {
      id: "Kesehatan",
      en: "Healthcare",
    },
  },
  {
    id: "photo-3",
    src: "/images/gallery/gds3.jpg",
    caption: {
      id: "Jalan Sehat Bersama Warga Dusun Candisari Memperingati HUT RI",
      en: "Community Fun Walk with Residents of Candisari Hamlet to Commemorate Indonesia's Independence Day",
    },
    category: {
      id: "Kesehatan & Sosial",
      en: "Health & Community",
    },
  },
  {
    id: "photo-4",
    src: "/images/gallery/g3.jpg",
    caption: {
      id: "Gotong Royong Berama Warga Dalam Rangka HUT RI",
      en: "Joint Community Work with Residents to Mark Indonesia's Independence Day",
    },
    category: {
      id: "Sosial & Warga",
      en: "Community",
    },
  },
  {
    id: "photo-5",
    src: "/images/gallery/gds4.jpeg",
    caption: {
      id: "Kelas Bahasa Inggris Bersama Mahasiswa KKN",
      en: "English Class with KKN Students",
    },
    category: {
      id: "Edukasi",
      en: "Education",
    },
  },
  {
    id: "photo-6",
    src: "/images/gallery/gds5.jpeg",
    caption: {
      id: "Permainan Edukatif Berbahasa Inggris Bersama Anak-Anak Desa",
      en: "Educational English Games with Village Children",
    },
    category: {
      id: "Edukasi",
      en: "Education",
    },
  },
];
