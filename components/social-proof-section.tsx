"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"

const ugcImages = [
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    alt: "Community member wearing Huroof",
  },
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
    alt: "Street style with Huroof",
  },
  {
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    alt: "Fashion editorial featuring Huroof",
  },
  {
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    alt: "Urban style with Huroof collection",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    alt: "Model in Huroof attire",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
    alt: "Casual Huroof outfit",
  },
]

export function SocialProofSection() {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-earth mb-4 block">
            Community
          </span>
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
            Worn By You
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real people. Real identity.
          </p>
        </motion.div>

        {/* Instagram Handle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <a
            href="https://instagram.com/huroofcollection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Instagram className="w-4 h-4" />
            <span className="group-hover:underline">@huroofcollection</span>
          </a>
        </motion.div>
      </div>

      {/* Full-width Image Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2">
        {ugcImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative aspect-square overflow-hidden group cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 33vw, 16vw"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="w-6 h-6" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Tag us to be featured
          </p>
          <span className="text-lg font-serif text-earth">#HUROOFIDENTITY</span>
        </motion.div>
      </div>
    </section>
  )
}
