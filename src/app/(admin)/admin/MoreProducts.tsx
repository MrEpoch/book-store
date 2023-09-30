'use client';
import Link from "next/link";
import { useState } from "react";

export default function MoreProducts() {
    const [products, setProducts] = useState<any[]>([]);
    const [skip, setSkip] = useState(10);
    async function LoadNext() {
        const res = await fetch(`/api-admin/more?skip=${skip}&take=10`);
        const data = await res.json();
        setProducts(data.products);
        if (data.products.length === 10) setSkip((prev) => prev + 10);
    }

    return (
    <>
        {products.map((product, i) => (
            <tr key={i} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.name}
                </th>
                <td className="px-6 py-4">
                    <Link className="font-medium text-green-600 dark:text-green-500 hover:underline" href={`/admin/quantity-product/${product.id}`}>{product.quantity}</Link>
                </td>
                <td className="px-6 py-4">
                    {product.orderCount}
                </td>
                <td className="px-6 py-4">
                    {product.category}
                </td>
                <td className="px-6 py-4">
                    {product.price}
                </td>
                <td className="px-6 py-4">
                    <Link href={`/admin/update-product/${product.id}`} className="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</Link>
                </td>
            </tr>
        ))}
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td colSpan={6}>
                <button onClick={LoadNext} className="font-medium text-center w-full flex justify-center py-4 text-green-600 dark:text-green-500 hover:underline">Load more</button>
            </td>
        </tr>
    </>
    );
}
