import { fomartDate, getDayOfWeek } from "../../../../utils/data"
import { DoctorScheduleRepository } from "../../../doctor/repository/doctor-schedule.repository"
import { AppointmentRepository } from "../../repository/appointments.repository"

type FreeScheduleRequest = {
  doctor_id: string
  date: Date
}

export class FreeSchedulesCase {
  constructor(private doctorScheduleRepository: DoctorScheduleRepository, private appointmentsRepository: AppointmentRepository){}
  async execute(data: FreeScheduleRequest) {
    if (!data.doctor_id) {
      throw new Error ("Doctor is Requerid")
    }

    if (!data.date) {
      throw new Error("you need to select a date")
    }

    const dayOfWeek = getDayOfWeek(data.date)

    const doctorSchedule = await this.doctorScheduleRepository.findByDoctorAndDayOfWeek(data.doctor_id, dayOfWeek)

    if (!doctorSchedule) {
      throw new Error ("Doctor does not attend that day")
    }

    const result = await this.appointmentsRepository.findAllSchedulesDoctorAndDAte(data.doctor_id, fomartDate(data.date, 'YYYY-MM-DD'))

    return result;
  }
}
