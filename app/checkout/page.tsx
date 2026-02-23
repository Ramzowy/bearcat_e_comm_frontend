"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
// import { useCart } from '@/lib/cart-context';
// import { useToast } from '@/hooks/use-toast';
// import { Toaster } from '@/components/ui/toaster';
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  //   const { items, totalPrice, clearCart } = useCart();
  //   const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [sameAddress, setSameAddress] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  //   const shippingCost = totalPrice > 75 ? 0 : 7.99;
  //   const taxRate = 0.07;
  //   const tax = totalPrice * taxRate;
  //   const finalTotal = totalPrice + shippingCost + tax;

  const dummyItems = [
    {
      id: "1",
      name: "Bearcats Classic Hoodie",
      price: 49.99,
      size: "L",
      quantity: 2,
      image: "https://placehold.co/600x400/red/white?text=Hoodie",
    },
    {
      id: "2",
      name: "UC Snapback Cap",
      price: 24.99,
      size: "One Size",
      quantity: 1,
      image: "https://placehold.co/600x400/red/white?text=Cap",
    },
    {
      id: "3",
      name: "Bearcats Game Day T-Shirt",
      price: 29.99,
      size: "XL",
      quantity: 3,
      image: "https://placehold.co/600x400/red/white?text=T-Shirt",
    },
    {
      id: "4",
      name: "Cincinnati Bearcats Sweatpants",
      price: 44.99,
      size: "M",
      quantity: 1,
      image: "https://placehold.co/600x400/red/white?text=Sweatpants",
    },
  ];

  const items: any[] = dummyItems;
  const removeItem: any[] = [];
  const updateQuantity: any[] = [];
  const totalPrice = 0;
  const clearCart: any[] = [];
  const shippingCost: number = 0;
  const tax: number = 0;
  const finalTotal = totalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto text-center p-8">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Add items to proceed with checkout.
            </p>
            <Link href="/products">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Continue Shopping
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSelectChange = (name: string, value: string) => {
  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  //   const validateForm = () => {
  //     if (!formData.firstName || !formData.lastName || !formData.email) {
  //       toast({
  //         title: 'Missing information',
  //         description: 'Please fill in all required fields.',
  //         variant: 'destructive',
  //       });
  //       return false;
  //     }

  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!emailRegex.test(formData.email)) {
  //       toast({
  //         title: 'Invalid email',
  //         description: 'Please enter a valid email address.',
  //         variant: 'destructive',
  //       });
  //       return false;
  //     }

  //     if (!formData.address || !formData.city || !formData.state || !formData.zipCode) {
  //       toast({
  //         title: 'Missing address',
  //         description: 'Please fill in all address fields.',
  //         variant: 'destructive',
  //       });
  //       return false;
  //     }

  //     if (
  //       !formData.cardName ||
  //       !formData.cardNumber ||
  //       !formData.expiry ||
  //       !formData.cvv
  //     ) {
  //       toast({
  //         title: 'Missing payment info',
  //         description: 'Please fill in all payment fields.',
  //         variant: 'destructive',
  //       });
  //       return false;
  //     }

  //     return true;
  //   };

  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();

  //     if (!validateForm()) return;

  //     setIsProcessing(true);

  //     setTimeout(() => {
  //       clearCart();
  //       setIsProcessing(false);
  //       toast({
  //         title: 'Order placed successfully!',
  //         description: 'Your order has been confirmed. Check your email for details.',
  //       });

  //       setTimeout(() => {
  //         router.push('/');
  //       }, 2000);
  //     }, 1500);
  //   };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-red-600 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Checkout</h1>
            <p className="text-red-100 text-lg">
              Complete your UC Bearcats order
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Link href="/cart">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form /* onSubmit={handleSubmit} */ className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          /* onChange={handleInputChange} */
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          /*   onChange={handleInputChange} */
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          /*  onChange={handleInputChange} */
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          /*   onChange={handleInputChange} */
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        /* onChange={handleInputChange} */
                        placeholder="123 Main Street"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          /*    onChange={handleInputChange} */
                          placeholder="Cincinnati"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          /*     onChange={handleInputChange} */
                          placeholder="OH"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          /*   onChange={handleInputChange} */
                          placeholder="45221"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select
                        value={formData.country}
                        /*  onValueChange={(value) => handleSelectChange('country', value)} */
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="US">United States</SelectItem>
                          <SelectItem value="CA">Canada</SelectItem>
                          <SelectItem value="MX">Mexico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Billing Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="sameAddress"
                        checked={sameAddress}
                        onCheckedChange={(checked) =>
                          setSameAddress(checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="sameAddress"
                        className="font-normal cursor-pointer"
                      >
                        Same as shipping address
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="cardName">Name on Card *</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        /*    onChange={handleInputChange} */
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        /*   onChange={handleInputChange} */
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date *</Label>
                        <Input
                          id="expiry"
                          name="expiry"
                          value={formData.expiry}
                          /*   onChange={handleInputChange} */
                          placeholder="MM/YY"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          /*     onChange={handleInputChange} */
                          placeholder="123"
                          maxLength={3}
                          required
                        />
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 bg-blue-50 p-3 rounded-lg">
                      This is a demo store. No actual payment will be processed.
                      Use any valid card format for testing.
                    </div>
                  </CardContent>
                </Card>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-lg"
                  disabled={isProcessing}
                >
                  {isProcessing
                    ? "Processing..."
                    : `Place Order - $${finalTotal.toFixed(2)}`}
                </Button>
              </form>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {items.map((item) => (
                      <div
                        key={`${item.id}-${item.size}`}
                        className="flex justify-between items-start text-sm pb-3 border-b last:border-b-0"
                      >
                        <div>
                          <p className="font-medium line-clamp-2">
                            {item.name}
                          </p>
                          <p className="text-gray-500 text-xs">
                            Size {item.size} × {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shippingCost === 0
                          ? "FREE"
                          : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (7%)</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-red-600">
                        ${finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
                    <p>✓ Secure SSL encryption</p>
                    <p>✓ 30-day return policy</p>
                    <p>✓ Order confirmation email</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* <Toaster /> */}
    </>
  );
}
