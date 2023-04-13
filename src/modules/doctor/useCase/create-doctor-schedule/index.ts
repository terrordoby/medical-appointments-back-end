import { DoctorPrismaRepository } from "../../repository/implements/Doctor.prisma.repository";
import { CreateDoctorSchedulePrismaRepositorys } from "../../repository/implements/create-doctor-schedule.prisma.repository";
import { CreateDoctorScheduleController } from "./create-doctor-schedule.controller";
import { CreateDoctorScheduleUseCase } from "./create-doctor-schedule.usecase";


const doctorRepositoryPrsima = new DoctorPrismaRepository();
const doctorScheduleRepository = new CreateDoctorSchedulePrismaRepositorys();

const createDoctorScheduleController = new CreateDoctorScheduleController(doctorRepositoryPrsima, doctorScheduleRepository)

export {createDoctorScheduleController}
