import { createProduct } from '@/utils/product'
import { StoreProductImage } from '@/utils/storage'
import { CheckProduct, CheckUpdatedProduct } from '@/utils/type-check'
import { Categories } from '@prisma/client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const typechecked = CheckUpdatedProduct(formData);
    const supabase = createClientComponentClient();

    if (typechecked?.error) {
        return NextResponse.redirect(requestUrl.origin + "/update-product?error=" + typechecked?.type, {
            status: 301,
        })
    }

    let image = typechecked.formerName;
    if (typechecked.image) {
        const newImage = await StoreProductImage(typechecked.image, supabase);
        if (newImage?.error) {
            return NextResponse.redirect(requestUrl.origin + "/update-product?error=image", {
                status: 301,
            })
        }
        image = newImage.image;
    }

    await createProduct(
        typechecked.name as string,
        typechecked.description as string,
        typechecked.category as Categories,
        typechecked.price as number,
        typechecked.stripeId as string,
        image as string
    ); 

    return NextResponse.redirect(requestUrl.origin + "/shop", {
        status: 301,
    })
}
