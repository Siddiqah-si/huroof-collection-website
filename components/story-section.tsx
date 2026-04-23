"use client"

import { motion } from "framer-motion"

export function StorySection() {
  return (
    <section id="story" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Arabic Letter Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-[120px] md:text-[180px] lg:text-[220px] font-serif text-earth/20 leading-none select-none">
              ح
            </span>
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-tight text-balance">
              Huroof means letters.
              <br />
              <span className="text-earth">Letters build identity.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Every piece we create is a letter in your story. Not fashion for fashion&apos;s sake—but clothing that speaks who you are before you say a word.
          </motion.p>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <div className="w-12 h-px bg-border" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Est. 2024
            </span>
            <div className="w-12 h-px bg-border" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
