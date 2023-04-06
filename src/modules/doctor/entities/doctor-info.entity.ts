import {randomUUID} from 'crypto'
import { compareEndTimeIsAfter, validateTime } from '../../../utils/data'
import { Prisma } from '@prisma/client'
export type DoctorInfoProps = {
    duration: number
    price: Prisma.Decimal
    start_at: string
    end_at: string
    doctor_id: string
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
        this.start_at = data.start_at
        this.end_at = data.end_at
        this.doctor_id = data.doctor_id

        if (!data.doctor_id) {
            throw new Error ("Doctor does no exists!")
        }

        if (data.duration <=0) {
            throw new Error("Invalid Duration")
        }

        if (!validateTime(data.start_at) || !validateTime(data.end_at)) {
            throw new Error ("Invalid StartAt/ EndAt")
        }

        if (!compareEndTimeIsAfter(data.start_at, data.end_at)) {
            throw new Error ("End time cannot be earliner than start time")
        }
    }

    static create(data: DoctorInfoProps) {
        const doctorInfo = new DoctorInfo(data)
        return doctorInfo 
    }
}