import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import catalogRoutes from "./routes/catalogRoutes";
import './models/index'

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use('/api/catalog', catalogRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});