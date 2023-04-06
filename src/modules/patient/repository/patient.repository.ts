import { Patient } from "../entities/patient.entity";

export interface PatientRepository {
  save(data: Patient): Promise<Patient>
}
