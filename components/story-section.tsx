"use client"

import { motion } from "framer-motion"

export function StorySection() {
  return (
    <section id="story" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
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
              <span className="text-sand">Letters form identity.</span>
              <br />
              We turn them into what you wear.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Every piece we create is a letter in your story. Arabic typography meets streetwear. 
            Modest fashion meets modern design. This represents you—not just another clothing site.
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
              huroofcollection.shop
            </span>
            <div className="w-12 h-px bg-border" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
