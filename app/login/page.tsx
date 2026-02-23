"use client";

import { useState } from "react";
// import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LockKeyhole } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { login } = useAuth();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError("");
  //   setIsSubmitting(true);

  //   try {
  //     await login(email, password);
  //   } catch (err) {
  //     setError("Invalid email or password. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <Card className="w-full max-w-md shadow-xl -translate-y-16">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-2">
            <LockKeyhole className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to your account to continue shopping
          </CardDescription>
        </CardHeader>
        <form /*onSubmit={handleSubmit} */>
          <CardContent className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isSubmitting}
                className="h-11"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="mt-4 text-white w-full h-11 bg-slate-900 hover:bg-slate-800"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
            <p className="text-sm text-center text-slate-600">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-slate-900 hover:underline font-medium"
              >
                Create one
              </a>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
