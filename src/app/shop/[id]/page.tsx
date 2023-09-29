import { getProduct, getProducts } from "@/utils/product"
import { redirect } from "next/navigation"

export async function generateStaticParams() {
    const product = await getProducts(0, 20)

    return product?.map(product => ({
        id: product.id
    }))
}

export default async function Page({ params }: any) {
    const product = await getProduct(String(params.id))
    if (!product) throw redirect("/")

    return (
        <div>
            {product?.name}
        </div>
    )
}
