import { prisma } from "./db";

export async function CreateUser(userId: string) {
    try {
        const user = await prisma.user.create({
            data: {
                supabaseUserId: userId,
            },
        })
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function GetUser(userId: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                supabaseUserId: userId
            }
        });
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}
