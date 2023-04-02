import { prismaClient } from "../../../../infra/database/prisma.config";
import { User } from "../../entities/user.entities";
import { IUserRepository } from "../Iuser.repository";

export class UserPrismaRepository implements IUserRepository {
    async findUsername(username: string): Promise<User | undefined> {
        const user = await prismaClient.user.findFirst({
            where: {
                username
            }
        })

        return user || undefined
    }
    async save(data: User): Promise<User> {
        const user =  await prismaClient.user.create({
            data: {
                name: data.name,
                password: data.password,
                username: data.username,
            }
        })

        return user
    }

    async findById(id: string): Promise<User | null> {
        return await prismaClient.user.findUnique({
            where: {
                id
            }
        })
    }

}