"use client";

import { CartContextItems, useCart } from "../CartProvider";
import { PaymentContextType, usePayment } from "./PaymentContext";
import CartItems from "@/components/CartItems";

export default function CartForm() {
  const { cart } = useCart() as CartContextItems;
  const { raiseStep } = usePayment() as PaymentContextType;

  return (
    <>
      <div className="flex flex-col w-full">
        {cart.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
      {cart.length === 0 &&  [1,2,3,4].map((_,i) => (
          <div key={i} className="w-full h-24 bg-gray-200 dark:bg-gray-700 rounded-xl my-4 animate-pulse"></div>
        ))}
      </div>
      <button
        className="text-white
                    bg-green-700 hover:bg-green-800 focus:ring-4
                    focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5
                    items-centerring-green-800"
        onClick={raiseStep}
      >
        Checkout
      </button>
    </>
  );
}
