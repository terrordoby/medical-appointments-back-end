import { User } from "../../users/entities/user.entities";
import { IUserRepository } from "../../users/repositories/Iuser.repository";
import { Patient } from "../entities/patient.entity";
import { IPatientRepository } from "../repository/patient.repository";

type PatientRequest = {
    name: string;
    username: string
    password: string;
    email: string;
    document: string;
}

export class CreatePatientUseCase {
    constructor(private userRepository: IUserRepository, private patientRepository: IPatientRepository){}
    async execute(data: PatientRequest) {
        const user = await User.create(data)

        const alreadyUser = await this.userRepository.findUsername(data.username);

        if (alreadyUser) {
            throw new Error ("Username is already exists")
        }

        const savedUser = await this.userRepository.save(user)

        const patient = Patient.create({
          document: data.document,
          email: data.email,
          user_id: savedUser.id
        })

        const existsPatient = await this.patientRepository.findByDocumentOrEmail(data.document, data.email)

        if (existsPatient) {
          throw new Error ("Patient already exists")
        }

       const patientCreated = await this.patientRepository.save(patient);
       return patientCreated
    }
}
