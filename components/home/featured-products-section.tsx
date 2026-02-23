"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

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

export function FeaturedProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:8080/api/products/featured",
  //         {
  //           credentials: "include",
  //         },
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch featured products");
  //       }

  //       const data: Product[] = await response.json();
  //       setProducts(data);
  //     } catch (err) {
  //       console.error("Error fetching products:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  if (loading) {
    return <section></section>;
  }

  return (
    <section className="py-15 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Featured Products</h2>
          <p className="text-gray-600 text-xl">
            Our most popular Bearcats gear
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden group border-0 bg-white">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-red-600 font-black text-2xl">
                    ${product.price}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-6 text-base rounded-lg transition-all"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
