import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Quote, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { villageProfile } from "@/data/village-profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export async function BrandStory({ locale = "id" }: { locale?: string }) {
  const t = await getTranslations({ locale, namespace: "brandStory" });
  const lang = (locale === "en" ? "en" : "id") as "id" | "en";
  const { welcomeMessage } = villageProfile;

  return (
    <section id="tentang" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait Image with Styling */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
              <Image
                src={welcomeMessage.photo}
                alt={`Foto profil sambutan Kepala Desa Pare - ${welcomeMessage.heading[lang]}`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 via-transparent to-transparent" />
            </div>

            {/* Decorative Accent Card / Badge */}
            <div className="absolute -bottom-5 -right-3 sm:bottom-6 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary-blue flex items-center justify-center font-bold text-xl shrink-0">
                100%
              </div>
              <div>
                <p className="text-xs font-bold text-primary-navy leading-tight">
                  {t("badgeTitle")}
                </p>
                <p className="text-[11px] text-text-muted mt-0.5">
                  {t("badgeSub")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Story Content & Pull-Quote */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Eyebrow Label */}
            <Eyebrow variant="blue">{welcomeMessage.eyebrow[lang]}</Eyebrow>

            {/* Section Heading (SEO-02 H2) */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-navy tracking-tight leading-tight">
              {welcomeMessage.heading[lang]}
            </h2>

            {/* Introductory Paragraph */}
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              {welcomeMessage.paragraph[lang]}
            </p>

            {/* Pull-Quote Block (Dark Navy Background per Section 6.1) */}
            <div className="w-full mt-2 p-6 sm:p-7 rounded-2xl bg-primary-navy text-white shadow-lg relative overflow-hidden border border-blue-900/50">
              <Quote className="w-10 h-10 text-accent-gold/30 absolute top-4 right-4 pointer-events-none" />
              
              <blockquote className="relative z-10 text-sm sm:text-base italic text-slate-100 leading-relaxed font-medium">
                &ldquo;{welcomeMessage.quote[lang]}&rdquo;
              </blockquote>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-accent-gold tracking-wide">
                    {welcomeMessage.authorName[lang]}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    {welcomeMessage.authorTitle[lang]}
                  </p>
                </div>
              </div>
            </div>

            {/* Read More Link / Button */}
            <div className="pt-2">
              <Link
                href="#program"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-primary-blue hover:bg-primary-navy text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-200 inline-flex items-center gap-2 group"
                )}
              >
                <span>{t("readMore")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default BrandStory;
