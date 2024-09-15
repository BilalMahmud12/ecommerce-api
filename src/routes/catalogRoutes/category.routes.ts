import { Router } from 'express';
import * as CategoryController from '../../controllers/catalog/category.controller';
import { validate } from '../../middleware/validate';
import { createCategorySchema, updateCategorySchema } from '../../services/validation';

const router = Router();

router.get('/', CategoryController.getCategories);
router.get('/:id', CategoryController.getCategoryById);
router.post('/', validate(createCategorySchema) ,CategoryController.createCategory);
router.put('/:id', validate(updateCategorySchema), CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);

export default router;