import { Mongoose, Document } from "mongoose";
import { Request, Response } from "express-serve-static-core";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import User from "../database/schemas/User";


class LoginController {

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const newUser = await User.findOne({ email }, { _id: 1 }).select('+password').exec();

        if (!newUser) return res.status(404).json({ msg: "email dont exist" })

        const verifyPass = await bcrypt.compare(password, newUser.password)

        if (!verifyPass) return res.status(400).json({ msg: "Password or email is invalid" })

        const token = jwt.sign({ id: newUser._id }, process.env.TOKEN )
    }


}

export default new LoginController();