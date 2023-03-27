import { User } from "../../entities/user.entities";
import { IUserRepository } from "../Iuser.repository";

export class UserPrismaRepository implements IUserRepository {
    findUsername(name: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    save(data: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

}