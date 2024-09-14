import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce');
        console.log("Successfully Connected to MongoDB.");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

export default connectDB;