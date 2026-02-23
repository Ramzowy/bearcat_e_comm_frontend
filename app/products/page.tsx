"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";
// import { getProducts } from "./actions";

export default function ProductsPage() {
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

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredAndSortedProducts: Product[] = [];

  // useEffect(() => {
  //   getProducts().then(setProducts);
  // }, []);

  // const filteredAndSortedProducts = useMemo(() => {
  //   let filtered = products;

  //   if (selectedCategory !== "all") {
  //     filtered = products!.filter((p) => p.category === selectedCategory);
  //   }

  //   const sorted = [...filtered!];
  //   switch (sortBy) {
  //     case "price-low":
  //       sorted.sort((a, b) => a.price - b.price);
  //       break;
  //     case "price-high":
  //       sorted.sort((a, b) => b.price - a.price);
  //       break;
  //     case "name":
  //       sorted.sort((a, b) => a.name.localeCompare(b.name));
  //       break;
  //     default:
  //       sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  //   }

  //   return sorted;
  // }, [products, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop Bearcats Gear
          </h1>
          <p className="text-red-100 text-lg">
            Find your perfect UC Bearcats apparel and accessories
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2 flex-1">
            <Filter className="h-5 w-5 text-gray-600" />
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="apparel">Apparel</SelectItem>
                <SelectItem value="activewear">Activewear</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name: A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold">
              {filteredAndSortedProducts.length}
            </span>{" "}
            products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.featured && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      FEATURED
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-red-600 font-bold text-xl">
                    ${product.price.toFixed(2)}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
