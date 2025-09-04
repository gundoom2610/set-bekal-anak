import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Set Bekal Anak Lucu - Lipink2003",
  description:
    "Lagi cari set bekal anak? Kami menyediakan berbagai pilihan bekal anak lucu dan praktis untuk sekolah atau kegiatan sehari-hari.",
  keywords: "set bekal anak, kotak bekal anak, bekal sekolah, tas bekal anak, botol minum anak",
  generator: "v0.app",
  robots: "index, follow",
  openGraph: {
    title: "Set Bekal Anak Lucu - Lipink2003",
    description:
      "Lagi cari set bekal anak? Kami menyediakan berbagai pilihan bekal anak lucu dan praktis untuk sekolah atau kegiatan sehari-hari.",
    type: "website",
    locale: "id_ID",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
