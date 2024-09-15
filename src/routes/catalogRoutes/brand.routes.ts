import { Router } from 'express';
import * as BrandController from '../../controllers/catalog/brand.controller';

const router = Router();

router.get('/', BrandController.getBrands);
router.get('/:id', BrandController.getBrandById);
router.post('/', BrandController.createBrand);
router.put('/:id', BrandController.updateBrand);
router.delete('/:id', BrandController.deleteBrand);

export default router;
