import { Request, Response } from "express";
import { CreateDoctorUseCase } from "./create-doctor.usecase";
import { IUserRepository } from "../../../users/repositories/Iuser.repository";
import { DoctorRepository } from "../../repository/doctor.repository";
import { ISpecialistRepository } from "../../../specialities/repositories/specialist.repository";
import {z} from 'zod'
import { validatorSchema } from "../../../../infra/shared/validator/zod";
import { ValidationSchemaErro } from "../../../../errors/validation-schema.error";

export class CreateDoctorController {
    constructor(private userRepository: IUserRepository, private doctorRepository: DoctorRepository, private specialityRepository: ISpecialistRepository){}

    async handle(request: Request, response: Response) {
        
          const {body} = request
          const doctorSchema = z.object({
            username: z.string(),
            name: z.string(),
            email: z.string().email({
                message: "You need to insert a valid email"
            }),
            password: z.string(),
            crm: z.string().length(6, {
                message: "CRM must contain 6 characters"
            }),
            speciality_id: z.string().uuid()
          })

          try {
            validatorSchema(doctorSchema, body)
            const createDoctorUseCase = new CreateDoctorUseCase(this.userRepository, this.doctorRepository, this.specialityRepository)
            const doctor = await createDoctorUseCase.execute(body)
          
            return response.status(201).json(doctor)
          } catch (err: any) {
            if(err instanceof ValidationSchemaErro) {
                return response.status(err.statusCode).json(err.errors)
            }
            return response.status(400).json(err.message)
          }

    }
}
