import React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { villageProfile } from "@/data/village-profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export async function ContactSection({ locale = "id" }: { locale?: string }) {
  const t = await getTranslations({ locale, namespace: "contactSection" });
  const lang = (locale === "en" ? "en" : "id") as "id" | "en";

  const { contact } = villageProfile;

  return (
    <section id="kontak" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
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

        {/* Two-Column Grid: Map (60% ~ 7 cols) & Contact Info Card (40% ~ 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Embedded Google Maps Iframe (~60% width) */}
          <div className="lg:col-span-7 flex">
            {/* TODO: replace with real village coordinates */}
            <div className="w-full h-full min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden shadow-xs border border-gray-100 relative bg-slate-100">
              <iframe
                src={villageProfile.locationMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Posko KKN Kampung Inggris"
                className="w-full h-full min-h-[380px] sm:min-h-[460px]"
              />
            </div>
          </div>

          {/* Right Column: Contact Info Card (~40% width) */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-gray-100 flex flex-col justify-between gap-6">
              
              {/* Contact Information List */}
              <div className="flex flex-col gap-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-blue flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-1">
                      {t("addressTitle")}
                    </h4>
                    <p className="text-sm font-semibold text-primary-navy leading-relaxed">
                      {contact.address[lang]}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-1">
                      {t("phoneTitle")}
                    </h4>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-sm font-semibold text-primary-navy hover:text-primary-blue transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-1">
                      {t("emailTitle")}
                    </h4>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-semibold text-primary-navy hover:text-primary-blue transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-1">
                      {t("hoursTitle")}
                    </h4>
                    <p className="text-sm font-semibold text-primary-navy">
                      {contact.operatingHours[lang]}
                    </p>
                  </div>
                </div>

              </div>

              {/* Dark Navy Callout Box (Respons Cepat Pattern) */}
              <div className="bg-primary-navy text-white rounded-xl p-5 shadow-md border border-blue-900/50 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-accent-gold font-bold text-xs uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>{t("fastResponseTitle")}</span>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">
                    {t("fastResponseQuestion")}
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t("fastResponseDesc")}
                  </p>
                </div>

                {contact.whatsapp && (
                  <Link
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "bg-accent-gold hover:bg-yellow-400 text-primary-navy font-bold text-xs px-4 py-2.5 rounded-lg shadow-xs transition-all gap-1.5 justify-center w-full mt-1"
                    )}
                  >
                    <span>{t("whatsappBtn")}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;
