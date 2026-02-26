import { dbConnect } from "@/config/database";
import UserModel from "@/models/user";

export interface UpdateUserRequestData {
    userId: string,
    name: string,
    email: string,
    phone: string,
    dob: string,
    gender: string,
}

export async function updateUser(data: UpdateUserRequestData) {
    return new Promise<void>(async (resolve, reject) => {
        try {

            await dbConnect();

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