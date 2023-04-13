import { validateTime, compareEndTimeIsAfter } from "../../../utils/data";
import {randomUUID} from 'crypto'

type Schedule = {
  end_at: string;
  start_at: string;
  day_of_week: number;
  id?: string
}

type DoctorScheduleProps = {
  doctor_id:string;
  schedule: Schedule[]
}

export class DoctorSchedule {

  doctor_id: string;
  schedule: Schedule[]

  private constructor(props: DoctorScheduleProps){
    if (!props.schedule) {
      throw new Error ("Invalid schedules")
    }

    validDuplicateSchedules(props.schedule);
    validateTimes(props.schedule)

    this.doctor_id = props.doctor_id
    this.schedule = createSchedules(props.schedule)

  }

  static create(data:DoctorScheduleProps) {
    const doctorSchedule = new DoctorSchedule(data)
    return doctorSchedule
  }
}


const validDuplicateSchedules = (schedules: Schedule[]) => {
  const hasUniqueValue = new Set(schedules.map((value) => value.day_of_week));
  if (hasUniqueValue.size < schedules.length) {
    throw new Error ("Duplicate Day of Week")
  }
}

const validateTimes = (schedules: Schedule[]) => {
  schedules.forEach((schedule) => {

  if (!validateTime(schedule.start_at) || !validateTime(schedule.end_at)) {
      throw new Error ("Invalid StartAt/ EndAt")
  }

  if (!compareEndTimeIsAfter(schedule.start_at, schedule.end_at)) {
      throw new Error ("End time cannot be earliner than start time")
  }
  })
}

const createSchedules = (schedules: Schedule[]) => {
  return schedules.map(schedule => {
    return {
      ...schedule,
      id: randomUUID()
    }
  })
}
