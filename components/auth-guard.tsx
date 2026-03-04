"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Only redirect if NOT on login/register pages and NOT authenticated
    if (!isAuthenticated && pathname !== "/login" && pathname !== "/register") {
      router.push("/login");
    }
  }, [isAuthenticated, router, pathname]);

  return <>{children}</>;
}
