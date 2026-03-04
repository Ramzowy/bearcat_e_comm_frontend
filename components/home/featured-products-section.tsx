import { getFeaturedProducts } from "@/app/products/actions";
import { FeaturedProductsClient } from "@/components/home/featured-products-client";

export async function FeaturedProductsSection() {
  const featuredProducts = await getFeaturedProducts();

  if (featuredProducts.length === 0) {
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

        <FeaturedProductsClient products={featuredProducts} />
      </div>
    </section>
  );
}
