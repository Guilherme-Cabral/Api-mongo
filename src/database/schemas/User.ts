import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    permissions: {
        type: String,
        required: false,
        select: false,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        versionKey: false
    })


export default mongoose.model("User", User)