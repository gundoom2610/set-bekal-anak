"use client" // <-- This is where the magic happens

import { useEffect } from "react"
import { siteConfig } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import {
  Star, Shield, Heart, Truck,
  MessageCircle, ShoppingBag,
  Check, Package, Award, ArrowLeft
} from "lucide-react"

// --- Types ---
interface Product {
  id: number
  name: string
  slug: string
  description: string
  image: string
}

interface ProductDetailPageProps {
  product: Product;
}

// --- Component ---
export default function ProductDetailPageClient({ product }: ProductDetailPageProps) {
  // Use useEffect to scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan set bekal anak ${product.name}. Bisa info harga dan stok?`
    );
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  const handleShopeeClick = () => {
    window.open(siteConfig.shopeeUrl, "_blank");
  };

  const productFeatures = [
    "Lunch box dengan 3-4 kompartemen anti bocor",
    "Botol minum 500-750ml dengan sedotan anti tumpah",
    "Sendok dan garpu stainless steel anak-anak",
    "Tas carrier dengan desain matching karakter",
    "Material 100% food grade bebas BPA dan zat berbahaya",
    "Sistem lock kuat yang mudah dibuka anak",
    "Permukaan anti bakteri dan mudah dibersihkan",
    "Ukuran perfect untuk porsi makan anak sekolah",
    "Desain ergonomis sesuai genggaman tangan anak",
    "Bonus stiker karakter dan panduan perawatan",
  ];

  const productBenefits = [
    "Anak lebih semangat makan dengan karakter favorit",
    "Menghemat uang jajan dengan bekal sehat dari rumah",
    "Nutrisi terkontrol sesuai kebutuhan tumbuh kembang",
    "Melatih kemandirian dan tanggung jawab anak",
    "Mengurangi sampah plastik dengan wadah reusable",
    "Investasi jangka panjang untuk kesehatan anak",
  ];

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Set Bekal Anak ${product.name}`,
    description: `Set bekal anak lengkap dengan tema ${product.name} - lunch box, botol minum, peralatan makan. 100% food grade, anti bocor, BPA free. Cocok untuk sekolah dan aktivitas anak.`,
    image: product.image,
    brand: { "@type": "Brand", name: siteConfig.name },
    category: "Set Bekal Anak",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "IDR",
      seller: { "@type": "Organization", name: siteConfig.name },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />

      {/* --- UI --- */}
      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Breadcrumb */}
          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                bg-gradient-to-r from-pink-100 to-pink-200 
                text-pink-700 font-medium shadow-sm hover:shadow-md 
                hover:from-pink-200 hover:to-pink-300 
                transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Balik ke Halaman Utama
            </Link>
          </div>

          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-pink-600">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/#produk" className="hover:text-pink-600">
              Set Bekal Anak
            </Link>{" "}
            / <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>

          {/* Product Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Image */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge icon={Shield} text="100% Food Grade" color="green" />
                <Badge icon={Award} text="Anti Bocor" color="blue" />
                <Badge icon={Heart} text="BPA Free" color="purple" />
              </div>
            </div>

            {/* Right: Info */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold">
                Set Bekal Anak <span className="text-pink-600">{product.name}</span>
              </h1>
              <p className="text-lg text-gray-700">{product.description}</p>

              {/* What's included */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-pink-600" /> Apa Saja yang
                    Didapat?
                  </h3>
                  <ul className="space-y-2">
                    {productFeatures.slice(0, 5).map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Tanya via WhatsApp
                </Button>
                <Button
                  onClick={handleShopeeClick}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-4"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Beli di Shopee
                </Button>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Manfaat Set Bekal Anak {product.name}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {productBenefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-pink-500 mt-1" />
                  {b}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

// Small helper badge
function Badge({
  icon: Icon,
  text,
  color,
}: {
  icon: any
  text: string
  color: "green" | "blue" | "purple"
}) {
  const colors: Record<string, string> = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
  };
  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${colors[color]}`}>
      <Icon className="w-4 h-4" />
      {text}
    </div>
  );
}