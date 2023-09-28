import { z } from "zod";

export const CheckProduct = (data) => {
    const normal_check = z.string().min(1);

    const name = normal_check.safeParse(data.get('name'));
    const description = normal_check.safeParse(data.get('description'));
    const price = normal_check.safeParse(data.get('price'));
    const image = data.get('image') as File;
    const category = normal_check.safeParse(data.get('category'));
    const stripeId = normal_check.safeParse(data.get('stripeId'));
    
    if (!name.success) {
        return {
            error: true,
            type: 'name',
        }
    } else if (!description.success) {
        return {
            error: true,
            type: 'description',
        }
    } else if (!price.success) {
        return {
            error: true,
            type: 'price',
        }
    } else if (!category.success) {
        return {
            error: true,
            type: 'category',
        }
    } else if (!stripeId.success) {
        return {
            error: true,
            type: 'stripeId',
        }
    } else if (!image) {
        return {
            error: true,
            type: 'image',
        }
    }

    const img_ext = image?.name.split('.').pop();
    if (!img_ext || !["jpg", "jpeg", "png", "webp"].includes(img_ext)) {
        return {
            error: true,
            type: 'image',
        }
    }

    if (
        category.data !== 'men' &&
        category.data !== 'women' &&
        category.data !== 'kids' &&
        category.data !== 'shoes'
    ) {
        return {
            error: true,
            type: 'category',
        }
    }

    return {
        error: false,
        category: category.data,
        image,
        name: name.data,
        price: price.data,
        stripeId: stripeId.data,
        description: description.data
    }
}
