import React from "react";
import Metadata from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Calendar, ArrowLeft, Tag, User, Share2, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";
import { newsItems } from "@/data/news";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { NewsCard } from "@/components/news-card";

export function generateStaticParams() {
  const locales = ["id", "en"];
  return newsItems.flatMap((item) =>
    locales.map((locale) => ({
      locale,
      id: item.id,
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
  const news = newsItems.find((n) => n.id === id);

  if (!news) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  const baseUrl = "https://desakampunginggris.id";
  const articleUrl = `${baseUrl}/${locale}/news/${news.id}`;

  return {
    title: news.title[lang],
    description: news.excerpt[lang],
    alternates: {
      canonical: articleUrl,
      languages: {
        id: `${baseUrl}/id/news/${news.id}`,
        en: `${baseUrl}/en/news/${news.id}`,
      },
    },
    openGraph: {
      title: news.title[lang],
      description: news.excerpt[lang],
      url: articleUrl,
      type: "article",
      publishedTime: "2026-07-12T00:00:00.000Z",
      images: [
        {
          url: news.image,
          alt: news.title[lang],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: news.title[lang],
      description: news.excerpt[lang],
      images: [news.image],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const lang = (locale === "en" ? "en" : "id") as "id" | "en";
  const tNewsSection = await getTranslations({ locale, namespace: "newsSection" });

  const news = newsItems.find((n) => n.id === id);
  if (!news) {
    notFound();
  }

  const relatedNews = newsItems.filter((n) => n.id !== id);

  return (
    <div className="min-h-screen bg-bg-muted flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button / Navigation */}
          <div className="mb-8">
            <Link
              href="/#news"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-gray-100 text-primary-navy font-semibold text-sm shadow-2xs border border-gray-200 transition-all duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-primary-blue" />
              <span>{lang === "en" ? "Back to News" : "Kembali ke Berita"}</span>
            </Link>
          </div>

          {/* Article Header Card */}
          <article className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-gray-100 mb-12">
            {/* Meta badges & details */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-primary-blue/10 text-primary-blue text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5" />
                {news.category[lang]}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted">
                <Calendar className="w-3.5 h-3.5 text-primary-blue" />
                {news.date[lang]}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted">
                <User className="w-3.5 h-3.5 text-primary-blue" />
                {lang === "en" ? "KKN Student Team" : "Tim Mahasiswa KKN"}
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-primary-navy tracking-tight leading-tight mb-6">
              {news.title[lang]}
            </h1>

            {/* Lead Excerpt */}
            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed mb-8 p-4 sm:p-6 bg-blue-50/60 rounded-2xl border-l-4 border-primary-blue">
              {news.excerpt[lang]}
            </p>

            {/* Featured Main Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md mb-8">
              <Image
                src={news.image}
                alt={news.title[lang]}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>

            {/* Article Body Content */}
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base sm:text-lg">
              <p className="whitespace-pre-line leading-8 sm:leading-9">
                {news.content[lang]}
              </p>
            </div>
          </article>

          {/* Related News Section */}
          {relatedNews.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary-blue mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === "en" ? "Related Articles" : "Berita Lainnya"}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy">
                    {lang === "en" ? "Explore More Stories" : "Kabar & Dampak Kegiatan Lainnya"}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedNews.map((item) => (
                  <NewsCard
                    key={item.id}
                    item={item}
                    lang={lang}
                    readStoryCta={tNewsSection("readStory")}
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
