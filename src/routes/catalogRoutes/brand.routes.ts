import { Router } from 'express';
import * as BrandController from '../../controllers/catalog/brand.controller';
import { validate } from '../../middleware/validate';
import { createBrandSchema, updateBrandSchema } from '../../services/validation';
import { verifyApiKey } from '../../middleware/apiKeyMiddleware';

const router = Router();

router.get('/', verifyApiKey, BrandController.getBrands);
router.get('/:id', verifyApiKey, BrandController.getBrandById);
router.post('/', verifyApiKey, validate(createBrandSchema), BrandController.createBrand);
router.put('/:id', verifyApiKey, validate(updateBrandSchema), BrandController.updateBrand);
router.delete('/:id', verifyApiKey, BrandController.deleteBrand);

export default router;
