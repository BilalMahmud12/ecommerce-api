import { Router } from 'express';
import * as AttributeSetController from '../../controllers/catalog/attributeSet.controller';

const router = Router();

router.get('/', AttributeSetController.getAttributeSets);
router.get('/:id', AttributeSetController.getAttributeSetById);
router.post('/', AttributeSetController.createAttributeSet);
router.put('/:id', AttributeSetController.updateAttributeSet);
router.delete('/:id', AttributeSetController.deleteAttributeSet);

export default router;
