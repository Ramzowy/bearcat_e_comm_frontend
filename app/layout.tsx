import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import { AuthProvider } from "@/lib/auth-context";
// import { AuthGuard } from "@/components/auth-guard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UC Bearcats Shop - Official University of Cincinnati Merchandise",
  description:
    "Shop official University of Cincinnati Bearcats apparel, activewear, and accessories. Show your Bearcat pride!",
  openGraph: {
    images: [
      {
        url: "https://bolt.new/static/og_default.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "https://bolt.new/static/og_default.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="container-center">
          <div className="flex flex-col">
            {/* <AuthProvider>
              <AuthGuard> */}
            <div className="flex flex-col">
              <main className="flex-1">{children}</main>
            </div>
            {/* </AuthGuard>
            </AuthProvider> */}
          </div>
        </div>
      </body>
    </html>
  );
}
