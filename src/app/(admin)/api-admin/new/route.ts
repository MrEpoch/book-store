import { CheckProduct } from '@/utils/type-check'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const typechecked = CheckProduct(formData);

    if (typechecked?.error) {
        return NextResponse.redirect(requestUrl.origin + "/new-prodct?error=" + typechecked?.type, {
            status: 301,
        })
    }

    return NextResponse.redirect(requestUrl.origin + "/shop", {
        status: 301,
    })
}
