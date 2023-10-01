"use client";
import { useState } from "react";
import ImageComponents from "./ImageComponents";
import { Categories, Product } from "@prisma/client";

export default function Form({ product_server }: { product_server: Product }) {
  const [product, setProduct] = useState(product_server);

  return (
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
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
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
            onChange={(e) =>
              setProduct({ ...product, stripeProductId: e.target.value })
            }
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
            onChange={(e) =>
              setProduct({ ...product, price: parseFloat(e.target.value) })
            }
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
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value as Categories })
            }
            value={product.category}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="fantasy">Fantasy</option>
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
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
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
                        text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-green-200
                        dark:focus:ring-green-900 hover:bg-green-800"
      >
        Update product
      </button>
    </form>
  );
}
