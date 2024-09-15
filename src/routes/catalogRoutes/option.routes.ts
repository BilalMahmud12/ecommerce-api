import { Router } from 'express';
import * as OptionController from '../../controllers/catalog/option.controller';
import { validate } from '../../middleware/validate';
import { createOptionSchema, updateOptionSchema } from '../../services/validation';

const router = Router();

router.get('/', OptionController.getOptions);
router.get('/:id', OptionController.getOptionById);
router.post('/', validate(createOptionSchema), OptionController.createOption);
router.put('/:id', validate(updateOptionSchema), OptionController.updateOption);
router.delete('/:id', OptionController.deleteOption);

export default router;
