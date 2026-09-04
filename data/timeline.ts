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
      id: "Pembelajaran & Sosialisasi Program",
      en: "Intensive Classes & Workshops",
    },
    description: {
      id: "Kelas harian percakapan bahasa Inggris, sosialisasi program dari para mahasiswa, serta realisasi program unit KKN.",
      en: "Daily English conversation classes, program outreach by students, and the implementation of Community Service Program (KKN) unit activities.",
    },
    status: "in-progress",
  },
];
