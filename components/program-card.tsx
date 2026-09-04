"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { Program } from "@/data/programs";

interface ProgramCardProps {
  program: Program;
  lang?: "id" | "en";
  detailCta?: string;
  applyCta?: string;
  whatsappUrl?: string;
}

export function ProgramCard({
  program,
  lang = "id",
  detailCta = "Lihat Detail",
}: ProgramCardProps) {
  if (!program) return null;

  const title = program.title?.[lang] || program.title?.id || "";
  const description = program.description?.[lang] || program.description?.id || "";
  const category = program.category?.[lang] || program.category?.id;
  const targetAudience = program.targetAudience?.[lang] || program.targetAudience?.id;

  return (
    <Link
      href={`/programs/${program.id}`}
      className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-xl border border-gray-100 hover:border-primary-blue/30 flex flex-col sm:flex-row gap-5 items-stretch sm:items-center transition-all duration-300 group hover:-translate-y-0.5 cursor-pointer text-left w-full"
    >
      {/* Thumbnail Image */}
      <div className="relative w-full sm:w-44 aspect-[16/10] sm:aspect-square rounded-xl overflow-hidden shrink-0">
        <Image
          src={program.image}
          alt={`Foto sub-program unit KKN - ${title}`}
          fill
          sizes="(max-width: 640px) 100vw, 180px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col justify-between flex-1 gap-2">
        <div className="flex flex-col gap-1.5">
          {category && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary-blue bg-blue-50 px-2.5 py-0.5 rounded-md w-fit">
              {category}
            </span>
          )}
          <h3 className="text-lg font-bold text-primary-navy group-hover:text-primary-blue transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-text-muted line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-2 flex items-center justify-between text-xs font-semibold text-primary-navy">
          {targetAudience && (
            <span className="text-text-muted font-normal text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              {targetAudience}
            </span>
          )}
          <div className="inline-flex items-center gap-1 text-primary-blue group-hover:text-primary-navy transition-colors ml-auto">
            <span>{detailCta}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
