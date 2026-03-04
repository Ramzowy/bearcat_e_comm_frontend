"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ProductModal } from "@/app/products/product-modal";
import { Product } from "@/lib/products";

interface Props {
  products: Product[];
}

export function FeaturedProductsClient({ products }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              setSelectedProduct(product);
              setIsOpen(true);
            }}
            className="cursor-pointer"
          >
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
                <h3 className="font-bold text-lg mb-3">{product.name}</h3>
                <p className="text-red-600 font-black text-2xl">
                  ${product.price}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
