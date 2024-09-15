import mongoose, { Schema, Document } from "mongoose";

export interface IOption extends Document {
    name: string;
    hexCode?: string;
    baseColor?: string;
    optionSet: mongoose.Types.ObjectId;
}

const OptionSchema: Schema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    hexCode: { 
        type: String 
    },
    baseColor: { 
        type: String 
    },
    optionSet: { 
        type: Schema.Types.ObjectId, 
        ref: "OptionSet", required: true 
    }
});

export default mongoose.model<IOption>("Option", OptionSchema);
