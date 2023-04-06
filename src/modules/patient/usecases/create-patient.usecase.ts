import { User } from "../../users/entities/user.entities";
import { IUserRepository } from "../../users/repositories/Iuser.repository";
import { Patient } from "../entities/patient.entity";
import { PatientRepository } from "../repository/patient.repository";

type PatientRequest = {
    name: string;
    username: string
    password: string;
    email: string;
    document: string;
}

export class CreatePatientUseCase {
    constructor(private userRepository: IUserRepository, private patientRepository: PatientRepository){}
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
          user_id: user.id
        })

       const patientCreated = await this.patientRepository.save(patient);
       return patientCreated
    }
}
