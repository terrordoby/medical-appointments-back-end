import { ErrorSchema } from "../infra/shared/validator/zod"

export class ValidationSchemaErro extends Error {
    statusCode: number
    errors: ErrorSchema[]

    constructor(message: string, errors: ErrorSchema[]){
        super(message)
        this.name = "VALIDATION_SCHEMA_ERROR"
        this.statusCode = 422
        this.errors = errors
    }
}