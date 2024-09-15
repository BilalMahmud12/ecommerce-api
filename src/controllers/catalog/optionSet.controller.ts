import { Request, Response } from 'express';
import * as OptionSetService from '../../services/catalog/optionSet.service';
import { handleError } from '../../utils/errorHandler';

export const getOptionSets = handleError(async (req: Request, res: Response) => {
    const optionSets = await OptionSetService.getAllOptionSets();
    res.status(200).json(optionSets);
});

export const getOptionSetById = handleError(async (req: Request, res: Response) => {
    const optionSet = await OptionSetService.getOptionSetById(req.params.id);
    if (!optionSet) {
        return res.status(404).json({ message: 'Option set not found' });
    }
    res.status(200).json(optionSet);
});

export const createOptionSet = handleError(async (req: Request, res: Response) => {
    const newOptionSet = await OptionSetService.createOptionSet(req.body);
    res.status(201).json(newOptionSet);
});

export const updateOptionSet = handleError(async (req: Request, res: Response) => {
    const updatedOptionSet = await OptionSetService.updateOptionSet(req.params.id, req.body);
    if (!updatedOptionSet) {
        return res.status(404).json({ message: 'Option set not found' });
    }
    res.status(200).json(updatedOptionSet);
});

export const deleteOptionSet = handleError(async (req: Request, res: Response) => {
    const deletedOptionSet = await OptionSetService.deleteOptionSet(req.params.id);
    if (!deletedOptionSet) {
        return res.status(404).json({ message: 'Option set not found' });
    }
    res.status(204).send();
});
