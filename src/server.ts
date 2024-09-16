import express from "express";
import dotenv from "dotenv";
import helmet from 'helmet';
import connectDB from "./config/db";
import { verifyApiKey } from "./middleware/apiKeyMiddleware"
import catalogRoutes from "./routes/catalogRoutes";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(express.json());
app.use(verifyApiKey);

app.use('/api/catalog', catalogRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});