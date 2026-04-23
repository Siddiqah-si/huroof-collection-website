"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag, Search } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openCart, totalItems } = useCartStore()
  const itemCount = totalItems()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#shop?category=men", label: "Men" },
    { href: "#shop?category=women", label: "Women" },
    { href: "#customize", label: "Custom" },
    { href: "#shop?category=accessories", label: "Accessories" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 hover:bg-secondary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="font-serif text-xl md:text-2xl tracking-wider"
            >
              <span className="text-sand">حروف</span>
              <span className="ml-2">HUROOF</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-widest hover:text-sand transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                className="p-2 hover:bg-secondary transition-colors hidden md:flex"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={openCart}
                className="p-2 hover:bg-secondary transition-colors relative"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-sand text-[10px] flex items-center justify-center text-background font-medium"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed left-0 top-0 bottom-0 w-full max-w-sm bg-background z-50 border-r border-border"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-serif text-xl tracking-wider">
                  <span className="text-sand">حروف</span> HUROOF
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-secondary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-4 text-2xl font-serif tracking-wider border-b border-border hover:text-sand transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              {/* Mobile CTA */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
                <Link
                  href="#customize"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 bg-sand text-background text-center text-sm uppercase tracking-widest font-medium block"
                >
                  Create Your Design
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
