"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Menu, Globe, PhoneCall, ChevronRight, Store, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === "id" ? "en" : "id";
    router.replace(pathname, { locale: nextLocale });
  };

  const navItems = [
    { label: t("home"), href: "/#hero" },
    { label: t("about"), href: "/#tentang" },
    { label: t("programs"), href: "/#program" },
    { label: t("gallery"), href: "/#galeri" },
    { label: t("contact"), href: "/#kontak" },
    {
      label: t("marketplace"),
      href: "/marketplace",
      isExternal: true,
    },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-gray-100" : "bg-white py-4 border-b border-gray-100"}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/#hero" className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-blue rounded-md">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200 overflow-hidden shrink-0 border border-gray-100">
            <Image src="/images/village/logo.webp" alt="Logo Desa" width={40} height={40} className="w-full h-full object-contain p-0.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl text-primary-navy leading-tight tracking-tight flex items-center gap-1.5">{t("brandName")}</span>
            <span className="text-[11px] font-medium text-text-muted tracking-wider uppercase">{t("subBrand")}</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) =>
            item.isExternal ? (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-sm font-semibold text-market-primary hover:text-white hover:bg-market-primary bg-amber-50/80 border border-market-primary/25 rounded-lg transition-all duration-150 inline-flex items-center gap-1.5 shadow-2xs group"
              >
                <Store className="w-4 h-4 text-market-primary group-hover:text-white transition-colors" />
                <span>{item.label}</span>
                <ExternalLink className="w-3 h-3 text-market-primary/70 group-hover:text-white transition-colors" />
              </Link>
            ) : (
              <Link key={item.label} href={item.href} className="px-3.5 py-2 text-sm font-medium text-primary-navy hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors duration-150">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop Right Actions: Language Switcher & Call CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-primary-navy hover:text-primary-blue bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-150 cursor-pointer"
            aria-label={t("selectLanguage")}
          >
            <Globe className="w-3.5 h-3.5 text-primary-blue" />
            <span className="uppercase">{locale}</span>
            <span className="text-[10px] text-text-muted">| {locale === "id" ? "EN" : "ID"}</span>
          </button>

          {/* Primary CTA */}
          <Link href="#kontak" className={cn(buttonVariants({ variant: "default" }), "bg-primary-blue hover:bg-primary-navy text-white font-semibold text-sm px-4 py-2 rounded-lg shadow-xs transition-all duration-200 gap-1.5")}>
            <PhoneCall className="w-4 h-4" />
            <span>{t("contactCta")}</span>
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Language Switcher */}
          <button onClick={toggleLanguage} className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-primary-navy bg-gray-100 rounded-full cursor-pointer uppercase" aria-label={t("selectLanguage")}>
            <Globe className="w-3.5 h-3.5 text-primary-blue" />
            <span>{locale}</span>
          </button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <button className="p-2 text-primary-navy hover:bg-gray-100 rounded-lg transition-colors cursor-pointer" aria-label="Open Navigation Menu">
                  <Menu className="w-6 h-6" />
                </button>
              }
            />
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between">
              <div>
                <SheetHeader className="p-0 pb-6 text-left border-b border-gray-100">
                  <SheetTitle className="flex items-center gap-2 text-primary-navy font-bold text-lg">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-xs overflow-hidden shrink-0 border border-gray-100">
                      <Image src="/images/village/logo.webp" alt="Logo Desa" width={32} height={32} className="w-full h-full object-contain p-0.5" />
                    </div>
                    <span>{t("brandName")}</span>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col gap-1 mt-6">
                  {navItems.map((item) => (
                    <SheetClose
                      key={item.label}
                      render={
                        item.isExternal ? (
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between px-4 py-3 text-base font-semibold text-market-primary bg-amber-50/80 rounded-xl transition-colors border border-market-primary/20"
                          >
                            <span className="flex items-center gap-2">
                              <Store className="w-4 h-4 text-market-primary" />
                              {item.label}
                            </span>
                            <ExternalLink className="w-4 h-4 text-market-primary/70" />
                          </Link>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between px-4 py-3 text-base font-medium text-primary-navy hover:text-primary-blue hover:bg-gray-50 rounded-xl transition-colors"
                          >
                            <span>{item.label}</span>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </Link>
                        )
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Sheet Footer Actions */}
              <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
                <div className="flex items-center justify-between px-2 text-xs text-text-muted">
                  <span>{t("selectLanguage")}</span>
                  <button onClick={toggleLanguage} className="flex items-center gap-1 font-semibold text-primary-blue bg-blue-50 px-2.5 py-1 rounded-full cursor-pointer uppercase">
                    <Globe className="w-3.5 h-3.5" />
                    <span>{locale === "id" ? "Bahasa Indonesia" : "English"}</span>
                  </button>
                </div>
                <SheetClose
                  render={
                    <Link
                      href="#kontak"
                      onClick={() => setIsOpen(false)}
                      className={cn(buttonVariants({ variant: "default" }), "w-full bg-primary-blue hover:bg-primary-navy text-white font-semibold py-2.5 rounded-xl shadow-xs gap-2 justify-center")}
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>{t("contactCta")}</span>
                    </Link>
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
