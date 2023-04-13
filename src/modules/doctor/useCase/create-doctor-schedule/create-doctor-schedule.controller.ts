import { Request, Response } from "express";
import { CreateDoctorScheduleUseCase } from "./create-doctor-schedule.usecase";
import { DoctorRepository } from "../../repository/doctor.repository";
import { DoctorScheduleRepository } from "../../repository/doctor-schedule.repository";

export class CreateDoctorScheduleController {
  constructor(private doctorRepository: DoctorRepository, private doctorScheduleRepository: DoctorScheduleRepository){}
  async handle(request: Request, response: Response) {
    const createDoctorScheduleUseCase = new CreateDoctorScheduleUseCase(this.doctorRepository, this.doctorScheduleRepository)

    try {
      const doctorScheduleCreated = await createDoctorScheduleUseCase.execute(request.body, request.userId)
      return response.status(201).json(doctorScheduleCreated)
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
