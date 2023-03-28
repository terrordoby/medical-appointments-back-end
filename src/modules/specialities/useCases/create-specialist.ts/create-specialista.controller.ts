import {Request, Response} from 'express';
import { Specialist } from '../../entity/specialist.entity';
import { ISpecialistRepository } from '../../repositories/specialist.repository';
import { SpecialistUseCase } from './create-specialist.usecase';

export class SpecialistController {
    constructor(private specialistRepository: ISpecialistRepository){}

    async handle(request: Request, response: Response){
        try {
          const useCase = new SpecialistUseCase(this.specialistRepository)
          const result = await useCase.execute(request.body)
          return response.status(201).json(result)
        } catch (err: any) {
           return response.status(400).json(err.message)
        }
    }

}