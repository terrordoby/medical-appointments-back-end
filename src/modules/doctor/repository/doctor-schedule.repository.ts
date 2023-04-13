import { DoctorSchedule } from "../entities/doctor-schedule.entity";
import { DoctorSchedule as DoctorSchedulePrisma } from "@prisma/client";

export interface DoctorScheduleRepository {
  save(data: DoctorSchedule): Promise<void>
  findByDoctorAndDayOfWeek(doctorId: string,dayOfWeek: number) : Promise<DoctorSchedulePrisma | null>
}
