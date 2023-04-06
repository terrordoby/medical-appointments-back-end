import { DoctorInfo } from "@prisma/client";

export interface DoctorInfoRepository {
    saveOrUpdate(data: DoctorInfo) : Promise<DoctorInfo>
}