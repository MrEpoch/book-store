"use client";
import Image from "next/image";
import { CartContextItems, CartType, useCart } from "../app/CartProvider";
import { useEffect, useState } from "react";
import WhiteSpace from "@/assets/WhiteSpace.webp";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function CartItems({ item }: { item: CartType }) {
  const { updateQuantity_context } = useCart() as CartContextItems;

  const [imgUrl, setImgUrl] = useState<string>("");

  async function getImgUrl() {
    const supabase = createClientComponentClient();
    const { data } = supabase.storage
      .from("book-store")
      .getPublicUrl(`images/${item.image}`);
    if (data) setImgUrl(data.publicUrl);
  }

  useEffect(() => {
    if (item.image) getImgUrl();
  }, [item]);

  const updateCart = (e: any) => {
    if (Number.isNaN(Number.parseInt(e.target.value))) {
      return;
    }
    item.quantity = Number.parseInt(e.target.value);
    updateQuantity_context(item);
  };

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={imgUrl.length > 0 ? imgUrl : WhiteSpace}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
          width={150}
          height={150}
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium dark:text-white text-gray-900">
            <h3 className="word-break">{item.name}</h3>
            <p className="ml-4">${item.price}</p>
          </div>
          <p className="mt-1 word-break text-sm text-gray-500">
            {item.description.slice(0, 50)}
          </p>
        </div>
        <div className="flex flex-1 gap-3 items-end justify-between text-sm">
          <input
            type="number"
            className="text-gray-500
        dark:text-gray-200 max-w-[100px] w-full dark:bg-gray-800"
            value={item.quantity}
            onChange={updateCart}
          />
          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
