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

export const products: Product[] = [
  {
    id: "1",
    name: "Bearcats Classic Red Hoodie",
    price: 54.99,
    description:
      "Stay warm and show your Bearcat pride with this premium cotton-blend hoodie featuring the iconic UC logo. Perfect for game days or everyday wear.",
    category: "apparel",
    images: [
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    featured: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Cincinnati Bearcats Black Tee",
    price: 29.99,
    description:
      "Classic black cotton t-shirt with bold red Bearcats lettering. Comfortable fit for any occasion.",
    category: "apparel",
    images: [
      "https://images.pexels.com/photos/8532678/pexels-photo-8532678.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    featured: true,
    inStock: true,
  },
  {
    id: "3",
    name: "UC Bearcats Performance Jersey",
    price: 64.99,
    description:
      "Moisture-wicking performance jersey perfect for workouts or cheering on the Bearcats. Features breathable fabric and athletic fit.",
    category: "activewear",
    images: [
      "https://images.pexels.com/photos/8715895/pexels-photo-8715895.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: true,
    inStock: true,
  },
  {
    id: "4",
    name: "Bearcats Snapback Cap",
    price: 32.99,
    description:
      "Adjustable snapback cap with embroidered Bearcats logo. Red and black colorway with structured fit.",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/1202721/pexels-photo-1202721.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    sizes: ["One Size"],
    featured: false,
    inStock: true,
  },
  {
    id: "5",
    name: "Cincinnati Zip-Up Jacket",
    price: 79.99,
    description:
      "Premium zip-up jacket in Bearcats red with black trim. Features front pockets and comfortable fleece lining.",
    category: "apparel",
    images: [
      "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: false,
    inStock: true,
  },
  {
    id: "6",
    name: "Bearcats Vintage Crewneck",
    price: 49.99,
    description:
      "Retro-style crewneck sweatshirt with vintage Bearcats graphics. Soft cotton blend for all-day comfort.",
    category: "apparel",
    images: [
      "https://images.pexels.com/photos/8532612/pexels-photo-8532612.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    featured: true,
    inStock: true,
  },
  {
    id: "7",
    name: "UC Bearcats Track Pants",
    price: 44.99,
    description:
      "Comfortable track pants with Bearcats branding down the leg. Perfect for the gym or lounging.",
    category: "activewear",
    images: [
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: false,
    inStock: true,
  },
  {
    id: "8",
    name: "Bearcats Athletic Shorts",
    price: 34.99,
    description:
      "Lightweight athletic shorts with mesh panels and Bearcats logo. Ideal for training and game day.",
    category: "activewear",
    images: [
      "https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: false,
    inStock: true,
  },
  {
    id: "9",
    name: "Cincinnati Bearcats Polo",
    price: 44.99,
    description:
      "Classic polo shirt with embroidered Bearcats logo. Perfect for a polished, spirited look.",
    category: "apparel",
    images: [
      "https://images.pexels.com/photos/8532682/pexels-photo-8532682.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: false,
    inStock: true,
  },
  {
    id: "10",
    name: "UC Bearcats Backpack",
    price: 59.99,
    description:
      "Durable backpack with multiple compartments and padded laptop sleeve. Features Bearcats logo and red accents.",
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    sizes: ["One Size"],
    featured: false,
    inStock: true,
  },
  {
    id: "11",
    name: "Bearcats Long Sleeve Tee",
    price: 36.99,
    description:
      "Long sleeve t-shirt in black with bold red Bearcats graphics. Comfortable cotton fabric.",
    category: "apparel",
    images: [
      "https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    featured: false,
    inStock: true,
  },
  {
    id: "12",
    name: "Cincinnati Quarter-Zip Pullover",
    price: 59.99,
    description:
      "Stylish quarter-zip pullover in Bearcats colors. Great for layering on cooler days.",
    category: "apparel",
    images: [
      "https://images.pexels.com/photos/8532679/pexels-photo-8532679.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: true,
    inStock: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
