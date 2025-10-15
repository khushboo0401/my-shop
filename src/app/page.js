"use client";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/store/cartSlice";
import Image from "next/image";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const isInCart = (id) => cart.some((item) => item.id === id);

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    return products.filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  return (
    <div className="p-8">
      {/* Search Bar */}
      <div className="mb-8 ">
        <div className="max-w-md mx-auto">
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => {
            const added = isInCart(p.id);
            return (
              <div
                key={p.id}
                className="border p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h2 className="text-lg font-semibold mt-2">{p.title}</h2>
                <p className="text-gray-600 mb-2">${p.price}</p>

                <button
                  onClick={() => dispatch(toggleCart(p))}
                  className={`px-3 py-1 rounded text-white ${
                    added ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {added ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-10 ">
            <p className="text-gray-500 text-lg">No products found matching &quot;{searchQuery}&quot;</p>
          </div>
        )}
      </div>
    </div>
  );
}
