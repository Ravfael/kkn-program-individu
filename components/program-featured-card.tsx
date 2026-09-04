"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Star, Users } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { Program } from "@/data/programs";

interface ProgramFeaturedCardProps {
  program: Program;
  lang?: "id" | "en";
  detailCta?: string;
  featuredBadge?: string;
  applyCta?: string;
  whatsappUrl?: string;
}

export function ProgramFeaturedCard({
  program,
  lang = "id",
  detailCta = "Lihat Detail",
  featuredBadge = "Program Unggulan",
}: ProgramFeaturedCardProps) {
  if (!program) return null;

  const title = program.title?.[lang] || program.title?.id || "";
  const description = program.description?.[lang] || program.description?.id || "";
  const category = program.category?.[lang] || program.category?.id || featuredBadge;
  const targetAudience = program.targetAudience?.[lang] || program.targetAudience?.id;

  return (
    <Link
      href={`/programs/${program.id}`}
      className="w-full h-full bg-primary-navy text-white rounded-2xl shadow-xl border border-blue-900/50 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left"
    >
      {/* Featured Image Area */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] overflow-hidden">
        <Image
          src={program.image}
          alt={`Foto program utama KKN - ${title}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent" />

        {/* Featured Badge */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-gold text-primary-navy text-xs font-extrabold tracking-wider uppercase shadow-md">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>{category}</span>
        </div>
      </div>

      {/* Featured Body */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug group-hover:text-accent-gold transition-colors">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Metadata & CTA */}
        <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
          {targetAudience && (
            <div className="flex items-center gap-2 text-xs font-semibold text-accent-gold bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Users className="w-4 h-4" />
              <span>{targetAudience}</span>
            </div>
          )}

          <div className="inline-flex items-center gap-2 bg-accent-gold group-hover:bg-yellow-400 text-primary-navy font-bold text-sm px-5 py-2.5 rounded-xl shadow-md transition-all">
            <span>{detailCta}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
