"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function CulturalSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
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
            Two Worlds, One Identity
          </span>
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
            Culture Meets Style
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Modern Modest Wear */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <Link href="#shop?category=women" className="block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1590149613616-be8fdc21f9c4?w=1200&q=80"
                  alt="Modern modest wear collection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                  <h3 className="text-2xl md:text-4xl font-serif mb-3">
                    Modern Modest Wear
                  </h3>
                  <p className="text-muted-foreground max-w-sm mb-4">
                    Elegant abayas, flowing dresses, and Indo-Pakistani styles. Modesty meets contemporary design.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sand text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    Explore Collection <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Streetwear with Meaning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <Link href="#shop?category=men" className="block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&q=80"
                  alt="Streetwear with meaning collection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                  <h3 className="text-2xl md:text-4xl font-serif mb-3">
                    Streetwear with Meaning
                  </h3>
                  <p className="text-muted-foreground max-w-sm mb-4">
                    Arabic typography meets urban style. Caps, tees, and hoodies that speak your identity.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sand text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    Explore Collection <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
