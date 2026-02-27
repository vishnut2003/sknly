import { dbConnect } from "@/config/database";
import UserModel from "@/models/user";

export interface UpdateUserRequestData {
    userId: string,
    name: string,
    email: string,
    phone?: string,
    dob?: string,
    gender?: string,
}

export async function updateUser(data: UpdateUserRequestData) {
    return new Promise<void>(async (resolve, reject) => {
        try {

            await dbConnect();

            if (data.phone) {
                if (data.phone.length !== 10) {
                    throw new Error("Phone number should be 10 digit.")
                }
            }

            await UserModel.findByIdAndUpdate(
                data.userId,
                data,
            );

            return resolve();

        } catch (err) { 
            return reject(err);
        }
    })
}