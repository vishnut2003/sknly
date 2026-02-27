import { GetOneUserApiRequestData } from "@/app/api/users/get-one/route";
import { dbConnect } from "@/config/database";
import UserModel, { UsersModelInterface } from "@/models/user";

export async function getOneUser({
    email,
    phone,
    userId,
}: GetOneUserApiRequestData) {
    return new Promise<UsersModelInterface>(async (resolve, reject) => {
        try {
            await dbConnect();

            if (userId) {
                const user = await UserModel.findById(userId);
                if (!user) {
                    throw new Error("User not found.");
                } else {
                    return resolve(user);
                }
            }

            if (email || phone) {
                const user = UserModel.findOne({
                    $or: [
                        { email },
                        { phone },
                    ]
                });

                if (!user) {
                    throw new Error("User not found.");
                } else {
                    return resolve(user);
                }
            }

            throw new Error("Please provide atleast one argument.")

        } catch (err) {
            return reject(err);
        }
    })
}