"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProgramCard({ program, lang, detailCta, applyCta, whatsappUrl }: any) {
  return (
    <Sheet>
      <SheetTrigger render={
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-xl border border-gray-100 hover:border-primary-blue/30 flex flex-col sm:flex-row gap-5 items-stretch sm:items-center transition-all duration-300 group hover:-translate-y-0.5 cursor-pointer text-left">
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
              <div className="inline-flex items-center gap-1 text-primary-blue group-hover:text-primary-navy transition-colors ml-auto">
                <span>{detailCta}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      } />
      
      <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col h-full bg-white overflow-y-auto">
        <div className="relative w-full aspect-video shrink-0">
          <Image
            src={program.image}
            alt={program.title[lang]}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6 flex flex-col gap-6 flex-1">
          <SheetHeader className="text-left">
            {program.category && (
              <span className="text-xs font-bold uppercase tracking-wider text-primary-blue bg-blue-50 px-2.5 py-1 rounded-md w-fit mb-2">
                {program.category[lang]}
              </span>
            )}
            <SheetTitle className="text-2xl font-extrabold text-primary-navy leading-tight mt-1">
              {program.title[lang]}
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col gap-4 text-sm text-text-muted leading-relaxed">
            <p className="text-base">{program.description[lang]}</p>
            
            {program.targetAudience && (
              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl mt-4 border border-amber-100">
                <CheckCircle2 className="w-6 h-6 text-accent-gold" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Sasaran Program</span>
                  <span className="font-semibold text-primary-navy text-sm">{program.targetAudience[lang]}</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-auto pt-6">
            <Link
              href={`${whatsappUrl}?text=Halo%20Kak,%20saya%20tertarik%20dengan%20program%20${encodeURIComponent(program.title[lang])}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold py-6 rounded-xl shadow-md transition-all gap-2 text-base"
              )}
            >
              <MessageCircle className="w-5 h-5" />
              <span>{applyCta} via WhatsApp</span>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
