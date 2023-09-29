import { Categories } from "@prisma/client";
import { prisma } from "./db";

export const createProduct = async (
	name: string,
	description: string,
	category: Categories,
	price: number,
	stripeId: string,
	image_name: string
) => {
	try {
		const product = await prisma.product.create({
			data: {
				name,
				description,
				category,
				price,
				stripeProductId: stripeId,
				image: image_name
			}
		});
		return product;
	} catch (e) {
		console.log(e);
		return null;
	}
};


export const updateProduct = async (
	name: string,
	description: string,
	category: Categories,
	price: number,
	stripeId: string,
    image_name: string,
    id: string
) => {
	try {
        const product = await prisma.product.update({
            where: {
                id
            },
			data: {
				name,
				description,
				category,
				price,
				stripeProductId: stripeId,
				image: image_name
			}
		});
		return product;
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const deleteProduct = async (id: string) => {
    try {
        const product = await prisma.product.delete({
            where: {
                id
            }
        });
        return product;
    } catch (e) {
        console.log(e);
        return null;
    }
}
