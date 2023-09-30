import { quantityChange } from "@/utils/product";
import { NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);
    const formData = await request.formData();
    const normalZod = z.string().min(1);

    const id = normalZod.safeParse(formData.get("id") as string);
    const quantity = normalZod.safeParse(formData.get("quantity") as string);

    if (!id.success) {
        return NextResponse.redirect(
            requestUrl.origin + `/admin/quantity-product?error=id`,
            {
                status: 301,
            },
        );
    } else if (!quantity.success) {
        return NextResponse.redirect(
            requestUrl.origin + `/admin/quantity-product?error=quantity`,
            {
                status: 301,
            },
        );
    }

    await quantityChange(
        parseInt(quantity.data),
        id.data
    );

    return NextResponse.redirect(requestUrl.origin + "/admin", {
    status: 301,
    });
}
