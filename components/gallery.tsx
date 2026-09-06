"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Maximize2, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { galleryPhotos } from "@/data/gallery";

export function Gallery({ locale = "id" }: { locale?: string }) {
  const t = useTranslations("gallery");
  const activeLocale = useLocale() || locale;
  const lang = (activeLocale === "en" ? "en" : "id") as "id" | "en";

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const featuredPhoto = galleryPhotos[0];
  const gridPhotos = galleryPhotos.slice(1, 5);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % galleryPhotos.length);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + galleryPhotos.length) % galleryPhotos.length);
    }
  }, [selectedIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    },
    [selectedIndex, handleNext, handlePrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex, handleKeyDown]);

  const currentPhoto = selectedIndex !== null ? galleryPhotos[selectedIndex] : null;

  return (
    <section id="galeri" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Row with Top-Right "Lihat Semua Foto" Button */}
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

          <button
            onClick={() => setSelectedIndex(0)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-primary-navy hover:text-primary-blue font-bold text-sm shadow-xs transition-all duration-200 shrink-0 w-fit group cursor-pointer"
          >
            <Camera className="w-4 h-4 text-primary-blue" />
            <span>{t("viewAll")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Asymmetric Desktop Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Large Featured Photo */}
          {featuredPhoto && (
            <div className="lg:col-span-6 flex">
              <div
                onClick={() => setSelectedIndex(0)}
                className="relative w-full h-[360px] sm:h-[420px] lg:h-auto min-h-[420px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 group transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={featuredPhoto.src}
                  alt={`Foto dokumentasi galeri utama - ${featuredPhoto.caption[lang]}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Dark Gradient Mask & Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top-Right Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col gap-2 z-10">
                  {featuredPhoto.category && (
                    <span className="text-xs font-extrabold uppercase tracking-wider text-accent-gold bg-black/40 backdrop-blur-md px-3 py-1 rounded-md w-fit">
                      {featuredPhoto.category[lang]}
                    </span>
                  )}
                  <p className="text-base sm:text-xl font-bold text-white leading-snug drop-shadow-xs">
                    {featuredPhoto.caption[lang]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Right: 2x2 Grid of Smaller Photos */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gridPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setSelectedIndex(index + 1)}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-100 group transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={`Foto galeri kegiatan kampung - ${photo.caption[lang]}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Mask & Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col gap-1 z-10">
                  {photo.category && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-accent-gold">
                      {photo.category[lang]}
                    </span>
                  )}
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug line-clamp-2 drop-shadow-xs">
                    {photo.caption[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && currentPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <Camera className="w-5 h-5 text-accent-gold" />
              <span className="text-sm font-bold tracking-wider uppercase">
                {lang === "en" ? `Photo ${selectedIndex + 1} of ${galleryPhotos.length}` : `Foto ${selectedIndex + 1} dari ${galleryPhotos.length}`}
              </span>
            </div>
            <button
              onClick={() => setSelectedIndex(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Photo Area with Left/Right Navigation */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <div className="relative w-full max-w-5xl h-full max-h-[75vh]">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.caption[lang]}
                fill
                priority
                sizes="100vw"
                className="object-contain rounded-xl"
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-white max-w-4xl mx-auto w-full border border-white/10">
            <div className="flex flex-col gap-1.5">
              {currentPhoto.category && (
                <span className="text-xs font-extrabold uppercase tracking-wider text-accent-gold">
                  {currentPhoto.category[lang]}
                </span>
              )}
              <h3 className="text-base sm:text-xl font-bold leading-snug">
                {currentPhoto.caption[lang]}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
