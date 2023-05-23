import { Request, NextFunction, response } from 'express';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {

    const { authorization } = req.headers;

    if (!authorization) {
        return res.status()
    }
}