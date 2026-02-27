import { dbConnect } from "@/config/database";
import AddressModel from "@/models/address";

export async function deleteOneAddress (addressId: string) {
    return new Promise<void>(async (resolve, reject) => {
        try {
            await dbConnect();
            await AddressModel.findByIdAndDelete(addressId);
            return resolve();
        } catch (err) {
            return reject(err);
        }
    })
}