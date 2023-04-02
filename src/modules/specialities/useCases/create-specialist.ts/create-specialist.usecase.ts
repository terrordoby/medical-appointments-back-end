import { Specialist } from "../../entity/specialist.entity";
import { ISpecialistRepository } from "../../repositories/specialist.repository";

type SpecialistRequest = {
    name: string,
    description: string;
}

export class SpecialistUseCase {
    constructor(private specialistRepository: ISpecialistRepository){}

    async execute({name, description}: SpecialistRequest){
        const specialist = Specialist.create({name, description});
        const specialistExists = await this.specialistRepository.findByName(name)
        if(specialistExists) {
            throw new Error("Speciality is already exists")
        }
        
        const specialistCreated = await this.specialistRepository.save(specialist);
        return specialistCreated
    }
}