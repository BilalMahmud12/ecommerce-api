import { Router } from 'express';
import * as OptionController from '../../controllers/catalog/option.controller';

const router = Router();

router.get('/', OptionController.getOptions);
router.get('/:id', OptionController.getOptionById);
router.post('/', OptionController.createOption);
router.put('/:id', OptionController.updateOption);
router.delete('/:id', OptionController.deleteOption);

export default router;
