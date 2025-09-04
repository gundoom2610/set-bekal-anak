"use client"

import { OrganizationSchema } from "@/components/json-ld"
import { siteConfig, products } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ClientHomePage() {
  const handleWhatsAppClick = (productName?: string) => {
    const message = productName
      ? encodeURIComponent(`Halo, saya tertarik dengan ${productName}. Bisa info lebih lanjut?`)
      : encodeURIComponent("Halo, saya tertarik dengan set bekal anak yang tersedia. Bisa info lebih lanjut?")
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, "_blank")
  }

  const handleShopeeClick = () => {
    window.open(siteConfig.shopeeUrl, "_blank")
  }

  const featuredProducts = products.slice(0, 6)

  return (
    <>
      <OrganizationSchema name={siteConfig.name} url={siteConfig.url} description={siteConfig.description} />

      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Lagi Cari <span className="text-pink-600">Set Bekal Anak</span> Terbaik?
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 text-pretty">
              Koleksi lengkap set bekal anak dengan 15+ pilihan karakter lucu, aman, dan berkualitas tinggi untuk si
              kecil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleWhatsAppClick()}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg shadow-lg"
              >
                💬 Chat WhatsApp
              </Button>
              <Button
                onClick={handleShopeeClick}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg shadow-lg"
              >
                🛒 Beli di Shopee
              </Button>
            </div>
          </div>

          {/* Featured Products Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Koleksi <span className="text-pink-600">Set Bekal Anak</span> Terpopuler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-pink-100 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleWhatsAppClick(product.name)}
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xs"
                      >
                        WhatsApp
                      </Button>
                      <Button
                        onClick={handleShopeeClick}
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs"
                      >
                        Shopee
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                onClick={() => (window.location.href = "/promosi")}
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg shadow-lg"
              >
                Lihat Semua Produk ({products.length} Pilihan)
              </Button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 bg-white/70 backdrop-blur-sm border-pink-100 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Desain Lucu</h3>
                <p className="text-gray-600">
                  Set bekal anak dengan berbagai karakter favorit yang membuat waktu makan jadi menyenangkan.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white/70 backdrop-blur-sm border-pink-100 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Aman & Praktis</h3>
                <p className="text-gray-600">
                  Terbuat dari bahan food grade yang aman untuk anak dan mudah dibersihkan setelah digunakan.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white/70 backdrop-blur-sm border-pink-100 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Harga Terjangkau</h3>
                <p className="text-gray-600">
                  Dapatkan set bekal anak berkualitas dengan harga yang ramah di kantong para orang tua.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Content Section */}
          <div className="prose prose-lg mx-auto text-gray-700 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mengapa Memilih Set Bekal Anak dari Kami?</h2>

            <p className="mb-4">
              <strong>Set bekal anak</strong> berkualitas tinggi dengan 15+ pilihan karakter favorit anak-anak
              Indonesia. Dari unicorn, superhero, princess, hingga karakter anime populer - semua tersedia dengan
              kualitas terjamin dan harga terjangkau.
            </p>

            <p className="mb-4">
              Setiap <strong>set bekal anak</strong> dalam koleksi kami telah teruji food grade dan aman untuk kesehatan
              si kecil. Dilengkapi botol minum anti tumpah, kotak makan dengan kompartemen terpisah, dan peralatan makan
              yang ergonomis untuk tangan anak.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">15+ Pilihan Set Bekal Anak Terlengkap:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>Karakter Populer:</strong> Unicorn, Princess, Superhero, Frozen, Hello Kitty, Doraemon
              </li>
              <li>
                <strong>Tema Favorit Anak:</strong> Dinosaurus, Mobil Balap, Spiderman, Minions, Panda, Anime
              </li>
              <li>
                <strong>Material Premium:</strong> Stainless Steel anti karat, Eco Friendly ramah lingkungan
              </li>
              <li>
                <strong>Teknologi Canggih:</strong> Thermal insulation menjaga makanan tetap hangat
              </li>
              <li>
                <strong>Keamanan Terjamin:</strong> Bahan food grade bebas BPA dan zat berbahaya
              </li>
              <li>
                <strong>Harga Terjangkau:</strong> Mulai dari harga ekonomis hingga premium
              </li>
            </ul>

            <p className="mb-6">
              Investasi terbaik untuk kebiasaan makan sehat anak di sekolah. Pilih <strong>set bekal anak</strong>{" "}
              favorit dan buat waktu makan si kecil jadi lebih menyenangkan setiap hari!
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-pink-100/80 to-rose-100/80 backdrop-blur-sm rounded-xl p-8 border border-pink-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Siap Pesan Set Bekal Anak Favorit?</h2>
            <p className="text-gray-700 mb-6">
              Dapatkan set bekal anak berkualitas dengan 15+ pilihan karakter lucu. Gratis konsultasi via WhatsApp atau
              langsung checkout di Shopee!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleWhatsAppClick()}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg shadow-lg"
              >
                💬 Konsultasi Gratis WhatsApp
              </Button>
              <Button
                onClick={handleShopeeClick}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg shadow-lg"
              >
                🛒 Checkout Langsung Shopee
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
