import { Mongoose, Document } from "mongoose";
import { Request, Response } from "express-serve-static-core";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import User from "../database/schemas/User";
import dotenv from "dotenv";
dotenv.config();

const SECRET = process.env.TOKEN as string

class LoginController {

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const newUser = await User.findOne({ email }).select('+password').exec();

        if (!newUser) return res.status(404).json({ msg: "email dont exist" });

        const verifyPass = await bcrypt.compare(password, newUser.password);

        if (!verifyPass) return res.status(400).json({ msg: "Password or email is invalid" })

        const token = jwt.sign({ id: newUser._id, role: 'user' }, SECRET, { expiresIn: '24h' });

        return res.send({
            token
        })
    }
}

export default LoginController;