'use client';
import { useState } from "react";
import ShopItem from "./ShopItem";

export default function MoreProducts() {
    const [products, setProducts] = useState<any[]>([]);
    const [skip, setSkip] = useState(10);
    async function LoadNext() {
        const res = await fetch(`/api-admin/more?skip=${skip}&take=10`);
        const data = await res.json();
        console.log(data.products[0].image);
        setProducts(data.products);
        setSkip((prev) => prev + 10);
    }

    return (
        <>
            <button className="absolute py-5 rounded-lg bottom-2 w-full border-[2px]" onClick={LoadNext}>Load More</button>
            {products.map(productOne => (
                <ShopItem item={productOne} key={productOne.id} />
            ))}
        </>
    )
}
