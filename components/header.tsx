"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = 0; // Replace with actual cart item count logic

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <span className="text-white font-black text-xl">UC</span>
            </div>
            <div className="hidden sm:flex items-baseline gap-1">
              <span className="text-xl font-black text-black tracking-tight">
                BEARCATS
              </span>
              <span className="text-xl font-black text-red-600 tracking-tight">
                GEAR
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/products?category=apparel"
              className="text-base font-medium transition-colors hover:text-red-600"
            >
              Men
            </Link>
            <Link
              href="/products?category=apparel"
              className="text-base font-medium transition-colors hover:text-red-600"
            >
              Women
            </Link>
            <Link
              href="/products?category=accessories"
              className="text-base font-medium transition-colors hover:text-red-600"
            >
              Accessories
            </Link>
            <Link
              href="/products"
              className="text-base font-medium transition-colors hover:text-red-600"
            >
              Sale
            </Link>
          </nav>

          <div className="flex items-center gap-3 flex-1 lg:flex-initial justify-end">
            <div className="hidden md:flex items-center relative max-w-md flex-1 lg:w-80">
              <Search className="absolute left-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search gear..."
                className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-red-600"
              />
            </div>

            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="mb-4 md:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search gear..."
                  className="pl-10 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/products?category=apparel"
                className="text-base font-medium transition-colors hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                href="/products?category=apparel"
                className="text-base font-medium transition-colors hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                href="/products?category=accessories"
                className="text-base font-medium transition-colors hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accessories
              </Link>
              <Link
                href="/products"
                className="text-base font-medium transition-colors hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sale
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
