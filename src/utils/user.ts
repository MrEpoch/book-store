import { prisma } from "./db";

export default async function CreateUser(userId: string) {
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
