// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";
// import { useRouter } from "next/navigation";
// import { set } from "react-hook-form";

// interface AuthContextType {
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
//   isAuthenticated: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const router = useRouter();

//   const login = async (email: string, password: string) => {
//     try {
//       const response = await fetch("http://localhost:8080/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//         credentials: "include",
//       });

//       if (!response.ok) {
//         throw new Error("Login failed");
//       }

//       const data = await response.text();
//       setIsAuthenticated(true);
//       router.push("/");
//     } catch (error) {
//       console.error("Login error:", error);
//       throw error;
//     }
//   };

//   const logout = () => {
//     router.push("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }
