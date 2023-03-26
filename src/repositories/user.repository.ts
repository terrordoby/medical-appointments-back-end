import { User } from "../entities/user.entities";

export class UserRepository {
    users: User[]
    protected static instance: UserRepository

    constructor() {
        this.users = []
    }

    static getInstance() {
        if(!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance
    }

     async findUsername(name: string) {
        return this.users.find((user) => user.name === name)
    }

    async save(data: User) {
        this.users.push(data);
        return data
    }
}