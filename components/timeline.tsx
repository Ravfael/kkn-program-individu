import React from "react";
import { getTranslations } from "next-intl/server";
import { Clock, CheckCircle2, Calendar } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { timelineMilestones } from "@/data/timeline";

export async function Timeline({ locale = "id" }: { locale?: string }) {
  const t = await getTranslations({ locale, namespace: "timeline" });
  const lang = (locale === "en" ? "en" : "id") as "id" | "en";

  return (
    <section id="timeline" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 max-w-3xl mb-12 sm:mb-16">
          <Eyebrow variant="blue">{t("eyebrow")}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-navy tracking-tight leading-tight">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Scroll Affordance Hint */}
        <div className="flex items-center justify-between text-xs font-semibold text-text-muted mb-4 px-1">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary-blue" />
            <span>{t("scrollHint")}</span>
          </span>
          <span className="hidden sm:inline-block text-[11px] bg-slate-100 px-2.5 py-1 rounded-md text-primary-navy font-mono">
            CSS Scroll-Snap
          </span>
        </div>

        {/* Horizontal Snap Scroll Container */}
        <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-6 pb-6 pt-2 no-scrollbar sm:scrollbar-thin sm:scrollbar-thumb-gray-200">
          {timelineMilestones.map((item, index) => (
            <div
              key={item.id}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] max-w-[350px] snap-start flex-none bg-bg-muted hover:bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 hover:border-primary-blue/30 shadow-2xs hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
            >
              {/* Top Accent Line & Gold Marker Dot */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-accent-gold border-2 border-white shadow-xs inline-block group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-blue bg-blue-50 px-2.5 py-0.5 rounded-md">
                    {item.date[lang]}
                  </span>
                </div>
                
                {/* Milestone Step Number */}
                <span className="text-xs font-extrabold text-slate-400 group-hover:text-primary-blue transition-colors">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2 my-2">
                <h3 className="text-lg sm:text-xl font-bold text-primary-navy group-hover:text-primary-blue transition-colors leading-snug">
                  {item.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>

              {/* Footer Status Badge */}
              <div className="pt-4 mt-2 border-t border-gray-200/60 flex items-center justify-between text-xs">
                {item.status === "completed" && (
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {t("statusCompleted")}
                  </span>
                )}
                {item.status === "in-progress" && (
                  <span className="inline-flex items-center gap-1 font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    {t("statusInProgress")}
                  </span>
                )}
                {item.status === "upcoming" && (
                  <span className="inline-flex items-center gap-1 font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" />
                    {t("statusUpcoming")}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Timeline;
