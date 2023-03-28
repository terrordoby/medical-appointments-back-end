import { Specialist } from "../entity/specialist.entity";

export interface ISpecialistRepository {
    save(data: Specialist) : Promise<Specialist>
}