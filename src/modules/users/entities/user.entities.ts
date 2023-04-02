import {randomUUID} from 'crypto';
import { UserRequest } from '../useCases/create-user.ts/create-user.usercase';
import { PasswordBcrypt } from '../../../infra/shared/crypto/password.bcrypt';

export class User {
    id: string;
    name: string;
    username: string;
    password: string;
    isAdmin: boolean;

    private constructor( name: string, username: string, password: string){

        if(!username || !password) {
            throw new Error("Username/ Password is required")
        }
        
        this.id = randomUUID();
        this.name = name;
        this.username = username;
        this.password = password;
        this.isAdmin = false;
    }

    static async create({name, password, username}:UserRequest ) {
        if(!password) {
            throw new Error("Username/ Password is required")
        }
        const bcrypt = new PasswordBcrypt()
        const passwordHash = await bcrypt.hash(password)
        const user = new User(name, username, passwordHash as string);
        return user;
    }
}