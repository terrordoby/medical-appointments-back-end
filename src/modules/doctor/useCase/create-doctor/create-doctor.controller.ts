import { Request, Response } from "express";
import { CreateDoctorUseCase } from "./create-doctor.usecase";
import { IUserRepository } from "../../../users/repositories/Iuser.repository";
import { DoctorRepository } from "../../repository/doctor.repository";
import { ISpecialistRepository } from "../../../specialities/repositories/specialist.repository";

export class CreateDoctorController {
    constructor(private userRepository: IUserRepository, private doctorRepository: DoctorRepository, private specialityRepository: ISpecialistRepository){}

    async handle(request: Request, response: Response) {
        try {
          const {body} = request
          const createDoctorUseCase = new CreateDoctorUseCase(this.userRepository, this.doctorRepository, this.specialityRepository)
          const doctor = await createDoctorUseCase.execute(body)
          
          return response.status(201).json(doctor)
        } catch (err:any) {
            return response.status(400).json({message: err.message})
        }
}
    }