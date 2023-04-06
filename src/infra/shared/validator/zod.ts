import { ZodError, ZodSchema } from "zod";
import { ValidationSchemaErro } from "../../../errors/validation-schema.error";

export type ErrorSchema = {
    field: (string | number)[]
    message: string
}

export const validatorSchema = (schema: ZodSchema, payload: any) => {
    try {
        schema.parse(payload)
    } catch (err: any) {
        const typeError = err as ZodError
        const errors: ErrorSchema[] = []
        typeError.errors.forEach(erro => {
            errors.push({
                field: erro.path,
                message: erro.message
            })
        } )

        throw new ValidationSchemaErro("ERROR_SCHEMA", errors)
    }
}