import { fullFillOrder } from "@/utils/order";
import { redirect } from "next/navigation";

export default async function Page({ searchParams }: { searchParams: { orderId?: string } }) {
    if (!searchParams.orderId) throw redirect("/payment");
    await fullFillOrder(String(searchParams.orderId));
    return (
        <div className="min-h-screen w-full dark:bg-gray-900 dark:text-white">
            <div className="max-w-screen-xl px-7 mx-auto">
                <h1 className="text-5xl font-extrabold">Thank you for completing order!</h1>
            </div>
        </div>
    )
}
