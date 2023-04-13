import {randomUUID} from 'crypto'

export type DoctorProps = {
    crm: string;
    email: string
    user_id: string
    speciality_id: string
}

export class Doctor {
    id: string;
    crm: string;
    email: string
    user_id: string
    speciality_id: string

    private constructor(props: DoctorProps) {

        if (!props.crm) {
            throw new Error("CRM is required")
        }

        if (props.crm.length !== 6) {
            throw new Error("CRM length is incorrect")
        }

        if (!props.email) {
            throw new Error("Email is required")
        }

        this.id = randomUUID()
        this.crm = props.crm;
        this.email = props.email;
        this.speciality_id = props.speciality_id
        this.user_id = props.user_id
    }

    static create(props: DoctorProps) {
        const doctor = new Doctor(props)
        return doctor
    }
}
