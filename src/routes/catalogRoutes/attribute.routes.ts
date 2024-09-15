import { Router } from 'express';
import * as AttributeController from '../../controllers/catalog/attribute.controller';

const router = Router();

router.get('/', AttributeController.getAttributes);
router.get('/:id', AttributeController.getAttributeById);
router.post('/', AttributeController.createAttribute);
router.put('/:id', AttributeController.updateAttribute);
router.delete('/:id', AttributeController.deleteAttribute);

export default router;
