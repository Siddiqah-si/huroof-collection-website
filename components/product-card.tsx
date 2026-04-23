"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { type Product } from "@/lib/products"
import { useCartStore } from "@/lib/cart-store"

interface ProductCardProps {
  product: Product
  showLimitedBadge?: boolean
}

export function ProductCard({ product, showLimitedBadge }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const { addItem } = useCartStore()

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    if (selectedSize) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        image: product.images[0],
      })
      setSelectedSize(null)
    }
  }

  const isLowStock = product.stock <= 5

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setSelectedSize(null)
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        {/* Primary Image */}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Secondary Image on Hover */}
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            fill
            className={`object-cover transition-all duration-500 ${
              isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-foreground text-background px-2 py-1 text-[10px] uppercase tracking-wider">
              New
            </span>
          )}
          {showLimitedBadge && isLowStock && (
            <span className="bg-earth text-background px-2 py-1 text-[10px] uppercase tracking-wider">
              Only {product.stock} Left
            </span>
          )}
        </div>

        {/* Quick Add Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm p-3"
            >
              {/* Size Selection */}
              <div className="flex items-center justify-center gap-1 mb-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedSize(size)
                    }}
                    className={`w-8 h-8 text-xs border transition-all ${
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleQuickAdd}
                disabled={!selectedSize}
                className={`w-full py-2 text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  selectedSize
                    ? "bg-foreground text-background hover:bg-earth"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                <Plus className="w-3 h-3" />
                {selectedSize ? "Add to Cart" : "Select Size"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="text-sm font-medium tracking-wide group-hover:text-earth transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
