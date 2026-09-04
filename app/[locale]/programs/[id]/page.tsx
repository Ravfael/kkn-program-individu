import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowLeft, CheckCircle2, Target, Sparkles, Users, Layers } from "lucide-react";
import { Link } from "@/i18n/routing";
import { programs } from "@/data/programs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ProgramCard } from "@/components/program-card";

export function generateStaticParams() {
  const locales = ["id", "en"];
  return programs.flatMap((program) =>
    locales.map((locale) => ({
      locale,
      id: program.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const lang = (locale === "en" ? "en" : "id") as "id" | "en";
  const program = programs.find((p) => p.id === id);

  if (!program) {
    return {
      title: "Program Tidak Ditemukan",
    };
  }

  const baseUrl = "https://desakampunginggris.id";
  const programUrl = `${baseUrl}/${locale}/programs/${program.id}`;

  return {
    title: program.title[lang],
    description: program.description[lang],
    alternates: {
      canonical: programUrl,
      languages: {
        id: `${baseUrl}/id/programs/${program.id}`,
        en: `${baseUrl}/en/programs/${program.id}`,
      },
    },
    openGraph: {
      title: program.title[lang],
      description: program.description[lang],
      url: programUrl,
      type: "website",
      images: [
        {
          url: program.image,
          alt: program.title[lang],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: program.title[lang],
      description: program.description[lang],
      images: [program.image],
    },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const lang = (locale === "en" ? "en" : "id") as "id" | "en";
  const tProgramsGrid = await getTranslations({ locale, namespace: "programsGrid" });

  const program = programs.find((p) => p.id === id);
  if (!program) {
    notFound();
  }

  const otherPrograms = programs.filter((p) => p.id !== id);

  return (
    <div className="min-h-screen bg-bg-muted flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Navigation Button */}
          <div className="mb-8">
            <Link
              href="/#program"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-gray-100 text-primary-navy font-semibold text-sm shadow-2xs border border-gray-200 transition-all duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-primary-blue" />
              <span>{lang === "en" ? "Back to Programs" : "Kembali ke Program"}</span>
            </Link>
          </div>

          {/* Program Detail Header Card */}
          <article className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-gray-100 mb-12">
            {/* Category & Target Audience Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {program.category && (
                <span className="inline-flex items-center gap-1.5 bg-primary-blue/10 text-primary-blue text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  {program.category[lang]}
                </span>
              )}
              {program.targetAudience && (
                <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
                  <Users className="w-3.5 h-3.5 text-accent-gold" />
                  {program.targetAudience[lang]}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-primary-navy tracking-tight leading-tight mb-6">
              {program.title[lang]}
            </h1>

            {/* Excerpt / Summary Box */}
            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed mb-8 p-4 sm:p-6 bg-blue-50/60 rounded-2xl border-l-4 border-primary-blue">
              {program.description[lang]}
            </p>

            {/* Featured Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md mb-10">
              <Image
                src={program.image}
                alt={program.title[lang]}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>

            {/* Long Description / Overview */}
            {program.longDescription && (
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-primary-navy mb-4 flex items-center gap-2">
                  <span>{lang === "en" ? "Program Overview" : "Gambaran Umum Program"}</span>
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed sm:leading-8">
                  {program.longDescription[lang]}
                </p>
              </div>
            )}

            {/* Objectives Section */}
            {program.objectives && program.objectives.length > 0 && (
              <div className="mb-10 p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="text-lg sm:text-xl font-bold text-primary-navy mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary-blue" />
                  <span>{lang === "en" ? "Program Objectives" : "Tujuan Utama Program"}</span>
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {program.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{obj[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Highlights Section */}
            {program.highlights && program.highlights.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary-navy mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent-gold" />
                  <span>{lang === "en" ? "Key Highlights" : "Sorotan Kegiatan"}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {program.highlights.map((hl, idx) => (
                    <div key={idx} className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl flex flex-col justify-between">
                      <span className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                        Poin #{idx + 1}
                      </span>
                      <span className="text-sm font-semibold text-primary-navy leading-snug">
                        {hl[lang]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Related Programs Section */}
          {otherPrograms.length > 0 && (
            <div className="mt-16">
              <div className="mb-8">
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary-blue mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === "en" ? "Other Programs" : "Program Unggulan Lainnya"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy">
                  {lang === "en" ? "Explore More KKN Initiatives" : "Inisiatif Program KKN Lainnya"}
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {otherPrograms.map((p) => (
                  <ProgramCard
                    key={p.id}
                    program={p}
                    lang={lang}
                    detailCta={tProgramsGrid("detailCta")}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
