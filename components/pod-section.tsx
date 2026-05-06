"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { formatInr } from "@/lib/utils"

const productTypes = [
  { id: "tshirt", label: "T-Shirt", price: 5727 },
  { id: "hoodie", label: "Hoodie", price: 8217 },
  { id: "cap", label: "Cap", price: 4067 },
]

const exampleTexts = [
  { arabic: "بسم الله", english: "Bismillah" },
  { arabic: "صبر", english: "Patience" },
  { arabic: "الحمد لله", english: "Alhamdulillah" },
  { arabic: "حب", english: "Love" },
]

export function PodSection() {
  const [customText, setCustomText] = useState("")
  const [selectedProduct, setSelectedProduct] = useState("tshirt")
  const [isArabic, setIsArabic] = useState(true)

  const selectedPrice = productTypes.find(p => p.id === selectedProduct)?.price || 5727

  return (
    <section id="customize" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Product Preview */}
            <div className="relative aspect-square bg-background border border-border overflow-hidden">
              {/* T-Shirt Mockup */}
              <Image
                src={
                  selectedProduct === "tshirt"
                    ? "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
                    : selectedProduct === "hoodie"
                    ? "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
                    : "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80"
                }
                alt={`Custom ${selectedProduct} preview`}
                fill
                className="object-cover"
              />
              
              {/* Text Overlay Preview */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  key={customText}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`text-center ${selectedProduct === "cap" ? "mt-[-20%]" : ""}`}
                >
                  <span
                    className={`text-3xl md:text-5xl font-serif text-foreground drop-shadow-lg ${
                      isArabic ? "font-serif" : ""
                    }`}
                    style={{
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      direction: isArabic ? "rtl" : "ltr"
                    }}
                  >
                    {customText || (isArabic ? "اكتب هنا" : "Your Text")}
                  </span>
                </motion.div>
              </div>

              {/* Preview Badge */}
              <div className="absolute top-4 left-4 bg-sand text-background px-3 py-1 text-xs uppercase tracking-wider">
                Live Preview
              </div>
            </div>

            {/* Product Type Selector */}
            <div className="flex gap-2 mt-4">
              {productTypes.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product.id)}
                  className={`flex-1 py-3 text-sm uppercase tracking-wider transition-all ${
                    selectedProduct === product.id
                      ? "bg-foreground text-background"
                      : "bg-background border border-border hover:border-foreground"
                  }`}
                >
                  {product.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right - Customization Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-widest text-sand mb-4 block">
              Design Your Own
            </span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">
              Create Your
              <br />
              <span className="text-sand">Custom Design</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Enter your name, a meaningful quote, or any text. We&apos;ll transform it into beautiful Arabic calligraphy or English typography.
            </p>

            {/* Language Toggle */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-muted-foreground">Script:</span>
              <div className="flex bg-background border border-border">
                <button
                  onClick={() => setIsArabic(true)}
                  className={`px-4 py-2 text-sm transition-all ${
                    isArabic ? "bg-sand text-background" : "hover:bg-secondary"
                  }`}
                >
                  العربية
                </button>
                <button
                  onClick={() => setIsArabic(false)}
                  className={`px-4 py-2 text-sm transition-all ${
                    !isArabic ? "bg-sand text-background" : "hover:bg-secondary"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Text Input */}
            <div className="mb-6">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder={isArabic ? "اكتب نصك هنا..." : "Enter your text..."}
                className={`w-full bg-background border border-border px-4 py-4 text-lg focus:outline-none focus:border-sand transition-colors ${
                  isArabic ? "text-right font-serif" : ""
                }`}
                dir={isArabic ? "rtl" : "ltr"}
              />
            </div>

            {/* Example Texts */}
            <div className="mb-8">
              <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-3">
                Popular Ideas:
              </span>
              <div className="flex flex-wrap gap-2">
                {exampleTexts.map((text) => (
                  <button
                    key={text.english}
                    onClick={() => {
                      setCustomText(isArabic ? text.arabic : text.english)
                    }}
                    className="px-3 py-1.5 text-sm bg-background border border-border hover:border-sand transition-colors"
                  >
                    {isArabic ? text.arabic : text.english}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & CTA */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Starting from
                </span>
                <div className="text-3xl font-serif">{formatInr(selectedPrice)}</div>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-sand transition-all duration-300"
              >
                Create Design
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
