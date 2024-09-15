import { Router } from 'express';
import * as ProductController from '../../controllers/catalog/product.controller';
import { validate } from '../../middleware/validate';
import { createProductSchema, updateProductSchema } from '../../services/validation';

const router = Router();

router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.getProductById);
router.post('/', validate(createProductSchema), ProductController.createProduct);
router.put('/:id', validate(updateProductSchema), ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

export default router;