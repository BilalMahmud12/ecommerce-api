import mongoose, { Schema, Document } from "mongoose";

export interface IAttribute extends Document {
    name: string;
    valueType: string;
    options: string[];
}

const AttributeSchema: Schema = new Schema({
    active: { 
        type: Boolean, 
        default: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    valueType: { 
        type: String, 
        required: true 
    },
    options: [{ 
        type: String 
    }]
});

export default mongoose.model<IAttribute>("Attribute", AttributeSchema);