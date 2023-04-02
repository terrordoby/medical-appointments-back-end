import { NextFunction, Request, Response } from "express";
import { JwtToken } from "../../token/jwt.token";

export const ensureAuthenticate = (request: Request, response: Response, next: NextFunction) => {
    const headerAuth = request.headers.authorization as string
    if(!headerAuth) {
        return response.status(401).json({
            err: "Token is missing"
        })
    }
    const [,token] = headerAuth.split(' ')
    const verifyToken = new JwtToken().valite(token)
    if (verifyToken) {
        request.userId = verifyToken.sub
        return next()
    }
    return response.status(401).json({
        err: "Token is Invalid"
    })
}