import { prismaClient } from "../../../../infra/database/prisma.config";
import { AppointmentRepository } from "../appointments.repository";

export class AppointmentPrismaRepository implements AppointmentRepository  {
  async findAllSchedulesDoctorAndDAte(doctorId: string, date: string): Promise<any> {
    return await prismaClient.$queryRaw`
      SELECT * from Appointments ap where to_char(ap.date, ('YYYY-MM-DD') = ${date}
      and doctor_id = ${doctorId}
    `
  }
}
