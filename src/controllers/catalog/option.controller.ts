import { Request, Response } from 'express';
import * as OptionService from '../../services/catalog/option.service'
import { handleError } from '../../utils/errorHandler';

export const getOptions = handleError(async (req: Request, res: Response) => {
    const options = await OptionService.getAllOptions();
    res.status(200).json(options);
});

export const getOptionById = handleError(async (req: Request, res: Response) => {
    const option = await OptionService.getOptionById(req.params.id);
    if (!option) {
        return res.status(404).json({ message: 'Option not found' });
    }
    res.status(200).json(option);
});

export const createOption = handleError(async (req: Request, res: Response) => {
    const newOption = await OptionService.createOption(req.body);
    res.status(201).json(newOption);
});

export const updateOption = handleError(async (req: Request, res: Response) => {
    const updatedOption = await OptionService.updateOption(req.params.id, req.body);
    if (!updatedOption) {
        return res.status(404).json({ message: 'Option not found' });
    }
    res.status(200).json(updatedOption);
});

export const deleteOption = handleError(async (req: Request, res: Response) => {
    const deletedOption = await OptionService.deleteOption(req.params.id);
    if (!deletedOption) {
        return res.status(404).json({ message: 'Option not found' });
    }
    res.status(204).send();
});
