import mongoose, { Schema, Document } from "mongoose";

interface IOptionSet extends Document {
    name: string;
    options: mongoose.Types.ObjectId[];
    categories: mongoose.Types.ObjectId[];
}

const OptionSetSchema: Schema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    options: [{ 
        type: Schema.Types.ObjectId, 
        ref: "Option" 
    }],
    categories: [{ 
        type: Schema.Types.ObjectId, 
        ref: "Category" 
    }]
});

export default mongoose.model<IOptionSet>("OptionSet", OptionSetSchema);
