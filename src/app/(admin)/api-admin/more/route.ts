import { getProducts } from "@/utils/product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const skip = requestUrl.searchParams.get("skip");
  const take = requestUrl.searchParams.get("take");

  const products = await getProducts(Number(skip), Number(take));

  return NextResponse.json({
    status: 200,
    products,
  });
}
