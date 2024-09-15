import { Router } from 'express';
import * as AttributeSetController from '../../controllers/catalog/attributeSet.controller';
import { validate } from '../../middleware/validate';
import { createAttributeSetSchema, updateAttributeSetSchema } from '../../services/validation';

const router = Router();

router.get('/', AttributeSetController.getAttributeSets);
router.get('/:id', AttributeSetController.getAttributeSetById);
router.post('/', validate(createAttributeSetSchema), AttributeSetController.createAttributeSet);
router.put('/:id', validate(updateAttributeSetSchema), AttributeSetController.updateAttributeSet);
router.delete('/:id', AttributeSetController.deleteAttributeSet);

export default router;
