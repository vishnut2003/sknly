import { dbConnect } from "@/config/database";
import AddressModel from "@/models/address";

export interface AddAddressRequestData {
    line1: string,
    line2?: string,
    city: string,
    pincode: string,
    state: string,
    userId: string,
}

export async function addAddress(data: AddAddressRequestData) {
    return new Promise<void>(async (resolve, reject) => {
        try {
            await dbConnect();

            if (
                !data.line1 ||
                !data.city || 
                !data.pincode ||
                !data.state ||
                !data.userId
            ) {
                throw new Error("Required fields are missing.")
            }

            const address = new AddressModel(data);

            address.save();

            return resolve();

        } catch (err) {
            return reject(err);
        }
    })   
}