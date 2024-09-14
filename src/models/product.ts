import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
    name: string;
    slug: string;
    category: string;
    description: string;
    price: number;
    stock: number;
    images: string;
}

const ProductSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    images: {
        type: String,
        required: true,
    },
});

export default mongoose.model<IProduct>("Product", ProductSchema);