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

export const metadata: Metadata = {
  title: "Believe Calistenia",
  description:
    "Transforme seu corpo com a metodologia Believe Calistenia. Aulas de calistenia em Fortaleza.",
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
        <Navbar />
        {children}
        <WhatsAppFab />
      </body>
    </html>
  )
}
