"use client";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart, updateQty } from "@/store/cartSlice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between mb-3 border-b pb-2"
          >
            <div>
              <h2 className="font-semibold">{p.title}</h2>
              <p>${p.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => dispatch(updateQty({ id: p.id, qty: p.qty - 1 }))}>-</button>
              <span>{p.qty}</span>
              <button onClick={() => dispatch(updateQty({ id: p.id, qty: p.qty + 1 }))}>+</button>
              <button
                onClick={() => dispatch(toggleCart(p))}
                className="text-red-500 ml-4"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <div className="mt-6 text-xl font-semibold">Total: ${total.toFixed(2)}</div>
    </div>
  );
}
