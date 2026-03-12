import { dbConnect } from "@/config/database";
import UserModel, { AuthTypes, UsersModelInterface } from "@/models/user";
import { generateHash } from "../bcrypt";

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

            const findQuery: { [key: string]: string }[] = []

            if (data.email) {
                findQuery.push({
                    email: data.email,
                })
            }

            if (data.phone) {
                findQuery.push({
                    phone: data.phone,
                })
            }

            const userExist: UsersModelInterface | null = await UserModel.findOne({
                $or: findQuery,
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

            if (data.phone) {
                if (data.phone.length !== 10) {
                    throw new Error("Phone number should be 10 digit.")
                }
            }

            if (data.password) {
                data.password = await generateHash(data.password);
            }

            console.log(data);
            const user = new UserModel(data);

            await user.save();

            return resolve();

        } catch (err) {
            return reject(err);
        }
    })
}