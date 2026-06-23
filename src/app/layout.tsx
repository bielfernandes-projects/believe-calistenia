import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import WhatsAppFab from "@/components/WhatsAppFab"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const BASE_URL = "https://believecalistenia.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Believe Calistenia | Aulas de Calistenia em Fortaleza",
  description:
    "Transforme seu corpo com a metodologia Believe Calistenia. Aulas de calistenia em Fortaleza para iniciantes e avançados. Agende sua aula experimental!",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Believe Calistenia | Aulas de Calistenia em Fortaleza",
    description:
      "Transforme seu corpo com a metodologia Believe Calistenia. Aulas de calistenia em Fortaleza para iniciantes e avançados.",
    url: BASE_URL,
    siteName: "Believe Calistenia",
    images: [
      {
        url: "/images/calistenia-foto.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Believe Calistenia | Aulas de Calistenia em Fortaleza",
    description:
      "Transforme seu corpo com a metodologia Believe Calistenia. Aulas de calistenia em Fortaleza.",
    images: ["/images/calistenia-foto.png"],
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Believe Calistenia",
  description:
    "Academia de calistenia em Fortaleza. Treino baseado em ciência e progressão.",
  url: BASE_URL,
  telephone: "+5585996995533",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Vicente Leite, 1536",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    postalCode: "60170-251",
    addressCountry: "BR",
  },
  image: `${BASE_URL}/images/calistenia-foto.png`,
  priceRange: "R$ 40 - R$ 349",
  openingHours: [
    "Mo-Fr 05:30-20:35",
    "Sa 09:00-10:10",
  ],
  sameAs: [
    "https://www.instagram.com/believecalistenia/",
    "https://www.youtube.com/c/BelieveCalistenia",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-zinc-950 font-sans text-zinc-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        {children}
        <WhatsAppFab />
      </body>
    </html>
  )
}
