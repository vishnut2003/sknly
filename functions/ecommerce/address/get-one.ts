import { dbConnect } from "@/config/database";
import AddressModel, { AddressModelInterface } from "@/models/address";

export async function getOneUserAddress (addressId: string) {
    return new Promise<AddressModelInterface>(async (resolve, reject) => {
        try {
            await dbConnect();
            const address = await AddressModel.findById(addressId);
            return resolve(address);
        } catch (err) {
            return reject(err);
        }
    })
}