import { Router } from 'express';
import * as CategoryController from '../../controllers/catalog/category.controller';
import { validate } from '../../middleware/validate';
import { createCategorySchema, updateCategorySchema } from '../../services/validation';
import { verifyApiKey } from '../../middleware/apiKeyMiddleware';

const router = Router();

router.get('/', verifyApiKey, CategoryController.getCategories);
router.get('/:id', verifyApiKey, CategoryController.getCategoryById);
router.post('/', verifyApiKey, validate(createCategorySchema) ,CategoryController.createCategory);
router.put('/:id', verifyApiKey, validate(updateCategorySchema), CategoryController.updateCategory);
router.delete('/:id', verifyApiKey, CategoryController.deleteCategory);

export default router;