import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/navbar";
import HeroCarousel from "@/components/hero-carousel";
import BrandStory from "@/components/brand-story";
import ProgramsGrid from "@/components/programs-grid";
import Timeline from "@/components/timeline";
import NewsSection from "@/components/news-section";
import Gallery from "@/components/gallery";
import FAQAccordion from "@/components/faq-accordion";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-bg-muted flex flex-col font-sans" suppressHydrationWarning>
      <Navbar />
      <HeroCarousel />
      <BrandStory />
      <ProgramsGrid locale={locale} />
      <Timeline locale={locale} />
      <NewsSection locale={locale} />
      <Gallery locale={locale} />
      <FAQAccordion locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}
