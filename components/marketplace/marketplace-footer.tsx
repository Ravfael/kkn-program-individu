import React from "react";
import Link from "next/link";
import { Store, MessageCircle, ArrowLeft, Heart } from "lucide-react";
import { villageProfile } from "@/data/village-profile";

export function MarketplaceFooter() {
  const categories = ["Perikanan & Pangan", "Makanan & Camilan", "Jasa & Layanan"];

  const waNumber = villageProfile.contact.whatsapp?.replace(/[^0-9]/g, "") || "6281234567890";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Halo Tim Posko KKN Desa Candisari, saya ingin bertanya mengenai program pembinaan Pasar UMKM.")}`;

  return (
    <footer className="bg-white text-slate-700 border-t border-market-primary/15 font-poppins mt-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* 3-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col gap-3">
            <Link href="/marketplace" className="flex items-center gap-2.5 w-fit group focus:outline-hidden">
              <div className="w-10 h-10 rounded-2xl bg-market-primary text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
                <Store className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-market-primary leading-tight tracking-tight">Pasar UMKM</span>
                <span className="text-xs font-bold text-market-secondary tracking-wide">Desa Candisari</span>
              </div>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">Etalase produk UMKM unggulan warga Desa Candisari, dibina secara berkelanjutan melalui program pengabdian masyarakat KKN.</p>
          </div>

          {/* Column 2: Categories */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-market-primary border-b border-market-primary/15 pb-1.5 w-fit">Kategori Produk</h4>
            <ul className="flex flex-col gap-2 text-xs font-semibold text-slate-600">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link href="/marketplace" className="hover:text-market-primary transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-market-secondary/50 inline-block"></span>
                    <span>{cat}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-market-primary border-b border-market-primary/15 pb-1.5 w-fit">Tautan & Kontak</h4>
            <div className="flex flex-col gap-3">
              <Link href="/id" className="text-xs font-bold text-market-secondary hover:text-market-primary transition-colors flex items-center gap-1.5 w-fit">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali ke Web Utama Landing Page</span>
              </Link>

              <Link
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-market-primary hover:bg-amber-800 text-white font-bold text-xs shadow-xs transition-colors w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi Posko KKN</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-market-primary/10 my-8" />

        {/* Bottom Copyright & Credit Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-slate-500">
          <p>&copy; {new Date().getFullYear()} Pasar UMKM Desa Candisari — Program KKN.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-market-primary fill-current inline-block" />
            <span>Oleh Unit 42 </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MarketplaceFooter;
