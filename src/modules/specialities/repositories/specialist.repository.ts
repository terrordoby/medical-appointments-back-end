import { User } from "../../users/entities/user.entities";
import { Specialist } from "../entity/specialist.entity";

export interface ISpecialistRepository {
    save(data: Specialist) : Promise<Specialist>
    findByName(name: string): Promise<Specialist | null>
    finById(specialistyId: string): Promise<Specialist | null>
}