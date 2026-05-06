"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Check, Truck, RotateCcw, Shield, Sparkles } from "lucide-react"
import { type Product } from "@/lib/products"
import { useCartStore } from "@/lib/cart-store"
import { formatInr } from "@/lib/utils"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState(0)
  const [isAdded, setIsAdded] = useState(false)
  const [customText, setCustomText] = useState("")
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    if (!selectedSize) return

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.images[0],
    })

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const isLowStock = product.stock <= 10

  const categoryLabel = {
    men: "Men",
    women: "Women", 
    pod: "Print On Demand",
    accessories: "Accessories"
  }[product.category]

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[3/4] bg-secondary overflow-hidden"
            >
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-foreground text-background px-3 py-1.5 text-xs uppercase tracking-wider">
                    New
                  </span>
                )}
                {product.isCustomizable && (
                  <span className="bg-sand text-background px-3 py-1.5 text-xs uppercase tracking-wider">
                    Customizable
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="bg-green text-foreground px-3 py-1.5 text-xs uppercase tracking-wider">
                    Best Seller
                  </span>
                )}
                {isLowStock && !product.isCustomizable && (
                  <span className="bg-sand text-background px-3 py-1.5 text-xs uppercase tracking-wider">
                    Only {product.stock} Left
                  </span>
                )}
              </div>
            </motion.div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-20 h-24 bg-secondary overflow-hidden border-2 transition-colors ${
                      activeImage === index
                        ? "border-foreground"
                        : "border-transparent hover:border-muted"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {/* Category */}
            <span className="text-xs uppercase tracking-widest text-sand">
              {categoryLabel}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-2 tracking-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-2xl">{formatInr(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {formatInr(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Custom Text Input for POD Products */}
            {product.isCustomizable && (
              <div className="mt-8 p-4 bg-secondary/50 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-sand" />
                  <span className="text-sm uppercase tracking-widest">
                    Customize Your Design
                  </span>
                </div>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="Enter your text (Arabic or English)..."
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-sand transition-colors"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  We&apos;ll transform your text into beautiful calligraphy
                </p>
              </div>
            )}

            {/* Size Selector */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm uppercase tracking-widest">
                  Select Size
                </span>
                <button className="text-xs text-muted-foreground hover:text-foreground transition-colors underline">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[4rem] px-4 py-3 text-sm border transition-all ${
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-8">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize || (product.isCustomizable && !customText)}
                className={`w-full py-4 text-sm uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-all ${
                  selectedSize && (!product.isCustomizable || customText)
                    ? isAdded
                      ? "bg-sand text-background"
                      : "bg-foreground text-background hover:bg-sand"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isAdded ? (
                    <motion.span
                      key="added"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Added to Cart
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {!selectedSize 
                        ? "Select a Size" 
                        : product.isCustomizable && !customText
                        ? "Enter Your Text"
                        : "Add to Cart"}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-5 h-5 text-sand mb-2" />
                <span className="text-xs uppercase tracking-wide">
                  Fast Shipping
                </span>
                <span className="text-[10px] text-muted-foreground mt-1">
                  48h Dispatch
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="w-5 h-5 text-sand mb-2" />
                <span className="text-xs uppercase tracking-wide">
                  Easy Returns
                </span>
                <span className="text-[10px] text-muted-foreground mt-1">
                  30 Days
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-5 h-5 text-sand mb-2" />
                <span className="text-xs uppercase tracking-wide">
                  Secure Pay
                </span>
                <span className="text-[10px] text-muted-foreground mt-1">
                  Encrypted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 lg:hidden z-40">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="text-sm font-medium">{product.name}</div>
            <div className="text-lg font-serif">{formatInr(product.price)}</div>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize || (product.isCustomizable && !customText)}
            className={`px-6 py-3 text-sm uppercase tracking-widest font-medium transition-all ${
              selectedSize && (!product.isCustomizable || customText)
                ? isAdded
                  ? "bg-sand text-background"
                  : "bg-foreground text-background"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {!selectedSize ? "Select Size" : isAdded ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </div>
  )
}
