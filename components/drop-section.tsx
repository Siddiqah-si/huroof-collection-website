"use client"

import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import { getBestSellers, getNewArrivals } from "@/lib/products"

export function DropSection() {
  const trendingProducts = [...getBestSellers(), ...getNewArrivals()]
    .filter((product, index, self) => 
      index === self.findIndex((p) => p.id === product.id)
    )
    .slice(0, 4)

  return (
    <section id="drops" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-sand mb-4 block">
            Trending Now
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight">
            Latest Drop
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Arabic quotes, minimalist prints, and designs that speak your identity. Limited pieces available.
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          {["Limited Pieces", "Best Sellers", "New Arrivals"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-secondary/50 border border-border text-xs uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trendingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} showLimitedBadge />
            </motion.div>
          ))}
        </div>

        {/* Shop All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#shop"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-sand transition-colors group"
          >
            View All Products
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
