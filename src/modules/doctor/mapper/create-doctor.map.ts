import { Doctor as DoctorPrisma } from "@prisma/client";
import { Doctor } from "../entities/doctor.entity";


export class DoctorMapper {
    static createDoctorMapper = (data: DoctorPrisma): Doctor => {
        return {
            crm: data.crm,
            email: data.email,
            speciality_id: data.speciality_id,
            user_id: data.user_id,
            id: data.id
        }
        
    }
}
