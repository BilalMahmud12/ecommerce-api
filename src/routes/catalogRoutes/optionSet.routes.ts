import { Router } from 'express';
import * as OptionSetController from '../../controllers/catalog/optionSet.controller';
import { validate } from '../../middleware/validate';
import { createOptionSetSchema, updateOptionSetSchema } from '../../services/validation';
import { verifyApiKey } from '../../middleware/apiKeyMiddleware';

const router = Router();

router.get('/', verifyApiKey, OptionSetController.getOptionSets);
router.get('/:id', verifyApiKey, OptionSetController.getOptionSetById);
router.post('/', verifyApiKey, validate(createOptionSetSchema), OptionSetController.createOptionSet);
router.put('/:id', verifyApiKey, validate(updateOptionSetSchema), OptionSetController.updateOptionSet);
router.delete('/:id', verifyApiKey, OptionSetController.deleteOptionSet);

export default router;
