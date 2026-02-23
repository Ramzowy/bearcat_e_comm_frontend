import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-7 bg-gradient-to-br from-black via-gray-900 to-red-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-[40rem] font-black text-white/10 select-none leading-none">
            UC
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-6">
          Join the <span className="text-red-600">Bearcat Nation</span>
        </h2>
        <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Represent the University of Cincinnati with pride. From game day
          essentials to everyday wear, we have everything you need to show your
          Bearcat spirit.
        </p>
        <Link href="/products">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-7 text-lg rounded-lg shadow-2xl hover:shadow-red-600/50 transition-all"
          >
            Start Shopping
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
