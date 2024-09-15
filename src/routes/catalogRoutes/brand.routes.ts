import { Router } from 'express';
import * as BrandController from '../../controllers/catalog/brand.controller';
import { validate } from '../../middleware/validate';
import { createBrandSchema, updateBrandSchema } from '../../services/validation';

const router = Router();

router.get('/', BrandController.getBrands);
router.get('/:id', BrandController.getBrandById);
router.post('/', validate(createBrandSchema), BrandController.createBrand);
router.put('/:id', validate(updateBrandSchema), BrandController.updateBrand);
router.delete('/:id', BrandController.deleteBrand);

export default router;
