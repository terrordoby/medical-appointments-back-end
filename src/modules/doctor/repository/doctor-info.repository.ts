import { DoctorInfo } from "@prisma/client";

export interface DoctorInfoRepository {
    save(data: DoctorInfo) : Promise<DoctorInfo>
}