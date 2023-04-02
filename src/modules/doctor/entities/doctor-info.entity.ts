import {randomUUID} from 'crypto'
import { compareEndTimeIsAfter, validateTime } from '../../../utils/data'
import { Prisma } from '@prisma/client'
export type DoctorInfoProps = {
    duration: number
    price: Prisma.Decimal
    startAt: string
    endAt: string
    doctorId: string
}

export class DoctorInfo {
    id: string
    duration: number
    price: Prisma.Decimal
    start_at: string
    end_at: string
    doctor_id: string

    private constructor(data: DoctorInfoProps){
        this.id = randomUUID()
        this.duration = data.duration
        this.price = data.price
        this.start_at = data.startAt
        this.end_at = data.endAt
        this.doctor_id = data.doctorId

        if (data.doctorId) {
            throw new Error ("Doctor does no exists!")
        }

        if (data.duration <=0) {
            throw new Error("Invalid Duration")
        }

        if (!validateTime(data.startAt) || !validateTime(data.endAt)) {
            throw new Error ("Invalid StartAt/ EndAt")
        }

        if (!compareEndTimeIsAfter(data.startAt, data.endAt)) {
            throw new Error ("End time cannot be earliner than start time")
        }
    }

    static create(data: DoctorInfoProps) {
        const doctorInfo = new DoctorInfo(data)
        return doctorInfo 
    }
}