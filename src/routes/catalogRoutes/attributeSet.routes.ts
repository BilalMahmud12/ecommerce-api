import { Router } from 'express';
import * as AttributeSetController from '../../controllers/catalog/attributeSet.controller';
import { validate } from '../../middleware/validate';
import { createAttributeSetSchema, updateAttributeSetSchema } from '../../services/validation';
import { verifyApiKey } from '../../middleware/apiKeyMiddleware';

const router = Router();

router.get('/', verifyApiKey, AttributeSetController.getAttributeSets);
router.get('/:id', verifyApiKey, AttributeSetController.getAttributeSetById);
router.post('/', verifyApiKey, validate(createAttributeSetSchema), AttributeSetController.createAttributeSet);
router.put('/:id', verifyApiKey, validate(updateAttributeSetSchema), AttributeSetController.updateAttributeSet);
router.delete('/:id', verifyApiKey, AttributeSetController.deleteAttributeSet);

export default router;
