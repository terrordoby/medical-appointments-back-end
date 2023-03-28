import { IPasswordCrypto } from "./password.crypto";
import bcrypt from 'bcryptjs'

class PasswordBcrypt implements IPasswordCrypto {
    hash(password: string): Promise<String> {
      return bcrypt.hash(password, 10)
    }
}

export {PasswordBcrypt}