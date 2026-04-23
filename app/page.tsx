import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategorySection } from "@/components/category-section"
import { PodSection } from "@/components/pod-section"
import { DropSection } from "@/components/drop-section"
import { CulturalSection } from "@/components/cultural-section"
import { ShopSection } from "@/components/shop-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { StorySection } from "@/components/story-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CategorySection />
      <PodSection />
      <DropSection />
      <CulturalSection />
      <ShopSection />
      <SocialProofSection />
      <StorySection />
      <Footer />
    </main>
  )
}
