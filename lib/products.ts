export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  images: string[]
  sizes: string[]
  stock: number
  category: "all" | "him" | "her"
  isNew?: boolean
  description: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Identity Oversized Tee",
    price: 89,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 12,
    category: "all",
    isNew: true,
    description:
      "The signature oversized silhouette that defines who you are. Premium heavyweight cotton with dropped shoulders.",
  },
  {
    id: "2",
    name: "Letters Hoodie Black",
    price: 149,
    originalPrice: 189,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 5,
    category: "all",
    isNew: true,
    description:
      "Crafted from French terry cotton. The hoodie that speaks before you do.",
  },
  {
    id: "3",
    name: "Raw Edge Cargo Pants",
    price: 169,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    stock: 8,
    category: "him",
    description:
      "Utilitarian design meets street aesthetics. Distressed edges, multiple pockets, relaxed fit.",
  },
  {
    id: "4",
    name: "Script Crop Top",
    price: 69,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
      "https://images.unsplash.com/photo-1485968579169-a6b30571e7c4?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    stock: 15,
    category: "her",
    isNew: true,
    description:
      "Minimal script embroidery on organic cotton. Cropped cut for the modern silhouette.",
  },
  {
    id: "5",
    name: "Deconstructed Jacket",
    price: 289,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 3,
    category: "all",
    description:
      "The statement piece. Asymmetric cuts, exposed seams, raw aesthetics.",
  },
  {
    id: "6",
    name: "Foundation Tee Earth",
    price: 79,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 20,
    category: "all",
    description:
      "Earth-toned essential. Garment dyed for that lived-in feel from day one.",
  },
  {
    id: "7",
    name: "Wide Leg Trousers",
    price: 139,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    stock: 7,
    category: "her",
    description:
      "Flowing silhouette meets structured tailoring. High waist, pleated front.",
  },
  {
    id: "8",
    name: "Oversized Knit Sweater",
    price: 159,
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    ],
    sizes: ["S", "M", "L"],
    stock: 4,
    category: "all",
    isNew: true,
    description:
      "Hand-knitted texture. Chunky yarn, oversized fit, statement piece for colder days.",
  },
]

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products
  return products.filter((p) => p.category === category || p.category === "all")
}

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.isNew)
}

export const getLimitedStock = (): Product[] => {
  return products.filter((p) => p.stock <= 5)
}
