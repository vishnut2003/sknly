import mongoose, { Schema, Document } from "mongoose";

interface ICounter extends Document {
    name: string;
    sequence: number;
}

const counterSchema = new Schema<ICounter>({
    name: { type: String, required: true, unique: true },
    sequence: { type: Number, default: 10000000000 },
});

const Counter = mongoose.models.Counter || mongoose.model<ICounter>("Counter", counterSchema);
export default Counter;