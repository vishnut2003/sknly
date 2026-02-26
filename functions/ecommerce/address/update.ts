import { dbConnect } from "@/config/database";
import { AddAddressRequestData } from "./add";
import AddressModel, { AddressModelInterface } from "@/models/address";

export type UpdateAddressRequestData = AddAddressRequestData & {
    addressId: string,
}

export async function updateAddress(data: UpdateAddressRequestData) {
    return new Promise<void>(async (resolve, reject) => {
        try {
            await dbConnect();

            if (!data.addressId) {
                throw new Error("AddressId is required.")
            }

            if (
                !data.city ||
                !data.line1 ||
                !data.pincode ||
                !data.state
            ) {
                throw new Error("Required Field is missing.")
            }

            const { addressId, userId, ...update } = data;

            const existAddress = await AddressModel.findById(addressId) as AddressModelInterface;

            if (existAddress.userId.toString() !== userId) {
                throw new Error("user id is not matching.")
            }

            await AddressModel.findByIdAndUpdate(
                addressId,
                update,
            );

            return resolve();

        } catch (err) {
            return reject(err);
        }
    })
}