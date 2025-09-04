import { notFound } from "next/navigation"
import { products, siteConfig } from "@/lib/constants"
import ProductDetailPageClient from "./client-component" // <-- Import the new client component
import type { Metadata } from 'next'

// --- Metadata Generation (Server Component only) ---
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Halaman Tidak Ditemukan",
      description: "Produk yang Anda cari tidak tersedia."
    };
  }

  return {
    title: `${product.name}`,
    description: `Jual set bekal anak ${product.name} lengkap - lunch box 3-4 kompartemen, botol minum, peralatan makan. 100% food grade, anti bocor, harga terjangkau. Gratis ongkir!`,
    alternates: {
      canonical: `${siteConfig.url}/produk/${product.slug}`,
    },
    openGraph: {
      images: [product.image],
    },
  };
}

// --- Main Page Component (Server Component) ---
export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return notFound();
  }

  // Pass the product data to the client component
  return <ProductDetailPageClient product={product} />;
}