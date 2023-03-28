import { Specialist } from "../../entity/specialist.entity";
import { ISpecialistRepository } from "../../repositories/specialist.repository";

type SpecialistRequest = {
    name: string,
    description: string;
}

export class SpecialistUseCase {
    constructor(private specialistRepository: ISpecialistRepository){}

    async execute(data: SpecialistRequest){
        const specialist = Specialist.create(data);
        const specialistCreated = await this.specialistRepository.save(specialist);
        return specialistCreated
    }
}