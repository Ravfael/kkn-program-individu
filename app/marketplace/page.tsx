"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Store, Tag, Sparkles, RefreshCw, ShoppingBag } from "lucide-react";
import { MarketplaceNavbar } from "@/components/marketplace/marketplace-navbar";
import { umkmSellers, products, Product, UMKMSeller } from "@/data/umkm";

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Semua" ||
      product.category.id === selectedCategory ||
      product.category.en === selectedCategory;

    const matchesSearch =
      product.name.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.id.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const generateWhatsAppUrl = (seller: UMKMSeller, product: Product) => {
    const formattedPrice = formatRupiah(product.price);
    const message = `Halo, saya tertarik dengan produk *${product.name.id}* seharga *${formattedPrice}* yang saya lihat di Pasar UMKM Desa Candisari. apakah masih ada?`;
    return `https://wa.me/${seller.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-market-bg">
      {/* Marketplace Top Navbar with Interactive State */}
      <MarketplaceNavbar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Area */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex-1">
        
        {/* Section Header / Intro Banner */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-market-primary/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-market-primary/10 text-market-primary text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Etalase Produk Unggulan Desa</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
              Produk UMKM Desa Candisari
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Nikmati aneka cemilan jamur organik, kopi sangrai lereng desa, kain batik tulis pewarna alami, serta kerajinan bambu binaan program KKN.
            </p>
          </div>

          <div className="text-xs font-medium text-slate-500 bg-white px-3.5 py-2 rounded-xl border border-market-primary/15 shadow-2xs shrink-0">
            Menampilkan <span className="font-bold text-market-primary">{filteredProducts.length}</span> dari {products.length} produk
          </div>
        </div>

        {/* 4-Column Product Grid (4 desktop, 2 tablet, 1 mobile) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const seller = umkmSellers.find((s) => s.id === product.umkmId) || umkmSellers[0];
              const formattedPrice = formatRupiah(product.price);
              const waUrl = generateWhatsAppUrl(seller, product);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-market-primary/15 hover:border-market-primary/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Product Image Area */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                      <Image
                        src={product.image}
                        alt={`Foto produk UMKM - ${product.name.id}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40" />

                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-market-secondary/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        <Tag className="w-3 h-3" />
                        {product.category.id}
                      </span>
                    </div>

                    {/* Product Details */}
                    <div className="p-4 sm:p-5 flex flex-col gap-2">
                      {/* Name */}
                      <h2 className="text-base font-bold text-slate-800 group-hover:text-market-primary transition-colors leading-snug line-clamp-2">
                        {product.name.id}
                      </h2>

                      {/* Description */}
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {product.description.id}
                      </p>

                      {/* Price */}
                      <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-lg font-extrabold text-market-primary">
                          {formattedPrice}
                        </span>
                        {product.unit && (
                          <span className="text-[11px] font-medium text-slate-400">
                            / {product.unit.id}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer Card Area: Seller Info & WhatsApp Order Button */}
                  <div className="p-4 sm:p-5 pt-0 flex flex-col gap-3">
                    {/* Seller Row */}
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 border border-market-primary/20">
                        <Image
                          src={seller.logo}
                          alt={seller.name.id}
                          fill
                          sizes="28px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-slate-700 truncate">
                          {seller.name.id}
                        </span>
                        <span className="text-[10px] text-slate-400 truncate">
                          Pemilik: {seller.ownerName.id}
                        </span>
                      </div>
                    </div>

                    {/* WhatsApp Click-to-Chat CTA Button */}
                    <Link
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-market-primary hover:bg-amber-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                      <span>Pesan via WhatsApp</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-market-primary/15 shadow-xs max-w-md mx-auto my-12 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-market-primary/10 text-market-primary flex items-center justify-center">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                Tidak ada produk ditemukan
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Tidak ada produk yang sesuai dengan kata kunci &ldquo;{searchQuery}&rdquo; atau kategori yang dipilih.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedCategory("Semua");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-market-primary text-white text-xs font-bold shadow-xs hover:bg-amber-800 transition-colors cursor-pointer mt-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filter</span>
            </button>
          </div>
        )}

        {/* Bottom Local Economy Footer Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-market-primary/15 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-market-secondary/10 text-market-secondary flex items-center justify-center shrink-0">
              <Store className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                Dukung Produk & UMKM Lokal Desa Candisari
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                Seluruh transaksi dilakukan secara langsung dengan warga pengrajin lokal tanpa perantara. Terima kasih telah mendukung perekonomian mandiri warga desa kami!
              </p>
            </div>
          </div>

          <Link
            href="/id#kontak"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-market-secondary text-white font-bold text-xs hover:bg-emerald-800 shadow-xs transition-colors shrink-0"
          >
            <span>Hubungi Posko KKN</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
