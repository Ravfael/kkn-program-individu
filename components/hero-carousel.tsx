"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroSlide {
  id: string;
  image: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref?: string;
}

const HERO_IMAGES = [
  "https://picsum.photos/1600/900?random=101",
  "https://picsum.photos/1600/900?random=102",
  "https://picsum.photos/1600/900?random=103",
];

export function HeroCarousel() {
  const t = useTranslations("hero");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    queueMicrotask(() => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    });

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // Auto cycling timer
  useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const slides: HeroSlide[] = [
    {
      id: "slide-1",
      image: HERO_IMAGES[0],
      ctaPrimaryHref: "#program",
      ctaSecondaryHref: "#tentang",
    },
    {
      id: "slide-2",
      image: HERO_IMAGES[1],
      ctaPrimaryHref: "#galeri",
      ctaSecondaryHref: "#faq",
    },
    {
      id: "slide-3",
      image: HERO_IMAGES[2],
      ctaPrimaryHref: "#kontak",
      ctaSecondaryHref: "#timeline",
    },
  ];

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-primary-navy">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="pl-0 basis-full">
              <div className="relative w-full h-[540px] sm:h-[580px] md:h-[620px] lg:h-[680px] flex items-center">
                {/* Background Image with Next Image fill */}
                <Image
                  src={slide.image}
                  alt={`Foto banner hero ${index + 1} - ${t(`slides.${index}.title` as any)}`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/95 via-primary-navy/80 to-primary-navy/40 md:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-transparent to-primary-navy/30 md:hidden" />

                {/* Overlaid Content Container */}
                <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl flex flex-col gap-4 sm:gap-6 text-left">
                    {/* Eyebrow Label */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-gold/20 border border-accent-gold/40 text-accent-gold text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md w-fit">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t(`slides.${index}.eyebrow` as any)}</span>
                    </div>

                    {/* Single Page H1 Heading (SEO-02) */}
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
                      {t(`slides.${index}.title` as any)}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
                      {t(`slides.${index}.subtitle` as any)}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        href={slide.ctaPrimaryHref}
                        className={cn(
                          buttonVariants({ variant: "default" }),
                          "bg-accent-gold hover:bg-yellow-400 text-primary-navy font-bold text-sm sm:text-base px-6 py-3 sm:py-3.5 rounded-xl shadow-lg transition-all duration-200 gap-2 group"
                        )}
                      >
                        <span>{t(`slides.${index}.ctaPrimaryText` as any)}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      {slide.ctaSecondaryHref && (
                        <Link
                          href={slide.ctaSecondaryHref}
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md font-semibold text-sm sm:text-base px-5 py-3 sm:py-3.5 rounded-xl transition-all duration-200"
                          )}
                        >
                          {t(`slides.${index}.ctaSecondaryText` as any)}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation Arrows & Dot Indicators Overlay */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Custom Dot Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  current === index
                    ? "w-8 bg-accent-gold shadow-sm"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Desktop Arrow Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
