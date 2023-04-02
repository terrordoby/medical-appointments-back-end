import { ISpecialistRepository } from "../../../specialities/repositories/specialist.repository";
import { User } from "../../../users/entities/user.entities";
import { IUserRepository } from "../../../users/repositories/Iuser.repository";
import { Doctor } from "../../entities/doctor.entity";
import { DoctorRepository } from "../../repository/doctor.repository";

type DoctorRequest = {
    username: string;
    name: string;
    password: string;
    email: string;
    crm: string;
    specialistyId: string;
}

export class CreateDoctorUseCase {
    constructor(private userRepository: IUserRepository, private doctorRepository: DoctorRepository,private specialistyRepository: ISpecialistRepository){}
    async execute(props: DoctorRequest) {
        const userDoctor = await User.create({
            name: props.name,
            password: props.password,
            username: props.username
        })
        const speciality = await this.specialistyRepository.finById(props.specialistyId)
        
        if(!speciality) {
            throw new Error("Specialisy is not exists")
        }
        
        const user = await this.userRepository.findUsername(props.username)

        if (user) {
            throw new Error("Username is already exists")
        }

       
        const userCreated = await this.userRepository.save(userDoctor);

        const doctor = Doctor.create({
            crm: props.crm,
            email: props.email,
            speciality_id: props.specialistyId,
            user_id: userCreated.id
        })

        const crmExists = await this.doctorRepository.findByCrm(props.crm)

        if(crmExists) {
            throw new Error("CRM is already Exists")
        }

        const doctorCreated = await this.doctorRepository.save(doctor)

        return doctorCreated
    }
}