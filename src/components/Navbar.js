"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.qty, 0)
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <Link href="/" className="text-lg font-semibold text-black">
        🛍 My Shop
      </Link>

      <div className="flex gap-6 items-center">
        <Link href="/" className="text-black">
          Products
        </Link>
        <Link href="/cart" className="relative text-black">
          Cart
          {isClient && cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
