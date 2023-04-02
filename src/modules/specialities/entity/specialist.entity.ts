import {randomUUID} from 'crypto'

type ISpecialist = {
    name: string
    description: string
}

class Specialist {
    id: string;
    name: string
    description: string
    createdAt: Date;

    private constructor(name: string, description: string) {
        this.id = randomUUID();
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
    }

    static create({name, description}: ISpecialist) {
        if(!name) {
          throw new Error("Specialist is required")
        }

        const specialist = new Specialist(name, description)
        return specialist
    }
}

export {Specialist}