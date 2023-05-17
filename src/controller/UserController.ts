import { Request, Response } from "express";
import { validate } from 'email-validator';
import User from "../database/schemas/User";

type Person = {
    name: string,
    email: string,
    password: string
}

class UserController {
    async search(req: Request, res: Response) {
        try {
            const users = await User.find({}, { "_id": 0 })
            res.json(users)
        } catch (e) {
            return res.status(500).send({
                error: "Registration Error",
                msg: e
            })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { name, email, password }: Person = req.body;

            if (!validate(email)) {
                return res.json({
                    msg: `the email: ${email} is invalid`
                });
            }

            const user = await User.create({
                name,
                email,
                password,
                createdAt: Date.now()
            });

            res.json(user);

        } catch (e) {
            return res.status(500).send({
                error: "Registration Error",
                msg: e
            });
        }
    }
}

export default new UserController();