import { NextResponse } from "next/server";
import { getProduct } from "@/utils/product";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const id = requestUrl.searchParams.get("id");
  const product = await getProduct(String(id));

  if (!product) {
    return NextResponse.json({
      status: 200,
      product: null,
    });
  }

  return NextResponse.json({
    status: 200,
    product,
  });
}
