import { getProduct } from "@/utils/product";
import { redirect } from "next/navigation";
const ShopItemImage = dynamic(() => import("./ShopItemImage"), 
    {
        loading: () => <div className="max-h-[500px] h-full w-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    }
);
import AddToCart from "./CartAdd";
import dynamic from "next/dynamic";
import PayNowBtn from "./Paynow";

export default async function Page({ params, searchParams }: any) {
  const product = await getProduct(String(params.id));
  if (!product) {
    throw redirect("/shop");
  }

  return (
    <div className="min-h-screen w-full py-32 dark:bg-darkmode-500">
      <div className="max-w-screen-xl px-7 mx-auto">
          <div className="w-full flex md:flex-row flex-col md:max-h-[550px] dark:bg-black rounded-lg shadow-md bg-gray-200">
          <ShopItemImage imageUrl={product.image} />
          <div className="w-full p-8 flex flex-col gap-4 py-16 brightness-100">
            <div className="h-full w-full flex flex-col gap-3">
              <h1 className="lg:text-3xl text-2xl break-words  font-extrabold text-gray-900 dark:text-white">
                {product.name}
              </h1>
              <div className="border border-gray-700" />
              <h3 className="text-lg text-gray-900 dark:text-white">
                Category: {product.category}
              </h3>
              <h3 className="text-lg text-white bg-gradient-to-br from-green-600 to-cyan-500 px-4 dark:text-white w-fit rounded-xl">
                ${product.price}
              </h3>
              <h3 className="text-lg text-gray-900 dark:text-white">
                Left: {product.quantity}
              </h3>
              <p className="mt-4 overflow-y-auto break-words text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
            </div>
            <div className="flex sm:flex-row flex-col gap-3 items-center w-full mt-12 justify-center">
              <AddToCart item={product} />
              <PayNowBtn item={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
