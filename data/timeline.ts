import { LocalizedString } from "./village-profile";

export interface TimelineMilestone {
  id: string;
  date: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  phase?: LocalizedString;
  status?: "completed" | "in-progress" | "upcoming";
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: "m-1",
    date: {
      id: "Minggu 1",
      en: "Week 1",
    },
    phase: {
      id: "Tahap 1",
      en: "Phase 1",
    },
    title: {
      id: "Observasi Awal & Pemetaan Desa",
      en: "Initial Survey & Village Mapping",
    },
    description: {
      id: "Pemetaan potensi edukasi desa, silaturahmi dengan tokoh masyarakat, serta pendataan calon peserta didik Kampung Inggris.",
      en: "Mapping village education potential, meeting community leaders, and enrolling prospective Kampung Inggris students.",
    },
    status: "completed",
  },
  {
    id: "m-2",
    date: {
      id: "Minggu 2",
      en: "Week 2",
    },
    phase: {
      id: "Tahap 2",
      en: "Phase 2",
    },
    title: {
      id: "Peluncuran & Pembukaan Kelas",
      en: "Program Launch & Opening Class",
    },
    description: {
      id: "Peresmian program KKN, pembagian kelompok belajar anak-anak, dan pembagian modul pembelajaran bahasa Inggris gratis.",
      en: "Official KKN launch ceremony, student group assignments, and free English learning module distribution.",
    },
    status: "completed",
  },
  {
    id: "m-3",
    date: {
      id: "Minggu 3 & 4",
      en: "Week 3 & 4",
    },
    phase: {
      id: "Tahap 3",
      en: "Phase 3",
    },
    title: {
      id: "Pembelajaran & Workshop Intensif",
      en: "Intensive Classes & Workshops",
    },
    description: {
      id: "Kelas harian percakapan bahasa Inggris, workshop digital branding bagi pelaku UMKM desa, serta latihan public speaking.",
      en: "Daily English conversation classes, MSME digital branding workshops, and youth public speaking practice.",
    },
    status: "in-progress",
  },
  {
    id: "m-4",
    date: {
      id: "Minggu 5",
      en: "Week 5",
    },
    phase: {
      id: "Tahap 4",
      en: "Phase 4",
    },
    title: {
      id: "Evaluasi Kemajuan Belajar",
      en: "Progress Evaluation & Assessment",
    },
    description: {
      id: "Pengukuran peningkatan kosa kata dan keberanian siswa dalam berpidato bahasa Inggris melalui asesmen menyenangkan.",
      en: "Assessing vocabulary growth and speaking confidence through fun, encouraging student assessments.",
    },
    status: "upcoming",
  },
  {
    id: "m-5",
    date: {
      id: "Minggu 6",
      en: "Week 6",
    },
    phase: {
      id: "Tahap 5",
      en: "Phase 5",
    },
    title: {
      id: "Pentas Seni & Serah Terima Program",
      en: "Performance Showcase & Handover",
    },
    description: {
      id: "Pertunjukan pentas seni anak-anak desa, pembagian sertifikat, serta penyerahan kurikulum berkelanjutan kepada perangkat desa.",
      en: "Children performance showcase, certificate presentation, and sustainable curriculum handover to village leaders.",
    },
    status: "upcoming",
  },
];
