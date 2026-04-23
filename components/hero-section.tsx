"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image with fast cuts simulation */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-and-neon-makeup-39875-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/60" />
        {/* Grain texture is applied globally */}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Main Headline with glitch effect */}
          <h1 className="relative">
            <motion.span
              className="block text-5xl md:text-7xl lg:text-9xl font-serif tracking-tight leading-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Not Just
            </motion.span>
            <motion.span
              className="block text-5xl md:text-7xl lg:text-9xl font-serif tracking-tight leading-none mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Clothing.
            </motion.span>
            <motion.span
              className="block text-5xl md:text-7xl lg:text-9xl font-serif tracking-tight leading-none mt-2 text-earth glitch-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Identity.
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p
            className="mt-8 text-lg md:text-xl text-muted-foreground tracking-wide uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Huroof is worn, not styled.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12"
          >
            <Link
              href="#drops"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-earth hover:text-background transition-all duration-300"
            >
              Explore Drop
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side text decoration */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="text-xs uppercase tracking-widest text-muted-foreground [writing-mode:vertical-rl] rotate-180">
          Est. 2024 — Identity First
        </span>
      </div>
    </section>
  )
}
