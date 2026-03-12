import mongoose, { Types } from "mongoose";

export type AuthTypes = "manual" | "google" | "apple" | "facebook";

export interface UsersModelInterface extends mongoose.Document {
    name: string,
    email: string,
    phone?: string,
    password?: string,
    authType: AuthTypes,
    loginAssist?: {
        otp?: string,
        verifyCode?: string,
    },
    dob?: string,
    gender?: string,
    defaultAddress?: Types.ObjectId,
    forgetPassword?: {
        otp?: string,
        verifyCode?: string,
    }
}

const userSchema = new mongoose.Schema<UsersModelInterface>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        unique: true,
        sparse: true,
    },
    password: {
        type: String,
    },
    authType: {
        type: String,
        enum: ["manual", "google", "apple", "facebook"],
        required: true,
    },
    loginAssist: {
        otp: { type: String },
        verifyCode: { type: String },
    },
    defaultAddress: {
        type: Types.ObjectId,
        ref: "Addresses",
    },
    gender: {
        type: String,
    },
    dob: {
        type: String,
    },
    forgetPassword: {
        otp: {
            type: String,
        },
        verifyCode: {
            type: String,
        }
    }
}, { timestamps: true })

const UserModel = mongoose.models.Users || mongoose.model("Users", userSchema);
export default UserModel;