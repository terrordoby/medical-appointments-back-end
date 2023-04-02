import { prismaClient } from "../../../../infra/database/prisma.config";
import { Doctor } from "../../entities/doctor.entity";
import { DoctorMapper } from "../../mapper/create-doctor.map";
import { DoctorRepository } from "../doctor.repository";

export class DoctorPrismaRepository implements DoctorRepository {
    
    async save(data: any): Promise<any> {
        await prismaClient.doctor.create({
            data: {
                crm: data.crm,
                email: data.email,
                speciality_id: data.speciality_id,
                user_id: data.user_id
            }
        })

        return DoctorMapper.createDoctorMapper(data)
    }

    async findByCrm(crm: string): Promise<Doctor | null> {
        const doctor = await prismaClient.doctor.findUnique({
            where: {
                crm
            }
        })

        if (doctor) return doctor
        return null
    }

    async findByUserId(userId: string): Promise<Doctor | null> {
        return prismaClient.doctor.findUnique({
            where: {
                user_id: userId
            }
        })
    }
    
}