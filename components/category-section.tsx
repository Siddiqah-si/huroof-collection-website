"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: "men",
    name: "Men",
    description: "Caps, Arabic t-shirts, streetwear",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
    href: "#shop?category=men",
  },
  {
    id: "women",
    name: "Women",
    description: "Modest dresses, abayas, Indo-Pak styles",
    image: "https://images.unsplash.com/photo-1590149613616-be8fdc21f9c4?w=800&q=80",
    href: "#shop?category=women",
  },
  {
    id: "pod",
    name: "Print On Demand",
    description: "Custom Arabic/English text apparel",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
    href: "#customize",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Bags, beanies, prayer beads",
    image: "https://images.unsplash.com/photo-1597633125184-9fd7e54f4e49?w=800&q=80",
    href: "#shop?category=accessories",
  },
]

export function CategorySection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-sand mb-4 block">
            Explore Collections
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight">
            Shop By Category
          </h2>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={category.href}
                className="group block relative aspect-[3/4] overflow-hidden bg-secondary"
              >
                {/* Image */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-medium mb-1 group-hover:text-sand transition-colors">
                    {category.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="mt-3 flex items-center gap-2 text-sm text-sand opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
