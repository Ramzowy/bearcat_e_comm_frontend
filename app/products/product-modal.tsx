"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/lib/cart-context";
//import { useToast } from "@/hooks/use-toast";
import { Product } from "@/lib/products";
import { Plus, Minus, Heart } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();
  //const { toast } = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      //   toast({
      //     title: "Size required",
      //     description: "Please select a size before adding to cart.",
      //     variant: "destructive",
      //   });
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
      });
    }

    // toast({
    //   title: "Added to cart",
    //   description: `${quantity}x ${product.name} (Size ${selectedSize}) added to your cart.`,
    // });

    setSelectedSize("");
    setQuantity(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        <DialogDescription className="sr-only">
          Product details
        </DialogDescription>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <p className="text-white font-bold text-2xl">Out of Stock</p>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-sm text-gray-600 uppercase mb-2 font-semibold">
                {product.category}
              </p>
              <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
              <p className="text-3xl font-black text-red-600 mb-4">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <div className="space-y-6 flex-1">
              <div>
                <label className="block text-sm font-semibold mb-3">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-3 border rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-8">
              <Button
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="w-full py-3 border-2 border-gray-300 rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-red-600 hover:text-red-600 transition-colors"
              >
                <Heart
                  className={`h-5 w-5 ${
                    isWishlisted ? "fill-red-600 stroke-red-600" : ""
                  }`}
                />
                {isWishlisted ? "In Wishlist" : "Add to Wishlist"}
              </button>
            </div>

            <div className="mt-8 pt-8 border-t space-y-3 text-sm text-gray-600">
              <p>✓ Free shipping on orders over $75</p>
              <p>✓ 30-day return policy</p>
              <p>✓ Official UC Bearcats merchandise</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
