"use client";

import { useCart } from "../../CartProvider";

export default function AddToCart({ item }: { item }) {
  const { insertIntoCart_context } = useCart();

  function addItem(item) {
    item.quantity = 1;
    insertIntoCart_context(item);
  }

  return (
    <button
      onClick={() => addItem(item)}
      className="transition hover:bg-green-600 bg-green-500 rounded-xl px-6 py-2"
    >
      Add To Cart
    </button>
  );
}
