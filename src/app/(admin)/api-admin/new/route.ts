import { createProduct } from '@/utils/product'
import { StoreProductImage } from '@/utils/storage'
import { CheckProduct } from '@/utils/type-check'
import { Categories } from '@prisma/client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const typechecked = CheckProduct(formData);
    const supabase = createClientComponentClient();

    if (typechecked?.error) {
        return NextResponse.redirect(requestUrl.origin + "/new-product?error=" + typechecked?.type, {
            status: 301,
        })
    }

    if (!typechecked?.image) {
        return NextResponse.redirect(requestUrl.origin + "/new-product?error=image", {
            status: 301,
        })
    }

    const image = await StoreProductImage(typechecked.image, supabase);

    if (image?.error || image?.image === null) {
        return NextResponse.redirect(requestUrl.origin + "/new-product?error=image", {
            status: 301,
        })
    }

    await createProduct(
        typechecked.name,
        typechecked.description,
        typechecked.category as Categories,
        typechecked.price,
        typechecked.stripeId,
        image.image as string
    ); 

    return NextResponse.redirect(requestUrl.origin + "/shop", {
        status: 301,
    })
}
