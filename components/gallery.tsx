import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Maximize2, Camera } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { galleryPhotos } from "@/data/gallery";

export async function Gallery({ locale = "id" }: { locale?: string }) {
  const t = await getTranslations({ locale, namespace: "gallery" });
  const lang = (locale === "en" ? "en" : "id") as "id" | "en";

  const featuredPhoto = galleryPhotos[0];
  const gridPhotos = galleryPhotos.slice(1, 5);

  return (
    <section id="galeri" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Row with Top-Right "Lihat Semua Foto" Link */}
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
            href="#galeri"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-primary-navy hover:text-primary-blue font-bold text-sm shadow-xs transition-all duration-200 shrink-0 w-fit group"
          >
            <Camera className="w-4 h-4 text-primary-blue" />
            <span>{t("viewAll")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Desktop Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Large Featured Photo */}
          {featuredPhoto && (
            <div className="lg:col-span-6 flex">
              <div className="relative w-full h-[360px] sm:h-[420px] lg:h-auto min-h-[420px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 group transition-all duration-300">
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
            {gridPhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-100 group transition-all duration-300"
              >
                <Image
                  src={photo.src}
                  alt={`Foto galeri kegiatan desa - ${photo.caption[lang]}`}
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
    </section>
  );
}

export default Gallery;
