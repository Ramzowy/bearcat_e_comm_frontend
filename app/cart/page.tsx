"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { useCart } from '@/lib/cart-context';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
// import { useToast } from '@/hooks/use-toast';
// import { Toaster } from '@/components/ui/toaster';

export default function CartPage() {
  //   const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  //   const { toast } = useToast();

  const dummyItems = [
    {
      id: "1",
      name: "Bearcats Classic Hoodie",
      price: 49.99,
      size: "L",
      quantity: 2,
      image: "https://placehold.co/600x400/red/white?text=Hoodie",
    },
    {
      id: "2",
      name: "UC Snapback Cap",
      price: 24.99,
      size: "One Size",
      quantity: 1,
      image: "https://placehold.co/600x400/red/white?text=Cap",
    },
    {
      id: "3",
      name: "Bearcats Game Day T-Shirt",
      price: 29.99,
      size: "XL",
      quantity: 3,
      image: "https://placehold.co/600x400/red/white?text=T-Shirt",
    },
    {
      id: "4",
      name: "Cincinnati Bearcats Sweatpants",
      price: 44.99,
      size: "M",
      quantity: 1,
      image: "https://placehold.co/600x400/red/white?text=Sweatpants",
    },
  ];

  const items: any[] = dummyItems;
  const removeItem: any[] = [];
  const updateQuantity: any[] = [];
  const totalPrice = 0;
  const clearCart: any[] = [];

  const [promoCode, setPromoCode] = useState("");
  //   const shippingCost = totalPrice > 75 ? 0 : 7.99;
  //   const finalTotal = totalPrice + shippingCost;
  const shippingCost: number = 0;
  const finalTotal = totalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto text-center p-8">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Add some Bearcats gear to get started!
            </p>
            <Link href="/products">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Shop Now
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-red-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Shopping Cart
            </h1>
            <p className="text-red-100 text-lg">
              Review your items and checkout
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Link href="/products">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={`${item.id}-${item.size}`}
                        className="flex gap-4 pb-4 border-b last:border-b-0"
                      >
                        <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold mb-1 truncate">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Size: {item.size}
                          </p>
                          <p className="text-red-600 font-bold">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        <div className="flex flex-col items-end justify-between">
                          <Button
                            variant="ghost"
                            size="icon"
                            /* onClick={() => removeItem(item.id, item.size)} */
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>

                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              /*  onClick={() =>
                                updateQuantity(item.id, item.size, item.quantity - 1) 
                              } */
                              className="h-8 w-8"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              /*   onClick={() =>
                                updateQuantity(item.id, item.size, item.quantity + 1)
                              } */
                              className="h-8 w-8"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <Button
                      variant="outline"
                      /*    onClick={() => {
                        clearCart();
                        toast({
                          title: "Cart cleared",
                          description: "All items have been removed from your cart.",
                        });
                      }} */
                      className="text-red-600 hover:text-red-700 border-red-600"
                    >
                      Clear Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>
                        Subtotal (
                        {items.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                        items)
                      </span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>
                        {" "}
                        {shippingCost === 0
                          ? "FREE"
                          : `$${shippingCost.toFixed(2)}`}{" "}
                      </span>
                    </div>
                    {shippingCost > 0 && (
                      <p className="text-xs text-gray-500">
                        Free shipping on orders over $75
                      </p>
                    )}
                    <div className="border-t pt-3 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-red-600">
                        ${finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <Button
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                    >
                      Proceed to Checkout
                    </Button>
                  </Link>

                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-semibold mb-3 text-sm">We Accept</h3>
                    <div className="flex gap-2">
                      <div className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold">
                        VISA
                      </div>
                      <div className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold">
                        MC
                      </div>
                      <div className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold">
                        AMEX
                      </div>
                      <div className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold">
                        DISC
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-gray-500">
                    <p>• Secure checkout guaranteed</p>
                    <p>• 30-day return policy</p>
                    <p>• Official UC Bearcats merchandise</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* <Toaster /> */}
    </>
  );
}
