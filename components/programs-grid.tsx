import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Star, Users, CheckCircle2 } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { programs } from "@/data/programs";
import { villageProfile } from "@/data/village-profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProgramCard } from "./program-card";
import { ProgramFeaturedCard } from "./program-featured-card";

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
            <ProgramFeaturedCard 
              program={featuredProgram} 
              lang={lang} 
              detailCta={t("detailCta")} 
              featuredBadge={t("featuredBadge")} 
              whatsappUrl={villageProfile.contact.whatsapp}
            />
          </div>

          {/* Right: Stacked Non-Featured Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {regularPrograms.map((program) => (
              <ProgramCard 
                key={program.id}
                program={program}
                lang={lang}
                detailCta={t("detailCta")}
                applyCta={t("applyCta")}
                whatsappUrl={villageProfile.contact.whatsapp}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProgramsGrid;
