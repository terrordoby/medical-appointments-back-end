import { DoctorSchedule } from "../../entities/doctor-schedule.entity";
import { DoctorScheduleRepository } from "../../repository/doctor-schedule.repository";
import { DoctorRepository } from "../../repository/doctor.repository";

export type CreateDoctorScheduleRequest = {
  schedules: DoctorSchedules[]
}

type DoctorSchedules = {
  start_at: string;
  end_at: string;
  day_of_week: number
}

export class CreateDoctorScheduleUseCase {
  constructor(private doctorRepository: DoctorRepository, private doctorScheduleRepository: DoctorScheduleRepository){}
  async execute(data: CreateDoctorScheduleRequest, userId: string) {

    const doctor = await this.doctorRepository.findByUserId(userId);

    if (!doctor) {
      throw new Error ("Doctor is does not exists")
    }

   const doctorSchedule = DoctorSchedule.create({
    schedule: data.schedules,
    doctor_id: doctor.id
   })

    await this.doctorScheduleRepository.save(doctorSchedule)
  }
}
