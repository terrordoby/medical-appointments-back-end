import { Prisma } from "@prisma/client"
import { compareEndTimeIsAfter, validateTime } from "../../../../utils/data"
import { DoctorInfo } from "../../entities/doctor-info.entity"
import { DoctorInfoRepository } from "../../repository/doctor-info.repository"
import { DoctorRepository } from "../../repository/doctor.repository"

export type DoctorInfoRequest = {
    startAt: string
    endAt: string
    price: Prisma.Decimal
    duration: number
}

export class CreateDoctorInfoUseCase {
    constructor(private doctorRepository: DoctorRepository, private doctorInfoRepository: DoctorInfoRepository){}
    async  execute(data: DoctorInfoRequest, userId: string) {
        const doctor = await this.doctorRepository.findByUserId(userId)

        if(!doctor) {
            throw new Error("Doctor does not exists")
        }

        const doctorInfo = DoctorInfo.create({
            ...data,
            doctorId: doctor.id
        })

       const doctorCreated = await this.doctorInfoRepository.save(doctorInfo)
       return doctorCreated
    }
}