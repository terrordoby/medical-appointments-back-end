import { prismaClient } from "../../../../infra/database/prisma.config";
import { Specialist } from "../../entity/specialist.entity";
import { ISpecialistRepository } from "../specialist.repository";

export class RepositorySpecialistPrisma implements ISpecialistRepository {
    async save(data: Specialist): Promise<Specialist> {
        const specialist =  await prismaClient.specialist.create({
            data: {
                name: data.name,
                description: data.description,
                id: data.id,
                createdAt: data.createdAt
            }
        })

        return specialist

    }
}