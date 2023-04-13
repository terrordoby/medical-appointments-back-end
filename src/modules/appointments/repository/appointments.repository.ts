export interface AppointmentRepository {
  findAllSchedulesDoctorAndDAte(doctorId: string, date: string): Promise<any>
}
