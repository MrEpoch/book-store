"use client";

import CartItems from "@/components/CartItems";
import { CartContextItems, useCart } from "../CartProvider";
import { PaymentContextType, usePayment } from "./PaymentContext";

export default function CartForm() {
  const { cart } = useCart() as CartContextItems;
  const { raiseStep } = usePayment() as PaymentContextType;

  return (
    <>
      <div className="flex flex-col w-full">
        {cart.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
      </div>
      <button
        className="text-white
                    bg-blue-700 hover:bg-blue-800 focus:ring-4
                    focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
                    items-centerring-blue-800"
        onClick={raiseStep}
      >
        Checkout
      </button>
    </>
  );
}
