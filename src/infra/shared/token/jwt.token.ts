import { sign, verify } from "jsonwebtoken";
import { User } from "../../../modules/users/entities/user.entities";
import { IToken, TokenUser } from "./token";
import {createHmac} from 'crypto'

export class JwtToken implements IToken {
    private SECRET_KEY = process.env.SECRET_KEY_TOKEN || ""
    private TOKEN_SECRET_CRYPTO = createHmac("sha256", this.SECRET_KEY).digest("base64")
    create({username, isAdmin, id}: User): string {
       const token = sign({username, isAdmin, id}, this.TOKEN_SECRET_CRYPTO, {
            subject: id,
            expiresIn: "15m"
        })
        return token
    }

    valite(token: string): TokenUser | null {
        try {
           return  verify(token,this.TOKEN_SECRET_CRYPTO) as TokenUser       
        } catch(err: any) {
            return null
        }
    }
}