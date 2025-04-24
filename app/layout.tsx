import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import TopBar from "@/components/top-bar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Devi Enterprises | Premium Pharmaceutical Equipment Manufacturer",
  description:
    "Devi Enterprises is a premium pharmaceutical equipment manufacturer based in Baddi, Himachal Pradesh. We specialize in GMP equipment, steel furniture, and material handling solutions.",
  keywords:
    "pharmaceutical equipment, steel furniture, material handling, GMP, Baddi, Himachal Pradesh, Devi Enterprises",
  authors: [{ name: "Devi Enterprises" }],
  openGraph: {
    title: "Devi Enterprises | Premium Pharmaceutical Equipment Manufacturer",
    description: "Premium pharmaceutical equipment manufacturer in Baddi, Himachal Pradesh",
    url: "https://devienterprises.com",
    siteName: "Devi Enterprises",
    locale: "en_IN",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
