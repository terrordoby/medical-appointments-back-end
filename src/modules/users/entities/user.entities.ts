import {randomUUID} from 'crypto';
import { UserRequest } from '../useCases/create-user.ts/create-user.usercase';

export class User {
    id: string;
    name: string;
    username: string;
    password: string;
    isAdmin: boolean;

    private constructor( name: string, username: string, password: string){
        this.id = randomUUID();
        this.name = name;
        this.username = username;
        this.password = password;
        this.isAdmin = false;
    }

    static create({name, password, username}:UserRequest ) {
        const user = new User(name, username, password);
        return user;
    }
}