import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

// Enhanced SEO metadata with comprehensive optimization
export const metadata: Metadata = {
  // Primary SEO tags
  title: {
    default: "Set Bekal Anak Terbaik | 15+ Karakter Lucu | Lipink2003",
    template: "%s | Lipink2003"
  },
  description: "🍱 Jual Set Bekal Anak terbaik dengan 15+ karakter lucu! Food grade, anti tumpah, harga terjangkau. 5000+ terjual di Shopee. Gratis ongkir seluruh Indonesia! ⭐ Rating 4.9/5",
  
  // Enhanced keywords with long-tail variations
  keywords: [
    // Primary keywords
    "set bekal anak", "jual set bekal anak", "set bekal anak murah",
    "set bekal anak terbaik", "set bekal anak lucu", "set bekal anak karakter",
    
    // Product variations  
    "kotak bekal anak", "lunch box anak", "tempat bekal sekolah",
    "botol minum anak", "tas bekal anak", "peralatan makan anak",
    
    // Character-based keywords
    "set bekal anak unicorn", "set bekal anak princess", "set bekal anak superhero",
    "set bekal anak frozen", "set bekal anak hello kitty", "set bekal anak doraemon",
    
    // Location + intent keywords
    "beli set bekal anak online", "set bekal anak jakarta", "set bekal anak indonesia",
    "toko set bekal anak", "set bekal anak shopee", "lipink2003",
    
    // Safety & quality keywords
    "set bekal anak food grade", "set bekal anak anti tumpah", "set bekal anak aman",
    "set bekal anak berkualitas", "set bekal anak BPA free",
    
    // Age-specific keywords
    "set bekal anak SD", "set bekal anak TK", "set bekal anak balita",
    "bekal sekolah anak", "bekal anak paud"
  ].join(", "),
  
  // Enhanced meta tags
  generator: "Next.js 14 - Lipink2003 Set Bekal Anak Store",
  applicationName: "Lipink2003 - Set Bekal Anak Terbaik",
  referrer: "origin-when-cross-origin",
  creator: "Lipink2003",
  publisher: "Lipink2003",
  
  // Enhanced robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Comprehensive Open Graph
  openGraph: {
    title: "Set Bekal Anak Terbaik Indonesia | 15+ Karakter Lucu | 5000+ Terjual",
    description: "🍱 Jual Set Bekal Anak premium dengan 15+ karakter lucu! Food grade, anti tumpah, 5000+ terjual di Shopee dengan rating 4.9/5. Gratis ongkir seluruh Indonesia!",
    url: "https://setbekalanak.web.id",
    siteName: "Lipink2003 - Set Bekal Anak Terbaik",
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/og-set-bekal-anak.jpg",
        width: 1200,
        height: 630,
        alt: "Set Bekal Anak Lucu Terbaik - 15+ Karakter - Lipink2003",
        type: "image/jpeg",
      },
      {
        url: "/og-shopee-success.jpg", 
        width: 1200,
        height: 630,
        alt: "5000+ Set Bekal Anak Terjual di Shopee - Rating 4.9/5",
        type: "image/jpeg",
      }
    ],
  },
  
  // Twitter Card optimization
  twitter: {
    card: "summary_large_image",
    title: "Set Bekal Anak Terbaik | 15+ Karakter Lucu | 5000+ Terjual",
    description: "🍱 Set Bekal Anak premium food grade dengan 15+ karakter lucu! 5000+ terjual di Shopee, rating 4.9/5. Gratis ongkir!",
    site: "@lipink2003",
    creator: "@lipink2003",
    images: ["/twitter-set-bekal-anak.jpg"],
  },
  
  // Additional meta tags for better SEO
  category: "E-commerce",
  classification: "Business",
  
  // Geo-targeting for Indonesia
  other: {
    "geo.region": "ID",
    "geo.country": "Indonesia", 
    "geo.placename": "Indonesia",
    "ICBM": "-6.2088,106.8456", // Jakarta coordinates
    
    // Business information
    "business:contact_data:street_address": "Indonesia",
    "business:contact_data:locality": "Indonesia", 
    "business:contact_data:region": "Indonesia",
    "business:contact_data:country_name": "Indonesia",
    "business:contact_data:website": "https://setbekalanak.web.id",
    
    // Product information
    "product:brand": "Lipink2003",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:price:currency": "IDR",
    "product:retailer": "Lipink2003",
    "product:category": "Baby & Kids > Feeding > Lunch Boxes",
    
    // Social media
    "shopee:shop": "lipink2003",
    "shopee:url": "https://shopee.co.id/lipink2003",
    
    // Technical SEO
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Lipink2003 Set Bekal Anak",
    "application-name": "Lipink2003",
    "msapplication-TileColor": "#ec4899",
    "theme-color": "#ec4899",
  },
  
  // Manifest for PWA
  manifest: "/site.webmanifest",
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-touch-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#ec4899"
      }
    ]
  },
  
  // Verification tags for search engines
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code", 
    yahoo: "your-yahoo-verification-code",
    other: {
      "baidu-site-verification": "your-baidu-verification-code",
      "bing": "your-bing-verification-code"
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" dir="ltr">
      <head>
        {/* Favicon and app icons - Christmas Gift Theme */}
        <link rel="icon" type="image/png" sizes="16x16" href="/icons8-christmas-gift-3d-fluency-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons8-christmas-gift-3d-fluency-32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons8-christmas-gift-3d-fluency-96.png" />
        <link rel="shortcut icon" href="/icons8-christmas-gift-3d-fluency-32.png" type="image/png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/icons8-christmas-gift-3d-fluency-57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons8-christmas-gift-3d-fluency-60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons8-christmas-gift-3d-fluency-72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons8-christmas-gift-3d-fluency-76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons8-christmas-gift-3d-fluency-70.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons8-christmas-gift-3d-fluency-70.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons8-christmas-gift-3d-fluency-96.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons8-christmas-gift-3d-fluency-96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons8-christmas-gift-3d-fluency-96.png" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileImage" content="/icons8-christmas-gift-3d-fluency-96.png" />
        <meta name="msapplication-square70x70logo" content="/icons8-christmas-gift-3d-fluency-70.png" />
        <meta name="msapplication-square150x150logo" content="/icons8-christmas-gift-3d-fluency-96.png" />
        
        {/* Additional SEO meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://setbekalanak.web.id" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://shopee.co.id" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//shopee.co.id" />
        <link rel="dns-prefetch" href="//wa.me" />
        
        {/* Enhanced structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lipink2003",
              "alternateName": "Lipink2003 Set Bekal Anak",
              "url": "https://setbekalanak.web.id",
              "logo": "https://setbekalanak.web.id/logo.png",
              "description": "Toko online terpercaya untuk set bekal anak dengan 15+ karakter lucu, food grade, dan harga terjangkau",
              "foundingDate": "2020",
              "slogan": "Set Bekal Anak Terbaik untuk Si Kecil",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+62-xxx-xxxx-xxxx",
                  "contactType": "customer service",
                  "availableLanguage": ["Indonesian"],
                  "areaServed": "ID"
                }
              ],
              "sameAs": [
                "https://shopee.co.id/lipink2003",
                "https://wa.me/62xxxxxxxxx"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Set Bekal Anak",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Set Bekal Anak Karakter Lucu",
                      "category": "Baby & Kids Feeding Equipment"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "1500",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
        
        {/* Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Lipink2003 - Set Bekal Anak Terbaik",
              "alternateName": "Set Bekal Anak Lucu Lipink2003",
              "url": "https://setbekalanak.web.id",
              "description": "Jual set bekal anak terbaik dengan 15+ karakter lucu, food grade, anti tumpah. 5000+ terjual di Shopee dengan rating 4.9/5",
              "inLanguage": "id-ID",
              "isAccessibleForFree": true,
              "isFamilyFriendly": true,
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint", 
                  "urlTemplate": "https://setbekalanak.web.id/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Lipink2003",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://setbekalanak.web.id/logo.png"
                }
              }
            })
          }}
        />
        
        {/* Breadcrumb structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://setbekalanak.web.id"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Set Bekal Anak",
                  "item": "https://setbekalanak.web.id/set-bekal-anak"
                }
              ]
            })
          }}
        />
        
        {/* Hreflang for international SEO */}
        <link rel="alternate" hrefLang="id" href="https://setbekalanak.web.id" />
        <link rel="alternate" hrefLang="id-ID" href="https://setbekalanak.web.id" />
        <link rel="alternate" hrefLang="x-default" href="https://setbekalanak.web.id" />
        
        {/* Additional meta tags for social media */}
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta name="pinterest-rich-pins" content="true" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Memuat set bekal anak terbaik...</p>
            </div>
          </div>
        }>
          <main id="main-content">
            {children}
          </main>
          <Analytics />
        </Suspense>
        
        {/* Additional performance and SEO scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Track page performance
              if ('performance' in window) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData && perfData.loadEventEnd) {
                      // You can send this data to analytics
                      console.log('Page load time:', perfData.loadEventEnd);
                    }
                  }, 0);
                });
              }
              
              // Preload critical Shopee link
              const shopeeLink = document.createElement('link');
              shopeeLink.rel = 'preload';
              shopeeLink.href = 'https://shopee.co.id/lipink2003';
              shopeeLink.as = 'document';
              document.head.appendChild(shopeeLink);
            `
          }}
        />
      </body>
    </html>
  )
}