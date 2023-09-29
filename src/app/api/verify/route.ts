import { GetUser } from "@/utils/user";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const requestUrl = new URL(request.url);
    const id = requestUrl.searchParams.get("id");
    const user = await GetUser(String(id));

    if (!user || user.role !== "ADMIN") {
        return NextResponse.json({
            status: 200,
            isAdmin: false
        })
    }

    return NextResponse.json({
        status: 200,
        isAdmin: true
    });
}
