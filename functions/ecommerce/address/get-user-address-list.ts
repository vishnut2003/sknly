import { dbConnect } from "@/config/database";
import AddressModel, { AddressModelInterface } from "@/models/address";

export async function getUserAddressList(userId: string) {
    return new Promise<AddressModelInterface[]>(async (resolve, reject) => {
        try {
            await dbConnect();

            const addressList = await AddressModel.find({
                userId,
            });

            return resolve(addressList);

        } catch (err) {
            return reject(err);
        }
    })
}