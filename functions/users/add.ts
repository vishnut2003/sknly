import { dbConnect } from "@/config/database";
import UserModel, { AuthTypes, UsersModelInterface } from "@/models/user";

export interface AddUserRequestData {
    name: string,
    email: string,
    phone?: string,
    password?: string,
    authType: AuthTypes,
}

export async function addUser(data: AddUserRequestData) {
    return new Promise<void>(async (resolve, reject) => {
        try {
            await dbConnect();

            const userExist: UsersModelInterface | null = await UserModel.findOne({
                $or: [
                    { email: data.email },
                    { phone: data.phone || null },
                ],
            })

            if (userExist) {
                if (userExist.email === data.email) {
                    throw new Error("Email address already exist.");
                } else {
                    throw new Error("Phone number already exist.")
                }
            }

            if (data.authType === "manual" && !data.password) {
                throw new Error("Password is required.");
            }

            const user = new UserModel(data);
            
            await user.save();

            return resolve();

        } catch (err) {
            return reject(err);
        }
    })
}