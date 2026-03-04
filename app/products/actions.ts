// "use server";

export interface Product {
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

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:8080/api/products/all", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:8080/products/featured", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
