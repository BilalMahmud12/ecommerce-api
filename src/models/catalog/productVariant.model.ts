import mongoose, { Schema, Document } from "mongoose";

interface IProductVariant extends Document {
    product: mongoose.Types.ObjectId;
    name: string;
    slug: string;
    options: mongoose.Types.ObjectId[];
    price: number;
    stock: number;
    discount: boolean;
    discountValue: number;
}

const ProductVariantSchema: Schema = new Schema({
    product: { 
        type: Schema.Types.ObjectId, 
        ref: "Product", 
        required: true 
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
    options: [{ 
        type: Schema.Types.ObjectId, 
        ref: "Option" 
    }],
    price: { 
        type: Number, 
        required: true 
    },
    stock: { 
        type: Number, 
        required: true 
    },
    discount: { 
        type: Boolean, 
        default: false 
    },
    discountValue: { 
        type: Number, 
        default: 0 
    }
});

export default mongoose.model<IProductVariant>("ProductVariant", ProductVariantSchema);
