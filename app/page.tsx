import { getFeaturedProducts } from "@/lib/products";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { FeaturedProductsSection } from "@/components/home/featured-products-section";
import { CTASection } from "@/components/home/cta-section";
// import { useAuth } from "@/lib/auth-context";
// import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  // const featuredProducts = getFeaturedProducts();

  // const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  // const { isLoading } = useAuth();
  // const [error, setError] = useState<string | null>(null);

  interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: "apparel" | "accessories" | "activewear";
    images: string[];
    sizes: string[];
    featured: boolean;
    inStock: boolean;
  }

  // if (!isLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <p className="text-red-600">{error}</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <FeaturedProductsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
