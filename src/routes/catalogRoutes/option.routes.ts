import { Router } from 'express';
import * as OptionController from '../../controllers/catalog/option.controller';
import { validate } from '../../middleware/validate';
import { createOptionSchema, updateOptionSchema } from '../../services/validation';
import { verifyApiKey } from '../../middleware/apiKeyMiddleware';

const router = Router();

router.get('/', verifyApiKey, OptionController.getOptions);
router.get('/:id', verifyApiKey, OptionController.getOptionById);
router.post('/', verifyApiKey, validate(createOptionSchema), OptionController.createOption);
router.put('/:id', verifyApiKey, validate(updateOptionSchema), OptionController.updateOption);
router.delete('/:id', verifyApiKey, OptionController.deleteOption);

export default router;
