import mongoose, { Schema, Document } from "mongoose";

enum ProductType {
    PHYSICAL = "physical",
    DIGITAL = "digital"
}

enum VariantType {
    COLOR = "color",
    SIZE = "size",
    COLOR_SIZE = "Color and Size"
}

interface IProduct extends Document {
    active: boolean;
    type: ProductType;
    hasVariants: boolean;
    variantionType: VariantType;
    name: string;
    slug: string;
    description: string;
    categories: mongoose.Types.ObjectId[];
    brand: mongoose.Types.ObjectId;
    images: {
        url: string;
        width: number;
        height: number;
    }[];
    ids: {
        sku: string;
        barcode: string;
        mpn: string;
        gtin: string;
        isbn: string;
        upc: string;
        ean: string;
        jan: string;
        itf: string;
        otc: string;
    },
    cost: number;
    price: number;
    stock: number;
    trackStock: boolean;
    sold: number;
    rating: number;
    attributeSets: mongoose.Types.ObjectId[];
    optionSets: mongoose.Types.ObjectId[];
    variants: mongoose.Types.ObjectId[];
}

const ProductSchema: Schema = new Schema({
    active: {
        type: Boolean,
        default: true
    },
    type: {
        type: String,
        enum: Object.values(ProductType),
        required: true
    },
    hasVariants: {
        type: Boolean,
        default: false
    },
    variantionType: {
        type: String,
        enum: Object.values(VariantType),
        required: true,
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
    categories: [{ 
        type: Schema.Types.ObjectId, 
        ref: "Category" 
    }],
    brand: { 
        type: Schema.Types.ObjectId, 
        ref: "Brand" 
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
    ids: {
        sku: String,
        barcode: String,
        mpn: String,
        gtin: String,
        isbn: String,
        upc: String,
        ean: String,
        jan: String,
        itf: String,
        otc: String
    },
    price: { 
        type: Number, 
        required: true 
    },
    stock: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    attributes: [{ 
        type: Schema.Types.ObjectId, 
        ref: "Attribute" 
    }],
    attributeSets: [{ 
        type: Schema.Types.ObjectId, 
        ref: "AttributeSet" 
    }],
    optionSets: [{ 
        type: Schema.Types.ObjectId, 
        ref: "OptionSet" 
    }],
    variants: [{ 
        type: Schema.Types.ObjectId, 
        ref: "ProductVariant" 
    }]
});

export default mongoose.model<IProduct>("Product", ProductSchema);