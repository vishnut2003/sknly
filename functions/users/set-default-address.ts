import { dbConnect } from "@/config/database";
import UserModel from "@/models/user";

export async function setUserDefaultAddress({
    addressId,
    userId,
}: {
    userId: string,
    addressId: string,
}) {
    return new Promise<void>(async (resolve, reject) => {
        try {
            await dbConnect();

            await UserModel.findByIdAndUpdate(
                userId,
                { defaultAddress: addressId }
            );

            return resolve();

        } catch (err) {
            return reject(err);
        }
    })
}