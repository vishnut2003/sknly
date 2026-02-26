import mongoose, { ObjectId, Types } from "mongoose";

export interface AddressModelInterface extends mongoose.Document {
    line1: string,
    line2?: string,
    city: string,
    pincode: string,
    state: string,
    userId: Types.ObjectId,
}

const addressSchema = new mongoose.Schema<AddressModelInterface>({
    line1: {
        type: String,
        required: true,
    },
    line2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    userId: {
        type: Types.ObjectId,
        ref: "Users",
        required: true,
    },
}, { timestamps: true })

const AddressModel = mongoose.models.Addresses || mongoose.model("Addresses", addressSchema);
export default AddressModel;