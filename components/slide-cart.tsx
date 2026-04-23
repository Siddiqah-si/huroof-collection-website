"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"

export function SlideCart() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCartStore()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <span className="font-medium">
                  Cart ({totalItems()})
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-secondary transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-2">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Add some identity to your wardrobe
                  </p>
                  <button
                    onClick={closeCart}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-sand transition-colors"
                  >
                    Continue Shopping
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.size}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 pb-4 border-b border-border"
                    >
                      {/* Product Image */}
                      <div className="relative w-20 h-24 bg-secondary flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Size: {item.size}
                        </p>
                        <p className="text-sm font-medium mt-2">
                          ${item.price}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.quantity - 1
                              )
                            }
                            className="w-6 h-6 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.quantity + 1
                              )
                            }
                            className="w-6 h-6 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-4 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Subtotal</span>
                  <span className="text-lg font-medium">
                    ${totalPrice().toFixed(2)}
                  </span>
                </div>

                {/* Shipping Note */}
                <p className="text-xs text-muted-foreground text-center">
                  Shipping calculated at checkout
                </p>

                {/* Checkout Button */}
                <button className="w-full bg-foreground text-background py-4 text-sm uppercase tracking-widest font-medium hover:bg-sand transition-colors flex items-center justify-center gap-2">
                  Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Continue Shopping */}
                <button
                  onClick={closeCart}
                  className="w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
