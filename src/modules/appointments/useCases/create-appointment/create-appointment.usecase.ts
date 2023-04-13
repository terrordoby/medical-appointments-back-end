import { DoctorRepository } from "../../../doctor/repository/doctor.repository";
import { IPatientRepository } from "../../../patient/repository/patient.repository";

export type CreateAppointmentRequest = {
  patient_id: string;
  doctor_id: string;
  date: Date
}

export class CreateAppointmentUseCase {
  constructor(private patientRepository: IPatientRepository, private doctorRepository: DoctorRepository){}

  async execute(data: CreateAppointmentRequest, userId: string) {
    const patientExists = await this.patientRepository.findById(userId)

    if (!patientExists) {
      throw new Error("Patient is does no exists")
    }

    const doctorExists = await this.doctorRepository.findByUserId(data.doctor_id)

    if (!doctorExists) {
      throw new Error ("Doctor is does no exists")
    }
  }
}
