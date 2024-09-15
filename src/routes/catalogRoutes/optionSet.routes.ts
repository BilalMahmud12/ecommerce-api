import { Router } from 'express';
import * as OptionSetController from '../../controllers/catalog/optionSet.controller';

const router = Router();

router.get('/', OptionSetController.getOptionSets);
router.get('/:id', OptionSetController.getOptionSetById);
router.post('/', OptionSetController.createOptionSet);
router.put('/:id', OptionSetController.updateOptionSet);
router.delete('/:id', OptionSetController.deleteOptionSet);

export default router;
