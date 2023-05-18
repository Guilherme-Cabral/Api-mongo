import { Request, Response } from "express";
import { validate } from 'email-validator';
import User from "../database/schemas/User";

type Person = {
    name: string,
    email: string,
    password: string
}

// Create Read Update Delete

class UserController {
    // Read
    async search(req: Request, res: Response) {
        try {
            const users = await User.find({}, { "_id": 0 })
            res.json(users)
        } catch (e) {
            return res.status(500).send({
                error: "Error on searching",
                msg: e
            })
        }
    }

    // create
    async create(req: Request, res: Response) {
        try {
            const { name, email, password }: Person = req.body;

            const existUser = await User.findOne({ email })
            if (existUser) return res.status(400).json({ msg: 'User Already exist' })

            if (!validate(email)) {
                return res.status(400).json({ msg: `the email: ${email} is invalid` });
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
    //delete 
    async delete(req: Request, res: Response) {
        try {

            const all = await User.find({});
            const respDelete = await User.deleteMany({});
            //{ acknowledged: true, deletedCount: 1 }

            return res.json(
                {
                    amountDeleted: respDelete.deletedCount,
                    processed: all
                }
            )
        } catch (e) {
            return res.status(500).send({
                error: "delete Error",
                msg: e
            });
        }
    }
}

export default new UserController();