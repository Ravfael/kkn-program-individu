import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { MarketplaceNavbar } from "@/components/marketplace/marketplace-navbar";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pasar UMKM Desa Candisari | Marketplace Produk Lokal",
  description: "Marketplace produk UMKM unggulan Desa Candisari. Temukan olahan jamur, batik tulis, kopi lereng, dan kerajinan bambu binaan KKN.",
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${poppins.variable} font-poppins min-h-screen bg-market-bg text-slate-800 antialiased selection:bg-market-primary selection:text-white flex flex-col`}
    >
      <MarketplaceNavbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
