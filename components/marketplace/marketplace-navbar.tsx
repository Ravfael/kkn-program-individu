"use client";

import React from "react";
import Link from "next/link";
import { Search, Store, ArrowLeft, ShoppingBag, SlidersHorizontal, X } from "lucide-react";

export interface MarketplaceNavbarProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export function MarketplaceNavbar({
  selectedCategory = "Semua",
  onSelectCategory,
  searchQuery = "",
  onSearchChange,
}: MarketplaceNavbarProps) {
  const categories = [
    "Semua",
    "Makanan & Camilan",
    "Pakaian & Batik",
    "Minuman & Kopi",
    "Kerajinan",
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-market-bg/95 backdrop-blur-md border-b border-market-primary/20 shadow-xs font-poppins">
      {/* Top Announcement Banner */}
      <div className="bg-market-primary text-white text-xs font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
        <span>Pesan langsung dari warga & pengrajin lokal Desa Candisari via WhatsApp!</span>
      </div>

      {/* Main Navbar Container */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link
              href="/marketplace"
              className="flex items-center gap-3 group focus:outline-hidden"
            >
              <div className="w-11 h-11 rounded-2xl bg-market-primary text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
                <Store className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-market-primary leading-tight tracking-tight">
                  Pasar UMKM
                </span>
                <span className="text-xs font-semibold text-market-secondary tracking-wide">
                  Desa Candisari
                </span>
              </div>
            </Link>

            {/* Back to main site link (Mobile) */}
            <Link
              href="/id"
              className="md:hidden inline-flex items-center gap-1 text-xs font-semibold text-market-secondary hover:text-market-primary bg-white px-3 py-1.5 rounded-full border border-market-secondary/20 shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Web Utama</span>
            </Link>
          </div>

          {/* Search Bar Input */}
          <div className="w-full md:max-w-md relative flex items-center">
            <Search className="w-4 h-4 text-market-secondary absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Cari produk kerajinan, kopi, batik, jamur..."
              className="w-full pl-10 pr-9 py-2 text-sm bg-white border border-market-primary/20 rounded-full focus:outline-hidden focus:ring-2 focus:ring-market-primary/40 focus:border-market-primary transition-all text-slate-800 placeholder:text-slate-400 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange?.("")}
                className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Desktop Right Actions: Back to Landing Page */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/id"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-market-secondary hover:text-market-primary bg-white hover:bg-white/80 border border-market-secondary/20 shadow-2xs transition-all duration-150"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Web Utama</span>
            </Link>
          </div>

        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-1 no-scrollbar border-t border-market-primary/10 mt-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-market-secondary pr-2 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Kategori:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory?.(category)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                selectedCategory === category
                  ? "bg-market-primary text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-market-primary/10 border border-market-primary/15"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

      </div>
    </header>
  );
}

export default MarketplaceNavbar;
