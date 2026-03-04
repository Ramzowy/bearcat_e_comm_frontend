"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { set } from "react-hook-form";

interface AuthContextType {
  login: (email: string, password: string) => Promise<void>;
  // logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Initialize state from sessionStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if we're in the browser and if token exists in sessionStorage
    if (typeof window !== "undefined") {
      return !!sessionStorage.getItem("jwt_token");
    }
    return false;
  });

  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      const token = data.jwtToken;

      sessionStorage.setItem("jwt_token", token);

      setIsAuthenticated(true);
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // const logout = () => {
  //   router.push("/login");
  // };

  return (
    <AuthContext.Provider value={{ login, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
