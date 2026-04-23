"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import { getProductsByCategory, getBestSellers, products } from "@/lib/products"

const categories = [
  { id: "all", label: "All" },
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "pod", label: "Custom" },
  { id: "accessories", label: "Accessories" },
]

export function ShopSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const filteredProducts = getProductsByCategory(activeCategory)

  return (
    <section id="shop" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-sand mb-4 block">
              The Collection
            </span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
              Shop Identity
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Explore our collection of culturally-inspired fashion. Arabic typography, modest wear, and streetwear with meaning.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 bg-background/50 p-1 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-12 border-t border-border"
        >
          {[
            { value: `${products.length}+`, label: "Unique Designs" },
            { value: "48h", label: "Fast Shipping" },
            { value: "POD", label: "Print On Demand" },
            { value: "100%", label: "Quality Guaranteed" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-4xl font-serif text-sand">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
