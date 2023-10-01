import { getProduct } from "@/utils/product";
import { redirect } from "next/navigation";
import { quantity } from "../../ErrTypes";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { error?: string };
}) {
  const product = await getProduct(String(params.id));
  if (!product) throw redirect("/admin");

  return (
    <div className="min-h-screen relative w-full dark:bg-gray-900 py-[7rem]">
      {searchParams?.error && (
        <p className="text-red-500">
          {quantity[searchParams?.error as keyof typeof quantity]}
        </p>
      )}
      <form
        action="/api-admin/quantity"
        method="POST"
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10"
      >
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          {product.name}
        </h1>
        <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Quantity: {product.quantity}
        </h3>
        <input
          name="quantity"
          type="number"
          placeholder="Write New Quantity"
          className="px-4 py-2"
        />
        <input name="id" type="hidden" value={product.id} />
        <button
          className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 transition rounded-lg"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}
