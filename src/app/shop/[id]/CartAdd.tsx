"use client";

import { Product } from "@prisma/client";
import { CartContextItems, useCart } from "../../CartProvider";

export default function AddToCart({ item }: { item: Product }) {
  const { insertIntoCart_context } = useCart() as CartContextItems;

  function addItem(item: Product) {
    item.quantity = 1;
    insertIntoCart_context(item);
  }

  return (
    <button
      onClick={() => addItem(item)}
      className="transition text-white font-bold hover:bg-green-600 bg-green-500 rounded-xl px-6 py-2"
    >
      Add To Cart
    </button>
  );
}
