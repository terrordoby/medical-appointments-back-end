import { Doctor, DoctorInfo } from "@prisma/client";
import { DoctorInfoRepository } from "../doctor-info.repository";
import { prismaClient } from "../../../../infra/database/prisma.config";

export class DoctorInfoPrismaRepository implements DoctorInfoRepository {
    async saveOrUpdate(data: DoctorInfo): Promise<DoctorInfo> {
        return prismaClient.doctorInfo.upsert({
            where: {doctor_id: data.doctor_id},
            create: {
                duration: data.duration,
                price: data.price,
                doctor_id: data.doctor_id,
                id: data.id
            },
            update: {
                duration: data.duration,
                price: data.price,
            }
        })
    }
}
