import { prismaClient } from "../../../../infra/database/prisma.config";
import { DoctorSchedule } from "../../entities/doctor-schedule.entity";
import { DoctorScheduleRepository } from "../doctor-schedule.repository";
import {randomUUID} from 'crypto'
import { DoctorSchedule as DoctorSchedulePrisma } from "@prisma/client";

export class CreateDoctorSchedulePrismaRepositorys implements DoctorScheduleRepository {
  async save(data: DoctorSchedule): Promise<void> {
    const doctorSchedulePrisma: DoctorSchedulePrisma[] = []
    data.schedule.forEach(item => {
      doctorSchedulePrisma.push({
        day_of_week: item.day_of_week,
        end_at: item.end_at,
        doctor_id: data.doctor_id,
        start_at: item.start_at,
        id: item.id || randomUUID()
      })
    })

    await prismaClient.$transaction([
       prismaClient.doctorSchedule.deleteMany({
        where: {
          doctor_id: data.doctor_id
        }
      }),
       prismaClient.doctorSchedule.createMany({
        data: doctorSchedulePrisma
      })
    ])

  }

  async findByDoctorAndDayOfWeek(doctorId: string, dayOfWeek: number): Promise<DoctorSchedulePrisma | null> {
   const result = await prismaClient.doctorSchedule.findFirst({
    where: {
      day_of_week: dayOfWeek,
      AND : {
        doctor_id: doctorId
      }
    }
   })
   return result
  }
}
