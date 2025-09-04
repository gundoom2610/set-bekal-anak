"use client"

import { ProductSchema } from "@/components/json-ld"
import { products, siteConfig } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PromosiClient() {
  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan ${productName}. Bisa info harga dan ketersediaannya?`,
    )
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <>
      <ProductSchema products={products} />

      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Lagi Cari <span className="text-pink-600">Set Bekal Anak</span>?
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 text-pretty">
              Dapatkan penawaran terbaik hanya di sini!
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Promo spesial set bekal anak dengan berbagai pilihan karakter lucu, bundle hemat, dan harga terjangkau
              untuk semua keluarga.
            </p>

            <div className="bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-300 rounded-lg p-4 inline-block mb-8 shadow-lg">
              <p className="text-pink-800 font-semibold">🎉 PROMO SPESIAL: Beli 2 Gratis Ongkir!</p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pilihan Set Bekal Anak Terlengkap</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-pink-100 hover:scale-105"
                >
                  <div className="aspect-square relative bg-gradient-to-br from-pink-50 to-rose-50">
                    <Image
                      src={product.image || "/placeholder.svg?height=300&width=300&query=set bekal anak lucu"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                    <Button
                      onClick={() => handleWhatsAppClick(product.name)}
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg"
                    >
                      Order via WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Promo Benefits */}
          <div className="bg-gradient-to-r from-pink-100/80 to-rose-100/80 backdrop-blur-sm rounded-xl p-8 mb-12 border border-pink-200 shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Keuntungan Berbelanja Set Bekal Anak di Sini
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <span className="text-white text-xl">💰</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Harga Terjangkau</h3>
                <p className="text-sm text-gray-600">Bundle hemat dengan harga bersahabat</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <span className="text-white text-xl">🚚</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Gratis Ongkir</h3>
                <p className="text-sm text-gray-600">Pembelian minimal 2 set bekal</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <span className="text-white text-xl">⭐</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Kualitas Terjamin</h3>
                <p className="text-sm text-gray-600">Bahan food grade dan tahan lama</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <span className="text-white text-xl">🎁</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Bonus Menarik</h3>
                <p className="text-sm text-gray-600">Peralatan makan gratis setiap pembelian</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-pink-100/80 to-rose-100/80 backdrop-blur-sm rounded-xl p-8 border border-pink-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Jangan Sampai Kehabisan!</h2>
            <p className="text-gray-700 mb-6">
              Stok terbatas untuk promo spesial ini. Pesan sekarang dan dapatkan set bekal anak impian dengan harga
              terbaik!
            </p>
            <Button
              onClick={() => handleWhatsAppClick("Promo Set Bekal Anak")}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg shadow-lg"
            >
              Pesan Sekarang via WhatsApp
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
