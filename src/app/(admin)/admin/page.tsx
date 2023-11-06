import { getProducts } from "@/utils/product";
import Link from "next/link";
import MoreProducts from "./MoreProducts";

export default async function Page() {
  const products = (await getProducts(0, 10)) || [];

  return (
    <div className="min-h-screen w-full dark:bg-darkmode-500 py-[5rem]">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 flex flex-col gap-10">
        <Link
          href="/admin/new-product"
          className="hover:bg-green-600 transition text-2xl bg-green-500 font-bold text-gray-900 dark:text-white text-center py-4 rounded-xl"
        >
          Add new product
        </Link>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs w-full bg-gray-50 dark:bg-gray-700 text-gray-700 uppercase  dark:text-gray-400">
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
                <tr
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  key={i}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-6 py-4">
                    <Link
                      className="font-medium text-green-600 dark:text-green-500 hover:underline"
                      href={`/admin/quantity-product/${product.id}`}
                    >
                      {product.quantity}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{product.orderCount}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/update-product/${product.id}`}
                      className="font-medium text-green-600 dark:text-green-500 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td className="px-6 py-4 text-center" colSpan={5}>
                    No products found
                  </td>
                </tr>
              )}
              {products.length === 10 && <MoreProducts />}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
