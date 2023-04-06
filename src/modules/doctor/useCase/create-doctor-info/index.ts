import { RepositorySpecialistPrisma } from "../../../specialities/repositories/implementations/specialist.prisma";
import { UserPrismaRepository } from "../../../users/repositories/implementations/UserPrismaRepository";
import { DoctorPrismaRepository } from "../../repository/implements/Doctor.prisma.repository";
import { DoctorInfoPrismaRepository } from "../../repository/implements/doctor-info.prisma.repository";
import { CreateDoctorController } from "../create-doctor/create-doctor.controller";
import { CreateDoctorInfoController } from "./create-doctor-info.controller";

const doctorRepository = new DoctorPrismaRepository()
const doctorInfoRepository = new DoctorInfoPrismaRepository()

const createDoctorInfoController = new CreateDoctorInfoController(doctorRepository, doctorInfoRepository)

export {createDoctorInfoController}