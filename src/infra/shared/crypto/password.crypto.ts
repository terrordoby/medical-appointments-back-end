export interface IPasswordCrypto {
    hash(password: string) : Promise<String>
    compare(password: string, passwordWithHash: string) : Promise<Boolean>
}