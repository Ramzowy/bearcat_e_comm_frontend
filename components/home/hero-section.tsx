import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 min-h-[600px]">
      {/* Background Pattern */}
      <div className="absolute inset-0  opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
      </div>

      {/* Diagonal Stripe */}
      <div className="absolute -right-32 top-0 bottom-0 w-1/2  bg-red-600 transform skew-x-[-12deg] hidden lg:block" />

      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 z-10">
            <Badge
              variant="secondary"
              className="mt-6 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 border-0"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse inline-block mr-2"></span>
              New Season Collection 2026
            </Badge>

            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              <span className="block text-black">WEAR YOUR</span>
              <span className="block text-red-600 mt-2">BEARCAT</span>
              <span className="block text-black mt-2">PRIDE</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Official University of Cincinnati merchandise. Show your spirit
              with premium quality gear designed for true Bearcats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-6 text-base rounded-lg transition-all"
                >
                  View Sale Items
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[300px] font-black text-white/20 select-none">
                UC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
