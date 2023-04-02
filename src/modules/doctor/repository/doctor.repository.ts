import { Doctor } from "../entities/doctor.entity";

export interface DoctorRepository {
    save(data: Doctor): Promise<Doctor>
    findByCrm(crm:string): Promise<Doctor | null>
    findByUserId(userId: string): Promise<Doctor | null>
}