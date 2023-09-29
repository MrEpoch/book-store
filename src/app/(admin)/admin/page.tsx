import { getProducts } from "@/utils/product";
import Link from "next/link";
import MoreProducts from "./MoreProducts";

export default async function Page() {
    const products = await getProducts(0, 10) || [];

    const z_products = [
      {
        name: "Product 1",
        ordersCount: 10,
        category: "Category 1",
        price: 10,
        id: 1
      },
      {
        name: "Product 2",
        ordersCount: 20,
        category: "Category 2",
        price: 20,
        id: 2
      },
      {
        name: "Product 3",
        ordersCount: 30,
        category: "Category 1",
        price: 30,
        id: 3
      },
      {
        name: "Product 4",
        ordersCount: 40,
        category: "Category 2",
        price: 40,
        id: 4
      },
      {
        name: "Product 5",
        ordersCount: 50,
        category: "Category 3",
        price: 50,
        id: 5
      },
      {
        name: "Product 6",
        ordersCount: 60,
        category: "Category 3",
        price: 60,
        id: 6
      },
      {
        name: "Product 7",
        ordersCount: 70,
        category: "Category 1",
        price: 70,
        id: 7
      },
      {
        name: "Product 8",
        ordersCount: 80,
        category: "Category 2",
        price: 80,
        id: 8
      },
      {
        name: "Product 9",
        ordersCount: 90,
        category: "Category 1",
        price: 90,
        id: 9
      },
      {
        name: "Product 10",
        ordersCount: 100,
        category: "Category 3",
        price: 100,
        id: 10
      }
    ];


  return (
    <div className="min-h-screen w-full dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs w-full bg-gray-700 text-gray-700 uppercase  dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Remaining
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Orders
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => (
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={i}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {product.name}
                                </th>
                                <td className="px-6 py-4">
                                    {product.quantity}
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
                        {products.length === 0 && (
                            <tr>
                                <td className="px-6 py-4 text-center" colSpan={5}>No products found</td>
                            </tr>
                        )}
                        {products.length === 10 && (
                            <MoreProducts />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}
