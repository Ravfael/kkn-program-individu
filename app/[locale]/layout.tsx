import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { villageProfile } from "@/data/village-profile";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// SEO-01 & SEO-06: generateMetadata per locale with hreflang alternates and OG image
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "id") as "id" | "en";
  const baseUrl = "https://desakampunginggris.id";

  const title = villageProfile.name[lang];
  const description = villageProfile.tagline[lang];

  /* TODO: replace with real village photo OG image later */
  const ogImageUrl = `${baseUrl}/images/og-image.jpg`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: `${title} | KKN Program`,
      template: `%s | ${title}`,
    },
    description: description,
    keywords: [
      "Kampung Inggris",
      "Desa Wisata Edukasi",
      "KKN",
      "Pengabdian Masyarakat",
      "Pendidikan Bahasa Inggris",
      "Kediri",
    ],
    authors: [{ name: "Tim Mahasiswa KKN" }],
    creator: "Mahasiswa KKN",
    publisher: title,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        id: `${baseUrl}/id`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: title,
      description: description,
      url: `${baseUrl}/${locale}`,
      siteName: title,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `Open Graph Image - ${title}`,
        },
      ],
      locale: locale === "en" ? "en_US" : "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/images/village/logo.webp",
      shortcut: "/images/village/logo.webp",
      apple: "/images/village/logo.webp",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const lang = (locale === "en" ? "en" : "id") as "id" | "en";

  // SEO-05: JSON-LD Structured Data for EducationalOrganization / LocalBusiness entity
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: villageProfile.name[lang],
    description: villageProfile.tagline[lang],
    url: `https://desakampunginggris.id/${locale}`,
    telephone: villageProfile.contact.phone,
    email: villageProfile.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: villageProfile.contact.address[lang],
      addressLocality: villageProfile.subdistrict[lang],
      addressRegion: villageProfile.province[lang],
      postalCode: "64212",
      addressCountry: "ID",
    },
    sameAs: villageProfile.socials.map((s) => s.url),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}
