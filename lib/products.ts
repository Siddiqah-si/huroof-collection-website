export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  images: string[]
  sizes: string[]
  stock: number
  category: "men" | "women" | "pod" | "accessories"
  isNew?: boolean
  isBestSeller?: boolean
  isCustomizable?: boolean
  description: string
}

export const products: Product[] = [
  // Men's Collection
  {
    id: "1",
    name: "Arabic Script Cap",
    price: 3237,
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80",
    ],
    sizes: ["One Size"],
    stock: 25,
    category: "men",
    isNew: true,
    isBestSeller: true,
    description:
      "Premium cotton cap with embroidered Arabic calligraphy. Adjustable strap for perfect fit.",
  },
  {
    id: "2",
    name: "Bismillah Oversized Tee",
    price: 4897,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 18,
    category: "men",
    isNew: true,
    description:
      "Heavyweight cotton oversized tee featuring minimalist Arabic typography. Dropped shoulders, relaxed fit.",
  },
  {
    id: "3",
    name: "Sabr Hoodie",
    price: 7387,
    originalPrice: 9047,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 8,
    category: "men",
    isBestSeller: true,
    description:
      "French terry cotton hoodie with 'Sabr' (Patience) calligraphy. Kangaroo pocket, drawstring hood.",
  },
  {
    id: "4",
    name: "Streetwear Arabic Tee",
    price: 4067,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 30,
    category: "men",
    description:
      "Contemporary streetwear meets Arabic heritage. Premium cotton with bold script design.",
  },
  // Women's Collection - Modest Fashion
  {
    id: "5",
    name: "Elegant Abaya",
    price: 10707,
    images: [
      "https://images.unsplash.com/photo-1590149613616-be8fdc21f9c4?w=800&q=80",
      "https://images.unsplash.com/photo-1583234944037-8620a0e4e5a0?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 12,
    category: "women",
    isNew: true,
    description:
      "Modern flowing abaya with subtle embroidery details. Lightweight fabric perfect for all seasons.",
  },
  {
    id: "6",
    name: "Indo-Pak Kurta Set",
    price: 13197,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    stock: 6,
    category: "women",
    isBestSeller: true,
    description:
      "Traditional Indo-Pakistani kurta with contemporary cuts. Includes matching palazzo pants.",
  },
  {
    id: "7",
    name: "Modest Maxi Dress",
    price: 9047,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 15,
    category: "women",
    isNew: true,
    description:
      "Floor-length modest maxi dress with long sleeves. Elegant silhouette for any occasion.",
  },
  {
    id: "8",
    name: "Arabic Script Women's Tee",
    price: 4067,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
      "https://images.unsplash.com/photo-1485968579169-a6b30571e7c4?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L"],
    stock: 20,
    category: "women",
    description:
      "Relaxed fit women's tee with elegant Arabic calligraphy. Soft cotton blend.",
  },
  // Print On Demand - Customizable
  {
    id: "9",
    name: "Custom Arabic Name Tee",
    price: 5727,
    images: [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 100,
    category: "pod",
    isNew: true,
    isCustomizable: true,
    description:
      "Create your own! Enter your name or any text in Arabic or English. Premium DTG printing.",
  },
  {
    id: "10",
    name: "Custom Arabic Quote Hoodie",
    price: 8217,
    images: [
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 100,
    category: "pod",
    isCustomizable: true,
    description:
      "Design your hoodie with any Arabic quote or English text. High-quality embroidery or print.",
  },
  {
    id: "11",
    name: "Custom Cap - Your Text",
    price: 4067,
    images: [
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800&q=80",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80",
    ],
    sizes: ["One Size"],
    stock: 100,
    category: "pod",
    isCustomizable: true,
    isBestSeller: true,
    description:
      "Personalize your cap with Arabic calligraphy or English text. Embroidered to perfection.",
  },
  // Accessories
  {
    id: "12",
    name: "Arabic Tote Bag",
    price: 2905,
    images: [
      "https://images.unsplash.com/photo-1597633125184-9fd7e54f4e49?w=800&q=80",
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80",
    ],
    sizes: ["One Size"],
    stock: 40,
    category: "accessories",
    description:
      "Heavy-duty canvas tote with Arabic typography. Perfect everyday carry.",
  },
  {
    id: "13",
    name: "Prayer Beads - Tasbih",
    price: 2075,
    images: [
      "https://images.unsplash.com/photo-1585686369536-c59bd03d3c98?w=800&q=80",
      "https://images.unsplash.com/photo-1609158584287-7de33b98e1dc?w=800&q=80",
    ],
    sizes: ["33 Beads", "99 Beads"],
    stock: 50,
    category: "accessories",
    description:
      "Handcrafted prayer beads in various materials. Elegant and meaningful accessory.",
  },
  {
    id: "14",
    name: "Arabic Beanie",
    price: 2407,
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80",
      "https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?w=800&q=80",
    ],
    sizes: ["One Size"],
    stock: 22,
    category: "accessories",
    isNew: true,
    description:
      "Cozy knit beanie with subtle Arabic embroidery. Warm and stylish.",
  },
]

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products
  return products.filter((p) => p.category === category)
}

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.isNew)
}

export const getBestSellers = (): Product[] => {
  return products.filter((p) => p.isBestSeller)
}

export const getLimitedStock = (): Product[] => {
  return products.filter((p) => p.stock <= 10)
}

export const getCustomizableProducts = (): Product[] => {
  return products.filter((p) => p.isCustomizable)
}
