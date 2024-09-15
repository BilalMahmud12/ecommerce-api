import mongoose, { Schema, Document } from "mongoose";

interface ICategory extends Document {
    active: boolean;
    parent: mongoose.Types.ObjectId;
    name: string;
    slug: string;
    description: string;
    images: {
        url: string;
        width: number;
        height: number;
    }[];
    children: mongoose.Types.ObjectId[];
    sortOrder: number;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    attributeSets: mongoose.Types.ObjectId[];
    optionSets: mongoose.Types.ObjectId[];
}

const CategorySchema: Schema = new Schema({
    active: {
        type: Boolean,
        default: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: "Category"
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
    children: [{
        type: Schema.Types.ObjectId,
        ref: "Category"
    }],
    sortOrder: {
        type: Number,
        default: 0
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
    attributeSets: [{
        type: Schema.Types.ObjectId,
        ref: "AttributeSet"
    }],
    optionSets: [{
        type: Schema.Types.ObjectId,
        ref: "OptionSet"
    }]
});

export default mongoose.model<ICategory>("Category", CategorySchema);