'use client';

import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { CartContextItems, useCart } from "../../CartProvider";

export default function PayNowBtn({ item }: { item: Product }) {
    const router = useRouter();
    const { insertIntoCart_context } = useCart() as CartContextItems;

    function handlePayment() {
        item.quantity = 1;
        insertIntoCart_context(item);
        router.push("/payment");
    }

    return (
        <button onClick={handlePayment} className="transition min-w-[10rem] font-bold text-white hover:bg-green-600 bg-green-500 rounded-xl px-6 py-2">
            Buy Now
        </button>
    )
}
