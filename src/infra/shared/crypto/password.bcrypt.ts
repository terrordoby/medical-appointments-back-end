import { IPasswordCrypto } from "./password.crypto";
import bcrypt from 'bcryptjs'

class PasswordBcrypt implements IPasswordCrypto {
    async compare(password: string, passwordWithHash: string): Promise<Boolean> {
      return await bcrypt.compare(password, passwordWithHash)
    }
    async hash(password: string): Promise<String> {
      return await bcrypt.hash(password, 10)
    }
}

export {PasswordBcrypt}