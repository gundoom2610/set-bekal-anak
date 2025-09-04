"use client"

import { OrganizationSchema } from "@/components/json-ld"
import { siteConfig, products } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Star, Shield, Heart, Truck, MessageCircle, ShoppingBag, Eye, ArrowRight } from "lucide-react"

export default function ClientHomePage() {
  const handleWhatsAppClick = (productName?: string) => {
    const message = productName
      ? encodeURIComponent(`Halo, saya tertarik dengan set bekal anak ${productName}. Bisa info harga dan stok?`)
      : encodeURIComponent("Halo, saya tertarik dengan set bekal anak yang tersedia. Bisa info harga dan katalog lengkap?")
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, "_blank")
  }

  const handleShopeeClick = () => {
    window.open(siteConfig.shopeeUrl, "_blank")
  }

  // Enhanced structured data for SEO with all products
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.name,
        "url": siteConfig.url,
        "description": siteConfig.description,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.whatsappNumber,
          "contactType": "customer service"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": "Set Bekal Anak Terbaik",
        "description": "Jual set bekal anak berkualitas dengan 15+ karakter lucu",
        "publisher": {
          "@id": `${siteConfig.url}/#organization`
        }
      },
      {
        "@type": "ItemList",
        "name": "Koleksi Set Bekal Anak Lengkap",
        "description": "Daftar lengkap set bekal anak dengan berbagai karakter menarik",
        "itemListElement": products.map((product, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "image": product.image,
            "category": "Set Bekal Anak",
            "brand": siteConfig.name,
            "url": `${siteConfig.url}/produk/${product.slug || product.name.toLowerCase().replace(/\s+/g, '-')}`
          }
        }))
      }
    ]
  }

  return (
    <>
      {/* Enhanced SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Additional meta tags for SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteConfig.name} />
      <meta name="geo.region" content="ID" />
      <meta name="geo.country" content="Indonesia" />
      <meta name="keywords" content="set bekal anak, lunch box anak, kotak bekal sekolah, botol minum anak, peralatan makan anak, karakter lucu, food grade, anti tumpah" />
      <link rel="canonical" href={siteConfig.url} />

      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
        {/* Enhanced Hero Section with better SEO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5" />
          <div className="container mx-auto px-4 py-16 max-w-7xl relative">
            <div className="text-center mb-16">
              {/* SEO optimized headings */}
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Jual <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Set Bekal Anak</span> 
                <br className="hidden md:block" />Terbaik Indonesia
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Koleksi lengkap <strong>set bekal anak</strong> dengan {products.length}+ pilihan karakter lucu, 
                100% food grade, anti tumpah, dan harga terjangkau. Gratis ongkir seluruh Indonesia!
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>100% Food Grade</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-500" />
                  <span>Gratis Ongkir</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>1000+ Pelanggan Puas</span>
                </div>
              </div>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => handleWhatsAppClick()}
                  size="lg"
                  className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Konsultasi Gratis WhatsApp
                </Button>
                <Button
                  onClick={handleShopeeClick}
                  size="lg"
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <ShoppingBag className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Beli Langsung di Shopee
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-16 max-w-7xl">
  {/* Shopee Trust Section - Mobile Responsive */}
  <section className="mb-12 md:mb-20 px-4 sm:px-6 lg:px-8">
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-orange-200">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
          Sudah <span className="text-orange-600">Terpercaya di Shopee</span> 🏆
        </h2>
        
        {/* Screenshot 16:9 - Fully Responsive */}
        <div className="relative w-full max-w-4xl mx-auto mb-6 md:mb-8">
          <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden shadow-lg md:shadow-2xl border-2 md:border-4 border-white">
            <Image
              src="/lipink2003-shopee.png"
              alt="Screenshot Toko Shopee Set Bekal Anak - 5000+ Terjual dengan Rating Tinggi"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
              priority
            />
            {/* Overlay badge - Responsive */}
            <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-orange-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
              ⭐ 4.9/5 Rating
            </div>
          </div>
        </div>

        {/* Stats Grid - Mobile First Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-lg md:rounded-xl shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">5000+</div>
            <p className="text-gray-700 font-medium text-sm sm:text-base">Set Bekal Terjual</p>
          </div>
          <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-lg md:rounded-xl shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">4.9⭐</div>
            <p className="text-gray-700 font-medium text-sm sm:text-base">Rating Pelanggan</p>
          </div>
          <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-lg md:rounded-xl shadow-md sm:col-span-2 md:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">1500+</div>
            <p className="text-gray-700 font-medium text-sm sm:text-base">Review Positif</p>
          </div>
        </div>

        {/* Description Text - Mobile Optimized */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          Kami sudah <strong>terpercaya di Shopee</strong> dengan <strong>5000+ set bekal terjual</strong> dan 
          <strong> anak-anak senang</strong> dengan produk kami! Bergabunglah dengan ribuan orang tua yang 
          sudah merasakan kualitas terbaik set bekal anak dari toko kami.
        </p>

        {/* CTA Button - Mobile Responsive */}
        <Button
          onClick={handleShopeeClick}
          size="lg"
          className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
        >
          <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
          <span className="text-sm sm:text-base md:text-lg">Checkout Barang Kami di Shopee</span>
        </Button>

        {/* Features Text - Mobile Friendly */}
        <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 px-2 leading-relaxed">
          🚚 Gratis ongkir • ⚡ Pengiriman cepat • 💝 Barang original • 🔒 Garansi toko
        </p>
      </div>
    </div>
  </section>

          {/* Complete Products Collection Section */}
          <section id="produk" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Koleksi Lengkap <span className="text-pink-600">Set Bekal Anak</span> Terbaik
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Temukan semua {products.length} pilihan set bekal anak dengan karakter favorit si kecil. 
                Klik setiap produk untuk melihat detail lengkap, spesifikasi, dan review pelanggan.
              </p>
            </div>
            
            {/* Enhanced product grid showing ALL products with links to individual pages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => {
                const productSlug = product.slug || product.name.toLowerCase().replace(/\s+/g, '-')
                
                return (
                  <Card
                    key={product.id}
                    className="group hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-lg overflow-hidden transform hover:-translate-y-2"
                  >
                    <Link href={`/produk/${productSlug}`} className="block">
                      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={`${product.name} - Karakter lucu untuk sekolah dengan lunch box, botol minum, dan peralatan makan lengkap`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs font-medium">4.9</span>
                          </div>
                        </div>
                        {/* Product category badge */}
                        <div className="absolute top-3 left-3 bg-pink-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                          Set Lengkap
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-medium flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            Lihat Detail
                          </div>
                        </div>
                      </div>
                    </Link>
                    
                    <CardContent className="p-5">
                      <Link href={`/produk/${productSlug}`}>
                        <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-1 group-hover:text-pink-600 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      
                      {/* Enhanced shorter description with read more */}
                      <div className="text-gray-600 text-sm mb-4 space-y-2">
                        <p className="line-clamp-2 leading-relaxed mb-2">
                          {product.description}
                        </p>
                        <Link 
                          href={`/produk/${productSlug}`}
                          className="text-pink-600 hover:text-pink-700 text-xs font-medium flex items-center gap-1"
                        >
                          Baca selengkapnya <ArrowRight className="w-3 h-3" />
                        </Link>
                        
                        {/* Key features preview */}
                        <div className="text-xs text-gray-500 space-y-1 mt-3">
                          <div className="flex items-center gap-1">
                            <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                            <span>Lunch box anti bocor + botol minum</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                            <span>Sendok garpu + tas carrier matching</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced features badges */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                          Food Grade
                        </span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                          Anti Bocor
                        </span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                          BPA Free
                        </span>
                      </div>

                      <div className="space-y-2">
                        {/* View Detail Button */}
                        <Link href={`/produk/${productSlug}`} className="block mb-2">
                          <Button
                            size="sm"
                            className="w-full bg-pink-500 hover:bg-pink-600 text-white transition-colors duration-300 text-xs py-2"
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            Lihat Detail & Review
                          </Button>
                        </Link>
                        
                        {/* Action buttons */}
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleWhatsAppClick(product.name)}
                            size="sm"
                            className="flex-1 bg-green-500 hover:bg-green-600 text-white transition-colors duration-300 text-xs py-2"
                          >
                            <MessageCircle className="w-3 h-3 mr-1" />
                            WhatsApp
                          </Button>
                          <Button
                            onClick={handleShopeeClick}
                            size="sm"
                            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300 text-xs py-2"
                          >
                            <ShoppingBag className="w-3 h-3 mr-1" />
                            Shopee
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            
            {/* SEO Content about product variety */}
            <div className="mt-12 text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mengapa Harus Lihat Detail Setiap Produk?
              </h3>
              <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Setiap <strong>set bekal anak</strong> memiliki keunikan dan spesifikasi khusus. Dengan mengklik detail produk, 
                Anda akan mendapatkan informasi lengkap tentang isi paket, ukuran, material, cara perawatan, dan review 
                dari orang tua lain yang sudah membeli. Ini membantu Anda memilih set bekal yang paling sesuai dengan 
                karakter dan kebutuhan si kecil.
              </p>
            </div>
          </section>

          {/* Enhanced Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Mengapa Pilih Set Bekal Anak dari Kami?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Lebih dari 1000 orang tua telah mempercayai produk kami untuk kebutuhan bekal sekolah si kecil.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group text-center p-8 bg-gradient-to-br from-white to-pink-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="pt-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🍱</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{products.length}+ Karakter Lucu</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Unicorn, Princess, Superhero, Frozen, Hello Kitty, Doraemon, dan karakter favorit lainnya. 
                    Membuat waktu makan jadi menyenangkan dan anak semangat sekolah! Setiap produk memiliki halaman detail tersendiri.
                  </p>
                </CardContent>
              </Card>

              <Card className="group text-center p-8 bg-gradient-to-br from-white to-green-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="pt-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">100% Food Grade</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Terbuat dari bahan berkualitas tinggi, bebas BPA, anti bocor, mudah dibersihkan. 
                    Aman untuk kesehatan anak setiap hari dengan sertifikat internasional.
                  </p>
                </CardContent>
              </Card>

              <Card className="group text-center p-8 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="pt-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Informasi Detail</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Setiap produk memiliki halaman khusus dengan spesifikasi lengkap, review pelanggan, dan panduan pemilihan. 
                    Transparansi penuh untuk kepuasan Anda!
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

{/* Set Bekal Anak Content Section */}
<section className="mb-20 bg-gradient-to-r from-gray-50 to-pink-50 rounded-2xl p-8 md:p-12">
  <article className="prose prose-lg max-w-none text-gray-700">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
      Panduan Lengkap Memilih Set Bekal Anak Terbaik
    </h2>

    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">🎯 Kriteria Set Bekal Anak Berkualitas</h3>
        <ul className="space-y-2">
          <li><strong>Material Food Grade:</strong> Bebas BPA dan zat berbahaya</li>
          <li><strong>Anti Bocor:</strong> Sistem kedap udara yang sempurna</li>
          <li><strong>Mudah Dibersihkan:</strong> Permukaan halus anti noda</li>
          <li><strong>Ukuran Tepat:</strong> Sesuai porsi makan anak sekolah</li>
          <li><strong>Desain Menarik:</strong> Karakter favorit anak</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">⭐ Keunggulan Produk Kami</h3>
        <ul className="space-y-2">
          <li><strong>{products.length}+ Pilihan Karakter:</strong> Selalu ada yang disukai anak</li>
          <li><strong>Halaman Detail Lengkap:</strong> Informasi produk transparan</li>
          <li><strong>Review Pelanggan:</strong> Testimoni nyata dari orang tua</li>
          <li><strong>Garansi Produk:</strong> Jaminan kualitas dari kami</li>
          <li><strong>Pelayanan Terbaik:</strong> Customer service responsif 24/7</li>
        </ul>
      </div>
    </div>

    <h3 className="text-2xl font-semibold text-gray-900 mb-6">🌟 Koleksi Set Bekal Anak Terlengkap di Indonesia</h3>
    <p className="mb-6 text-lg leading-relaxed">
      Kami menyediakan <strong>set bekal anak</strong> dengan berbagai tema dan karakter yang paling disukai anak-anak Indonesia. 
      Setiap produk memiliki halaman detail tersendiri dengan informasi lengkap, foto multiple angle, spesifikasi teknis, 
      dan review dari pelanggan yang sudah membeli. Ini memudahkan Anda untuk memilih produk yang tepat.
    </p>

    <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
      <h4 className="text-xl font-semibold text-gray-900 mb-4">📦 Mengapa Halaman Detail Produk Penting?</h4>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <h5 className="font-medium text-gray-900 mb-2">Informasi Lengkap:</h5>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• Spesifikasi detail setiap item</li>
            <li>• Foto produk dari berbagai sudut</li>
            <li>• Panduan cara penggunaan</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-900 mb-2">Review Asli:</h5>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• Testimoni orang tua lain</li>
            <li>• Foto penggunaan nyata</li>
            <li>• Tips dan saran dari pembeli</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-900 mb-2">Panduan Pemilihan:</h5>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• Rekomendasi usia yang sesuai</li>
            <li>• Perbandingan dengan produk lain</li>
            <li>• Tips perawatan produk</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-900 mb-2">Nilai Tambah:</h5>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• Setiap produk punya halaman unik</li>
            <li>• Konten detail untuk membantu orang tua</li>
            <li>• Lebih mudah membandingkan pilihan</li>
          </ul>
        </div>
      </div>
    </div>

    <p className="text-lg leading-relaxed">
      Investasi terbaik untuk kebiasaan makan sehat anak di sekolah. Dengan <strong>set bekal anak</strong> berkualitas 
      dan informasi lengkap di setiap halaman produk, Anda bisa membuat keputusan pembelian yang tepat. 
      Klik setiap produk untuk melihat detail lengkapnya!
    </p>
  </article>
</section>


          {/* Enhanced CTA Section */}
          <section className="text-center bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Membuat Anak Lebih Semangat Makan?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Jelajahi koleksi lengkap <strong>set bekal anak</strong> kami dengan {products.length}+ pilihan karakter lucu. 
              Setiap produk memiliki halaman detail dengan review lengkap. Konsultasi gratis via WhatsApp atau checkout langsung di Shopee!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-6">
              <Button
                onClick={() => handleWhatsAppClick()}
                size="lg"
                className="group bg-white text-pink-600 hover:bg-gray-50 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                💬 Konsultasi Gratis WhatsApp
              </Button>
              <Button
                onClick={handleShopeeClick}
                size="lg"
                className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <ShoppingBag className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                🛒 Checkout Langsung Shopee
              </Button>
            </div>
            
            <p className="text-sm opacity-75">
              🚚 Gratis ongkir seluruh Indonesia • ⭐ Rating 4.9/5 • 💝 Garansi produk • 🔒 Pembayaran aman
            </p>
          </section>
        </div>
      </main>
    </>
  )
}