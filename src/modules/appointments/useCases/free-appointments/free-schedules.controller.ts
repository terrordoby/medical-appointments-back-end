import { Request, Response } from "express";
import { FreeSchedulesCase } from "./free-schedules.usecase";
import { DoctorScheduleRepository } from "../../../doctor/repository/doctor-schedule.repository";
import { AppointmentRepository } from "../../repository/appointments.repository";

export class FreeSchedulesController {
  constructor(private doctorScheduleRepository: DoctorScheduleRepository, private appointmentRepository: AppointmentRepository){}
  async handle(request: Request, response: Response) {
    const freeScheduleIseCase = new FreeSchedulesCase(this.doctorScheduleRepository, this.appointmentRepository)

    try {
      const freeSchedules = await freeScheduleIseCase.execute(request.body)
      return response.status(200).json(freeSchedules)
    } catch(err: any) {
      return response.status(400).json(err.message)
    }
  }
}
