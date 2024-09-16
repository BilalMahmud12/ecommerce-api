import { Router } from 'express';
import * as ProductController from '../../controllers/catalog/product.controller';
import { validate } from '../../middleware/validate';
import { createProductSchema, updateProductSchema } from '../../services/validation';
import { verifyApiKey } from '../../middleware/apiKeyMiddleware';

const router = Router();

router.get('/', verifyApiKey, ProductController.getProducts);
router.get('/:id', verifyApiKey, ProductController.getProductById);
router.post('/', verifyApiKey, validate(createProductSchema), ProductController.createProduct);
router.put('/:id', verifyApiKey, validate(updateProductSchema), ProductController.updateProduct);
router.delete('/:id', verifyApiKey, ProductController.deleteProduct);

export default router;