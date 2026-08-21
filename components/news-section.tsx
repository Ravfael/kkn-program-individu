import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Calendar, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { newsItems } from "@/data/news";

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
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-100 hover:border-primary-blue/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image Area with Overlaid Category Badge */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Foto dokumentasi berita kegiatan - ${item.title[lang]}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 inline-block bg-primary-navy/90 backdrop-blur-md text-accent-gold text-xs font-extrabold px-3 py-1 rounded-full shadow-md border border-white/10">
                    {item.category[lang]}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col gap-3">
                  {/* Date Metadata */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-text-muted">
                    <Calendar className="w-3.5 h-3.5 text-primary-blue" />
                    <span>{item.date[lang]}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-navy group-hover:text-primary-blue transition-colors leading-snug">
                    {item.title[lang]}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                    {item.excerpt[lang]}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0">
                <Link
                  href="#news"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-blue group-hover:text-primary-navy transition-colors pt-2 border-t border-gray-100 w-full"
                >
                  <span>{t("readStory")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default NewsSection;
