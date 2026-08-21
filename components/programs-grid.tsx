import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Star, Users, CheckCircle2 } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { programs } from "@/data/programs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export async function ProgramsGrid({ locale = "id" }: { locale?: string }) {
  const t = await getTranslations({ locale, namespace: "programsGrid" });
  const lang = (locale === "en" ? "en" : "id") as "id" | "en";

  const featuredProgram = programs.find((p) => p.featured) || programs[0];
  const regularPrograms = programs.filter((p) => p.id !== featuredProgram.id);

  return (
    <section id="program" className="py-16 sm:py-20 lg:py-24 bg-bg-muted relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 max-w-3xl mb-12 sm:mb-16">
          <Eyebrow variant="blue">{t("eyebrow")}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-navy tracking-tight leading-tight">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Asymmetric Desktop Grid (Featured 6-col / Regular 6-col) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Large Featured Card (Dark Navy per Section 6.1) */}
          <div className="lg:col-span-6 flex">
            <div className="w-full bg-primary-navy text-white rounded-2xl shadow-xl border border-blue-900/50 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              
              {/* Featured Image Area */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] overflow-hidden">
                <Image
                  src={featuredProgram.image}
                  alt={`Foto program utama KKN - ${featuredProgram.title[lang]}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-gold text-primary-navy text-xs font-extrabold tracking-wider uppercase shadow-md">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{featuredProgram.category?.[lang] || t("featuredBadge")}</span>
                </div>
              </div>

              {/* Featured Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug group-hover:text-accent-gold transition-colors">
                    {featuredProgram.title[lang]}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {featuredProgram.description[lang]}
                  </p>
                </div>

                {/* Metadata & CTA */}
                <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                  {featuredProgram.targetAudience && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-accent-gold bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                      <Users className="w-4 h-4" />
                      <span>{featuredProgram.targetAudience[lang]}</span>
                    </div>
                  )}

                  <Link
                    href="#kontak"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "bg-accent-gold hover:bg-yellow-400 text-primary-navy font-bold text-sm px-5 py-2.5 rounded-xl shadow-md transition-all gap-2"
                    )}
                  >
                    <span>{t("applyCta")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Stacked Non-Featured Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {regularPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-xl border border-gray-100 hover:border-primary-blue/30 flex flex-col sm:flex-row gap-5 items-stretch sm:items-center transition-all duration-300 group hover:-translate-y-0.5"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full sm:w-44 aspect-[16/10] sm:aspect-square rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={program.image}
                    alt={`Foto sub-program unit KKN - ${program.title[lang]}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 180px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col justify-between flex-1 gap-2">
                  <div className="flex flex-col gap-1.5">
                    {program.category && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary-blue bg-blue-50 px-2.5 py-0.5 rounded-md w-fit">
                        {program.category[lang]}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-primary-navy group-hover:text-primary-blue transition-colors leading-snug">
                      {program.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted line-clamp-2 leading-relaxed">
                      {program.description[lang]}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-primary-navy">
                    {program.targetAudience && (
                      <span className="text-text-muted font-normal text-[11px] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        {program.targetAudience[lang]}
                      </span>
                    )}
                    <Link
                      href="#kontak"
                      className="inline-flex items-center gap-1 text-primary-blue hover:text-primary-navy transition-colors ml-auto"
                    >
                      <span>{t("detailCta")}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProgramsGrid;
