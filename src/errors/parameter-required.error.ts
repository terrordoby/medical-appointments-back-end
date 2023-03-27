class ParameterRequired extends Error {
    constructor(message: string){
        super(message)
        this.name = 'Parameter_Required_Error';
    }
}
export {ParameterRequired}