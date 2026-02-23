import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-red-600">UC</span> Bearcats Shop
            </h3>
            <p className="text-gray-400 text-sm">
              Official University of Cincinnati Bearcats merchandise. Show your
              pride with premium quality apparel and accessories.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-red-600 text-sm transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=apparel"
                  className="text-gray-400 hover:text-red-600 text-sm transition-colors"
                >
                  Apparel
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=activewear"
                  className="text-gray-400 hover:text-red-600 text-sm transition-colors"
                >
                  Activewear
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=accessories"
                  className="text-gray-400 hover:text-red-600 text-sm transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-red-600 text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-red-600 text-sm transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-red-600 text-sm transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-red-600 text-sm transition-colors"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Stay updated with the latest Bearcats gear and exclusive offers.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2026 University of Cincinnati Bearcats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
