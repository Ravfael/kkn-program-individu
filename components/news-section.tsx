import React from "react";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { newsItems } from "@/data/news";
import { NewsCard } from "@/components/news-card";

export async function NewsSection({ locale = "id" }: { locale?: string }) {
  const t = await getTranslations({ locale, namespace: "newsSection" });
  const lang = (locale === "en" ? "en" : "id") as "id" | "en";

  return (
    <section id="news" className="py-16 sm:py-20 lg:py-24 bg-bg-muted relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Row with Top-Right "Lihat Semua" Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col items-start gap-3 max-w-2xl">
            <Eyebrow variant="blue">{t("eyebrow")}</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-navy tracking-tight leading-tight">
              {t("title")}
            </h2>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          <Link
            href="#news"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-primary-navy hover:text-primary-blue font-bold text-sm shadow-xs transition-all duration-200 shrink-0 w-fit group"
          >
            <span>{t("viewAll")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              lang={lang}
              readStoryCta={t("readStory")}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default NewsSection;
