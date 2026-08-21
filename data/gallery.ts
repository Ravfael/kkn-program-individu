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
    src: "https://picsum.photos/1000/800?random=201",
    caption: {
      id: "Pembukaan Resmi Kelas Kampung Inggris KKN bersama Perangkat Desa",
      en: "Official Opening of Kampung Inggris Classes with Village Leaders",
    },
    category: {
      id: "Pembelajaran",
      en: "Learning",
    },
  },
  {
    id: "photo-2",
    src: "https://picsum.photos/800/600?random=202",
    caption: {
      id: "Pendampingan Foto Produk dan Branding Digital UMKM Warga Desa",
      en: "Product Photography & MSME Digital Branding Assistance",
    },
    category: {
      id: "Ekonomi Digital",
      en: "Digital Economy",
    },
  },
  {
    id: "photo-3",
    src: "https://picsum.photos/800/600?random=203",
    caption: {
      id: "Perlombaan Kuis Interaktif Bahasa Inggris untuk Siswa Sekolah Dasar",
      en: "Interactive English Quiz Competition for Elementary School Students",
    },
    category: {
      id: "Edukasi & Lomba",
      en: "Education & Contest",
    },
  },
  {
    id: "photo-4",
    src: "https://picsum.photos/800/600?random=204",
    caption: {
      id: "Gotong Royong Mahasiswa KKN & Karang Taruna Merapikan Ruang Belajar",
      en: "Joint Cleaning & Painting of Learning Hub by Students & Youth Club",
    },
    category: {
      id: "Sosial & Warga",
      en: "Community",
    },
  },
  {
    id: "photo-5",
    src: "https://picsum.photos/800/600?random=205",
    caption: {
      id: "Penampilan Pidato Bahasa Inggris Anak-Anak Desa pada Acara Penutupan",
      en: "English Speech Performance by Village Children at Closing Ceremony",
    },
    category: {
      id: "Acara Puncak",
      en: "Closing Showcase",
    },
  },
];
