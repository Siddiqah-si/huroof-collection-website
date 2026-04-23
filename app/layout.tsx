import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"
import { SlideCart } from "@/components/slide-cart"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Huroof Collection | Not Just Clothing. Identity.",
  description:
    "Huroof means letters. Letters build identity. Shop the latest drops from Huroof Collection - where fashion meets self-expression.",
  keywords: [
    "fashion",
    "streetwear",
    "identity",
    "clothing",
    "huroof",
    "drops",
    "limited edition",
  ],
  openGraph: {
    title: "Huroof Collection",
    description: "Not Just Clothing. Identity.",
    url: "https://huroofcollection.shop",
    siteName: "Huroof Collection",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huroof Collection",
    description: "Not Just Clothing. Identity.",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <CartProvider>
          <div className="noise-overlay" aria-hidden="true" />
          {children}
          <SlideCart />
        </CartProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
