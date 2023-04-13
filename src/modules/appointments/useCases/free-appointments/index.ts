import { CreateDoctorSchedulePrismaRepositorys } from "../../../doctor/repository/implements/create-doctor-schedule.prisma.repository";
import { AppointmentPrismaRepository } from "../../repository/implements/appointments.prisma.repository";
import { FreeSchedulesController } from "./free-schedules.controller";


const doctorSchedulePrismaRepository = new CreateDoctorSchedulePrismaRepositorys()
const appointmentPrismaRepository = new AppointmentPrismaRepository()

const freeScheduleController = new FreeSchedulesController(doctorSchedulePrismaRepository, appointmentPrismaRepository)

export {freeScheduleController}
