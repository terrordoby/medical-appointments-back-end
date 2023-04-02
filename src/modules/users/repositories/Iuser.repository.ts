import { User } from "../entities/user.entities";

export interface IUserRepository {
    findUsername(name: string): Promise<User | undefined>
    save(data: User): Promise<User>
    findById(id: string): Promise<User | null>
}