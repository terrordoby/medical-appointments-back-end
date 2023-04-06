export type PatientProps = {
    email: string
    document: string
    user_id: string
}

export class Patient {
    email: string
    user_id: string
    document: string

    private constructor(data: PatientProps){
        this.document = data.document
        this.email = data.email
        this.user_id = data.user_id

        if (!data.email) {
            throw new Error("Email is Required")
        }

        if (!data.document || data.document.length < 5) {
            throw new Error ("Document is Invalid")
        }
    }

    static create(data: PatientProps) {
        const patient = new Patient(data)
        return patient
    }
}