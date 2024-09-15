import mongoose, { Schema, Document } from "mongoose";

interface IAttributeSet extends Document {
    name: string;
    attributes: mongoose.Types.ObjectId[];
    categoies: mongoose.Types.ObjectId[];
}

const AttributeSetSchema: Schema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    attributes: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Attribute" 
    }],
    categoies: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Category" 
    }],
});

export default mongoose.model<IAttributeSet>("AttributeSet", AttributeSetSchema);