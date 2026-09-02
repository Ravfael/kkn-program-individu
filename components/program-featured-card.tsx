"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Users, MessageCircle, CheckCircle2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProgramFeaturedCard({ program, lang, applyCta, featuredBadge, whatsappUrl }: any) {
  return (
    <Sheet>
      <SheetTrigger render={
        <div className="w-full h-full bg-primary-navy text-white rounded-2xl shadow-xl border border-blue-900/50 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left">
          
          {/* Featured Image Area */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] overflow-hidden">
            <Image
              src={program.image}
              alt={`Foto program utama KKN - ${program.title[lang]}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent" />
            
            {/* Featured Badge */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-gold text-primary-navy text-xs font-extrabold tracking-wider uppercase shadow-md">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{program.category?.[lang] || featuredBadge}</span>
            </div>
          </div>

          {/* Featured Body */}
          <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug group-hover:text-accent-gold transition-colors">
                {program.title[lang]}
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {program.description[lang]}
              </p>
            </div>

            {/* Metadata & CTA */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              {program.targetAudience && (
                <div className="flex items-center gap-2 text-xs font-semibold text-accent-gold bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                  <Users className="w-4 h-4" />
                  <span>{program.targetAudience[lang]}</span>
                </div>
              )}

              <div className="inline-flex items-center gap-2 bg-accent-gold group-hover:bg-yellow-400 text-primary-navy font-bold text-sm px-5 py-2.5 rounded-xl shadow-md transition-all">
                <span>{applyCta}</span>
                <ArrowRight className="w-4 h-4" />
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
