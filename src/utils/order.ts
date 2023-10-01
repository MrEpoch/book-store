import { prisma } from "./db";

export async function makeOrder(

) {
    await clearExpiredOrders();

}

export async function clearExpiredOrders() {
    await prisma.order.deleteMany({
        where: {
            createdAt: {
                lte: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7)
            },
            orderStatus: {
                not: "completed" || "processing"
            }
        }
    })
}
