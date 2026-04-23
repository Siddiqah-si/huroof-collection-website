"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import { getNewArrivals } from "@/lib/products"

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  return (
    <div className="flex items-center gap-4 md:gap-6">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hrs" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" },
      ].map((item, index) => (
        <div key={item.label} className="flex items-center gap-4 md:gap-6">
          <div className="text-center">
            <div className="text-3xl md:text-5xl lg:text-6xl font-serif tabular-nums">
              {formatNumber(item.value)}
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1">
              {item.label}
            </div>
          </div>
          {index < 3 && (
            <span className="text-2xl md:text-4xl text-muted-foreground">:</span>
          )}
        </div>
      ))}
    </div>
  )
}

export function DropSection() {
  const newArrivals = getNewArrivals()
  // Set target date to 3 days from now
  const targetDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)

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
          <span className="text-xs uppercase tracking-widest text-earth mb-4 block">
            Limited Edition
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight">
            Latest Drop
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Once it&apos;s gone, it&apos;s gone. No restocks.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-secondary/50 border border-border px-8 py-6 md:px-12 md:py-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 text-center">
              Next Drop In
            </div>
            <CountdownTimer targetDate={targetDate} />
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newArrivals.map((product, index) => (
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
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
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
