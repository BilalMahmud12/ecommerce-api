import express from "express";
import { getProducts, createProduct } from "../../controllers/catalog/product.controller";
import { verifyApiKey } from "../../middleware/apiKeyMiddleware";

const router = express.Router();

router.get('/', verifyApiKey, getProducts);
router.post("/", verifyApiKey, createProduct);

export default router;