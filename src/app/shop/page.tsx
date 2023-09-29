import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import MoreProducts from "./MoreProducts";
import ShopItem from "./ShopItem";
import { getProducts } from "@/utils/product";

export const revalidate = 0

export default async function Page() {
  const products = await getProducts(0, 10);

  return (
    <div className="min-h-screen py-[8rem] w-full dark:bg-gray-900">
      <div className="max-w-screen-2xl relative pb-[6rem] mx-auto px-4 sm:px-6 lg:px-8">  
        <div
          className="grid grid-cols-1 gap-x-6 gap-y-10
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          {products?.map((item, index) => (
            <ShopItem item={item} key={index} />
          ))}
      {products?.length === 10 && <MoreProducts />}
       </div>
      </div>
    </div>
  );
}
