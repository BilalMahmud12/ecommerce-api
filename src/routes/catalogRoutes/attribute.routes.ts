import { Router } from 'express';
import * as AttributeController from '../../controllers/catalog/attribute.controller';
import { validate } from '../../middleware/validate';
import { createAttributeSchema, updateAttributeSchema } from '../../services/validation';
import { verifyApiKey } from '../../middleware/apiKeyMiddleware';

const router = Router();

router.get('/', verifyApiKey, AttributeController.getAttributes);
router.get('/:id', verifyApiKey, AttributeController.getAttributeById);
router.post('/', verifyApiKey, validate(createAttributeSchema), AttributeController.createAttribute);
router.put('/:id', verifyApiKey, validate(updateAttributeSchema), AttributeController.updateAttribute);
router.delete('/:id', verifyApiKey, AttributeController.deleteAttribute);

export default router;
