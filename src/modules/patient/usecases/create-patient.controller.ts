import { Request, Response } from "express";
import { CreatePatientUseCase } from "./create-patient.usecase";
import { IUserRepository } from "../../users/repositories/Iuser.repository";

export class CreatePatientController {
    constructor(private userRepository: IUserRepository){}
    async handle(request: Request, response: Response) {
        try {
          const {body} = request;
          const createPatientUseCase = new CreatePatientUseCase(this.userRepository)
          await createPatientUseCase.execute(body)
          return response.status(201).json(createPatientUseCase)
        } catch (err: any) {
          return response.status(400).json(err.message)
        }
    }
}
