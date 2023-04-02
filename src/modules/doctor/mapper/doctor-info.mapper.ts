import { DoctorInfo as DoctorInfoPrisma } from "@prisma/client";
import { DoctorInfo } from "../entities/doctor-info.entity";

export class DoctorInfoMapper {
    static prismaToEntityDoctorInfo = (data: DoctorInfoPrisma): DoctorInfo  => {
        const  doctor = {
            doctor_id: data.doctor_id,
            duration: data.duration,
            end_at: data.end_at,
            start_at: data.start_at,
            id: data.id,
            price: data.price
        }
        return DoctorInfoMapper.prismaToEntityDoctorInfo(doctor)
    }
}