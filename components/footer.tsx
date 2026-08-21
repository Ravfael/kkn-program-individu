import React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { GraduationCap, MapPin, Phone, Mail, Globe, MessageCircle, Share2 } from "lucide-react";
import { villageProfile } from "@/data/village-profile";

export async function Footer({ locale = "id" }: { locale?: string }) {
  const tFooter = await getTranslations({ locale, namespace: "footer" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const lang = (locale === "en" ? "en" : "id") as "id" | "en";

  const { name, tagline, contact, socials } = villageProfile;

  return (
    <footer className="bg-accent-gold text-primary-navy border-t border-amber-300 relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* 4-Column Desktop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Description (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link
              href="#hero"
              className="flex items-center gap-2.5 w-fit group focus:outline-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-navy flex items-center justify-center text-accent-gold shadow-xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl text-primary-navy leading-tight tracking-tight">
                  {tNav("brandName")}
                </span>
                <span className="text-[11px] font-bold text-primary-navy/80 tracking-wider uppercase">
                  {tNav("subBrand")}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-medium text-primary-navy/90 leading-relaxed max-w-sm">
              {name[lang]} — {tagline[lang]}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {socials.map((social) => (
                <Link
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="w-9 h-9 rounded-xl bg-primary-navy text-accent-gold hover:bg-primary-blue hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                >
                  {social.platform === "WhatsApp" ? (
                    <MessageCircle className="w-4 h-4" />
                  ) : social.platform === "Instagram" ? (
                    <Share2 className="w-4 h-4" />
                  ) : (
                    <Globe className="w-4 h-4" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Info (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-primary-navy border-b border-primary-navy/20 pb-2 w-fit">
              {tFooter("contactTitle")}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-medium text-primary-navy/90">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{contact.address[lang]}</span>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 hover:underline transition-all"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 hover:underline transition-all"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{contact.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Program Links (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-primary-navy border-b border-primary-navy/20 pb-2 w-fit">
              {tFooter("programTitle")}
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm font-medium text-primary-navy/90">
              <li>
                <Link href="#hero" className="hover:underline transition-all">
                  {tNav("home")}
                </Link>
              </li>
              <li>
                <Link href="#tentang" className="hover:underline transition-all">
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link href="#program" className="hover:underline transition-all">
                  {tNav("programs")}
                </Link>
              </li>
              <li>
                <Link href="#galeri" className="hover:underline transition-all">
                  {tNav("gallery")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Information Links (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-primary-navy border-b border-primary-navy/20 pb-2 w-fit">
              {tFooter("infoTitle")}
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm font-medium text-primary-navy/90">
              <li>
                <Link href="#timeline" className="hover:underline transition-all">
                  {tFooter("timelineLink")}
                </Link>
              </li>
              <li>
                <Link href="#news" className="hover:underline transition-all">
                  {tFooter("newsLink")}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:underline transition-all">
                  {tFooter("faqLink")}
                </Link>
              </li>
              <li>
                <Link href="#kontak" className="hover:underline transition-all">
                  {tFooter("locationLink")}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-primary-navy/20 my-8" />

        {/* Bottom Copyright & Credit Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-primary-navy/90">
          <p>
            &copy; {new Date().getFullYear()} KKN Kampung Inggris Pare. {tFooter("copyright")}
          </p>
          <p>
            {tFooter("credit")}
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
