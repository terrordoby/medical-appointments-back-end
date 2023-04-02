import { NextFunction, Request, Response } from "express";
import { UserPrismaRepository } from "../../../../modules/users/repositories/implementations/UserPrismaRepository";

export const ensureAdmin = async (request: Request, response: Response, next: NextFunction) => {
    const userRepository = new UserPrismaRepository();
    const user = await userRepository.findById(request.userId)

    if(!user) {
        return response.status(400).json({message: "User does not exists"})
    }

    if(!user.isAdmin) {
        return response.status(400).json({message: "User is not Admin"})
    }

    return next()
}