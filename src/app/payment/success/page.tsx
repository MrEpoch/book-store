import { redirect } from "next/navigation";

export default async function Page({ searchParams }: { searchParams: { orderId?: string } }) {
    if (!searchParams.orderId) throw redirect("/payment");

    const order = await fullfillOrder(searchParams.orderId);

    return {

    }
}
