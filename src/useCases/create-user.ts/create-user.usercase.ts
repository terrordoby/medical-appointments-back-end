import { User } from "../../entities/user.entities";
import { UserRepository } from "../../repositories/user.repository";

export interface UserRequest {
    name: string;
    username: string;
    password: string
}

 export class CreateUserCase {
    async execute(data : UserRequest) {

        const repository =  UserRepository.getInstance();

        if (!data.username || !data.password) {
            throw new Error("Username/Password is required")
        }

        const existUser = await repository.findUsername(data.name);

        if(existUser) {
            throw new Error("Username is already")
        }

        const user = User.create(data);

        const userCreated = await repository.save(user);

        return userCreated;

    }
        
        

    
}