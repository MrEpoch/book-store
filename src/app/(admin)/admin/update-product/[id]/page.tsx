import { getProduct } from "@/utils/product";
import ImageComponents from "./ImageComponents";
import { redirect } from "next/navigation";
import Form from "./Form";
import { update } from "../../ErrTypes";

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
    <div className="min-h-screen dark:bg-gray-900 dark:text-white/90 py-[5rem]">
      {searchParams?.error && <p className="text-red-500">{update[searchParams?.error as keyof typeof update]}</p>}
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 relative">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Update Product
        </h2>
        <Form product_server={product} />        
        <form
          action="/api-admin/delete"
          method="POST"
          className="w-full mt-[1rem]"
        >
          <input type="hidden" name="id" value={product.id} />
          <button
            type="submit"
            className="hover:underline transition text-red-500 w-full py-3 rounded-md border-2 border-red-500"
          >
            Delete
          </button>
        </form>

      </div>
    </div>
  );
}
