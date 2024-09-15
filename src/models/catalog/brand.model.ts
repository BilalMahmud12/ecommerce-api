import mongoose, { Schema, Document } from "mongoose";

interface IBrand extends Document {
    active: boolean;
    name: string;
    slug: string;
    description: string;
    logo: string;
    images: {
        url: string;
        width: number;
        height: number;
    }[];
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    products: mongoose.Types.ObjectId[];
}

const BrandSchema: Schema = new Schema({
    active: {
        type: Boolean,
        default: true
    },
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    logo: {
        type: String
    },
    images: {
        type: [
            {
                url: {
                    type: String,
                    required: true
                },
                width: {
                    type: Number,
                    required: true
                },
                height: {
                    type: Number,
                    required: true
                }
            }
        ],
        default: []
    },
    metaTitle: {
        type: String
    },
    metaDescription: {
        type: String
    },
    metaKeywords: {
        type: String
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});

export default mongoose.model<IBrand>("Brand", BrandSchema);