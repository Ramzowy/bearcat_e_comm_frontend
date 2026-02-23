import { Star } from "lucide-react";

const features = [
  {
    title: "Premium Quality",
    description: "High-quality materials and construction for lasting wear",
  },
  {
    title: "Official Merchandise",
    description: "Authentic UC Bearcats gear with official logos",
  },
  {
    title: "Fast Shipping",
    description: "Quick delivery to show your Bearcat pride sooner",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 bg-white border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="h-8 w-8 text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
