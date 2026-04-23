"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif mb-4">
            Join the Identity
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            First access to drops. No spam. Unsubscribe anytime.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-secondary border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-sand transition-colors"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 hover:bg-sand transition-colors"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="font-serif text-2xl tracking-wider">
                <span className="text-sand">حروف</span> HUROOF
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Wear Meaning. Not Just Fashion.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://instagram.com/huroofcollection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-4">Shop</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#shop"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#drops"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Latest Drop
                  </Link>
                </li>
                <li>
                  <Link
                    href="#shop?category=men"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    href="#shop?category=women"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    href="#customize"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Print On Demand
                  </Link>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-4">Info</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#story"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Returns
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@huroofcollection.shop"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    hello@huroofcollection.shop
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Huroof Collection. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
