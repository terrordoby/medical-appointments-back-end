import { Request, Response } from "express";
import { CreateDoctorInfoUseCase } from "./create-doctor-info.usecase";
import { DoctorInfoRepository } from "../../repository/doctor-info.repository";
import { DoctorRepository } from "../../repository/doctor.repository";

export class CreateDoctorInfoController {
    constructor( private doctorRepository: DoctorRepository,private doctorInfoRepository: DoctorInfoRepository){}
    async handle(request: Request, response: Response) {
       try {
        const {body, userId} = request
        const createDoctorInfoUseCase = new CreateDoctorInfoUseCase(this.doctorRepository, this.doctorInfoRepository)
        const createDoctrInfo = await createDoctorInfoUseCase.execute(body, userId)
        return response.status(201).json(createDoctrInfo)
       } catch (err: any) {
        return response.status(400).json({
            message: err.message
        })
       }
    }
}