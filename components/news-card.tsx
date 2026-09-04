"use client";

import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { NewsItem } from "@/data/news";

export function NewsCard({
  item,
  lang,
  readStoryCta,
}: {
  item: NewsItem;
  lang: "id" | "en";
  readStoryCta: string;
}) {
  return (
    <Link
      href={`/news/${item.id}`}
      className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-100 hover:border-primary-blue/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 text-left h-full"
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
        <div className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-blue group-hover:text-primary-navy transition-colors pt-2 border-t border-gray-100 w-full">
          <span>{readStoryCta}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
