"use client";

import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { MessageCircle, ArrowRight, HelpCircle } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { faqItems } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FAQAccordion({ locale }: { locale?: string }) {
  const t = useTranslations("faqAccordion");
  const currentLocale = useLocale();
  const lang = ((locale || currentLocale) === "en" ? "en" : "id") as "id" | "en";

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-bg-muted relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto mb-12 sm:mb-16">
          <Eyebrow variant="blue">{t("eyebrow")}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-navy tracking-tight leading-tight">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Centered Accordion Box (max-w-3xl) */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-gray-100">
          <Accordion defaultValue={["faq-1"]} className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="py-1 border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger className="hover:no-underline py-4 text-left group flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 pr-2">
                    {/* Numbered Circular Badge */}
                    <span className="w-8 h-8 rounded-full bg-blue-50 text-primary-blue font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                      0{index + 1}
                    </span>
                    {/* Question Text */}
                    <span className="text-base sm:text-lg font-bold text-primary-navy group-hover:text-primary-blue transition-colors">
                      {item.question[lang]}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pt-1 pb-4 pl-11 pr-4 text-sm sm:text-base text-text-muted leading-relaxed">
                  {item.answer[lang]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Prompt / Contact CTA Box */}
        <div className="mt-10 max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-blue flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-primary-navy">
                {t("contactPromptTitle")}
              </h4>
              <p className="text-xs sm:text-sm text-text-muted">
                {t("contactPromptSub")}
              </p>
            </div>
          </div>

          <Link
            href="#kontak"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-primary-blue hover:bg-primary-navy text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all duration-200 gap-2 shrink-0"
            )}
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t("contactBtn")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FAQAccordion;
