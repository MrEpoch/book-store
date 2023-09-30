import { getProduct, getProducts } from "@/utils/product"
import { redirect } from "next/navigation"
import ShopItemImage from "./ShopItemImage"

export async function generateStaticParams() {
    const product = await getProducts(0, 20)

    return product?.map(product => ({
        id: product.id
    }))
}

export default async function Page({ params, searchParams }: any) {
    const product = await getProduct(String(params.id))
    if (!product) {
        throw redirect("/shop")
    }

    return (
        <div className="min-h-screen w-full py-32 dark:bg-gray-900">
            <div className="max-w-screen-xl px-7 mx-auto">
                <div className="w-full flex md:flex-row flex-col  md:aspect-video dark:bg-black rounded-lg shadow-md bg-gray-200">
                    <ShopItemImage imageUrl={product.image} />
                    <div className="w-full p-8 flex flex-col gap-4 py-16 brightness-100">
                        <div className="h-full w-full flex flex-col gap-3">
                            <h1 className="lg:text-3xl text-2xl break-words  font-extrabold text-gray-900 dark:text-white">{product.name}</h1>
                            <div className="border border-gray-700" />
                            <h3 className="text-lg text-gray-900 dark:text-white">Category: {product.category}</h3>
                            <h3 className="text-lg text-gray-900 bg-green-500 px-4 dark:text-white w-fit rounded-xl">${product.price} USD</h3>
                            <h3 className="text-lg text-gray-900 dark:text-white">Left: {product.quantity}</h3>
                            <p className="mt-4 text-gray-700 dark:text-gray-400">{product.description}</p>
                        </div>
                        <div className="flex w-full mt-12 justify-center">
                            <button className="transition hover:bg-green-600 bg-green-500 rounded-xl px-6 py-2">Add To Cart</button>
                            <button className="transition hover:bg-green-600 bg-green-500 rounded-xl px-6 py-2 ml-4">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
