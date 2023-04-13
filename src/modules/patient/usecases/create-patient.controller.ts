import { Request, Response } from "express";
import { CreatePatientUseCase } from "./create-patient.usecase";
import { IUserRepository } from "../../users/repositories/Iuser.repository";
import { IPatientRepository } from "../repository/patient.repository";

export class CreatePatientController {
    constructor(private userRepository: IUserRepository, private patientRepository: IPatientRepository){}
    async handle(request: Request, response: Response) {
        try {
          const {body} = request;
          const createPatientUseCase = new CreatePatientUseCase(this.userRepository, this.patientRepository)
          const result = await createPatientUseCase.execute(body)
          return response.status(201).json(result)
        } catch (err: any) {
          return response.status(400).json(err.message)
        }
    }
}
