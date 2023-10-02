import { Product } from "@prisma/client";
import { CartType } from "../app/CartProvider";
import { prisma } from "./db";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: '2023-08-16'
});

export async function makeOrder(
    full_name: string,
    email: string,
    phone: string,
    address: string,
    country: string,
    city: string,
    postal_code: string,
    cart: CartType[],
    requestUrl: string,
    userId?: string | null 
) {
    try {
        await clearExpiredOrders();

        let isError = false;
        const products = await mapOverOrders(cart) as Product[];
        const orders = cart.map((item) => {
            if (isError) return {
                price: "0",
                quantity: 0
            };
            const product = products.find((product) => product.id === item.id);         
            if (!product) {
                isError = true;
                return {
                    price: "0",
                    quantity: 0
                };
            }
            return {
                    price: product.stripeProductId,
                    quantity: item.quantity
            };
        })

        if (isError) {
            return {
                error: true,
                type: "product-not-found"
            }
        }

        const orderId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        const session = await stripe.checkout.sessions.create(
            {
                line_items: orders,
                mode: 'payment',
                success_url: `${requestUrl}/payment/success?order=${orderId}`,
                cancel_url: `${requestUrl}/payment/cancel`
            },
            {
                apiKey: process.env.STRIPE_SECRET_KEY
            }
        );

            const order_db = await prisma.order.create({
            data: {
                address: address,
                country: country,
                email: email,
                city: city,
                postalCode: postal_code,
                phone: phone,
                FullName: full_name,
                orderItems: {
                    create: cart.map((item: Product) => {
                        return {
                            quantity: cart.find((order: Product) => order.id === item.id)?.quantity as number,
                            Product: {
                                connect: {
                                    id: item.id
                                }
                            }
                        };
                    })
                }
            }
        });

        if (userId) {
            const user = await prisma.user.findUnique({
                where: {
                    supabaseUserId: userId
                }
            });
            if (user) {
                await prisma.order.update({
                    where: {
                        id: order_db.id
                    },
                    data: {
                        userId: user.id
                    }
                });
            }
        }

        return {
            url: session.url
        }
    } catch (error) {
        console.log(error);
        return {
            error: true,
            type: "unknown"
        }
    }
}

async function mapOverOrders(orders: CartType[]) {
	const ordersWithProducts = await Promise.all(
		orders.map(async (order: CartType) => {
			const product = await prisma.product.findUnique({
				where: {
					id: order.id
				}
			});
			return product;
		})
	);
	return ordersWithProducts;
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
