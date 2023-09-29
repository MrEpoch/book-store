import { getProduct } from "@/utils/product";
import ImageComponents from "./ImageComponents";
import { redirect } from "next/navigation";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { error?: string };
}) {
  const product = await getProduct(String(params.id));

  if (!product) throw redirect("/");

  return (
    <div className="min-h-screen dark:bg-black/10 dark:text-white/90 py-[5rem]">
      {searchParams?.error && <p className="text-red-500"></p>}
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 relative">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Update Product
        </h2>
        <form
          action="/api-admin/delete"
          method="POST"
          className="absolute top-2 right-2"
        >
          <input type="hidden" name="id" value={product.id} />
          <button
            type="submit"
            className="hover:bg-red-600 transition bg-red-500 px-4 py-2 rounded-md text-white"
          >
            Delete
          </button>
        </form>
        <form action="?/update" method="POST" encType="multipart/form-data">
          <input type="hidden" name="id" value={product.id} />
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={product.name}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="StripeId"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Stripe Id
              </label>
              <input
                type="text"
                value={product.stripeProductId}
                name="stripeId"
                id="stripeId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Stripe Price Id"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                step="0.01"
                value={product.price}
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$29"
                required
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={product.category}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected value="fantasy">
                  Fantasy
                </option>
                <option value="scifi">Sci-fi</option>
                <option value="history">History</option>
                <option value="romance">Romance</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                value={product.description}
                id="description"
                name="description"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              />
            </div>
            <div className="h-80 group relative sm:col-span-2">
              <ImageComponents imgUrl={product.image} />
            </div>
          </div>
          <button
            type="submit"
            className="w-full items-center
                        px-5 py-3 mt-4 sm:mt-6 text-sm font-medium text-center
                        text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200
                        dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Update product
          </button>
        </form>
      </div>
    </div>
  );
}
