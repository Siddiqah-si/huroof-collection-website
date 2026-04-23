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
  title: "Huroof Collection | Wear Meaning. Not Just Fashion.",
  description:
    "Arabic typography meets modern fashion. Shop culturally-inspired streetwear, modest Indo-Pakistani styles, and custom print-on-demand apparel. Express your identity.",
  keywords: [
    "arabic fashion",
    "modest fashion",
    "streetwear",
    "islamic fashion",
    "indo-pak fashion",
    "print on demand",
    "custom apparel",
    "arabic typography",
    "huroof",
    "cultural fashion",
  ],
  openGraph: {
    title: "Huroof Collection | Arabic. Culture. Identity.",
    description: "Wear Meaning. Not Just Fashion. Arabic typography meets modern streetwear and modest fashion.",
    url: "https://huroofcollection.shop",
    siteName: "Huroof Collection",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huroof Collection",
    description: "Wear Meaning. Not Just Fashion.",
    images: ["/og-image.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
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
