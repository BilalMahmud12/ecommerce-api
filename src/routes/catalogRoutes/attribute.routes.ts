import { Router } from 'express';
import * as AttributeController from '../../controllers/catalog/attribute.controller';
import { validate } from '../../middleware/validate';
import { createAttributeSchema, updateAttributeSchema } from '../../services/validation';

const router = Router();

router.get('/', AttributeController.getAttributes);
router.get('/:id', AttributeController.getAttributeById);
router.post('/', validate(createAttributeSchema), AttributeController.createAttribute);
router.put('/:id', validate(updateAttributeSchema), AttributeController.updateAttribute);
router.delete('/:id', AttributeController.deleteAttribute);

export default router;
