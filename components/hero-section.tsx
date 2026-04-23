"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80",
      alt: "Arabic calligraphy and textile patterns"
    },
    {
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1920&q=80",
      alt: "Folded t-shirts flat lay collection"
    },
    {
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1920&q=80",
      alt: "Clothing fabric texture close-up"
    }
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl"
        >
          {/* Arabic Typography Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-6xl md:text-8xl font-serif text-sand/30 select-none">
              حروف
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="relative">
            <motion.span
              className="block text-4xl md:text-6xl lg:text-8xl font-serif tracking-tight leading-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Wear Meaning.
            </motion.span>
            <motion.span
              className="block text-4xl md:text-6xl lg:text-8xl font-serif tracking-tight leading-none mt-2 text-sand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Not Just Fashion.
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p
            className="mt-8 text-lg md:text-xl text-muted-foreground tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Arabic. Culture. Identity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#shop"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-sand hover:text-background transition-all duration-300"
            >
              Shop Collection
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
            <Link
              href="#customize"
              className="group inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Customize Your Style
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Discover</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side text decoration */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="text-xs uppercase tracking-widest text-muted-foreground [writing-mode:vertical-rl] rotate-180">
          Arabic Typography × Modest Fashion × Streetwear
        </span>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-sand" : "bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
