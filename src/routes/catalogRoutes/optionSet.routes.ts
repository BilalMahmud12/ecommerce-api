import { Router } from 'express';
import * as OptionSetController from '../../controllers/catalog/optionSet.controller';
import { validate } from '../../middleware/validate';
import { createOptionSetSchema, updateOptionSetSchema } from '../../services/validation';

const router = Router();

router.get('/', OptionSetController.getOptionSets);
router.get('/:id', OptionSetController.getOptionSetById);
router.post('/', validate(createOptionSetSchema), OptionSetController.createOptionSet);
router.put('/:id', validate(updateOptionSetSchema), OptionSetController.updateOptionSet);
router.delete('/:id', OptionSetController.deleteOptionSet);

export default router;
