import { Request, Response } from 'express';
import * as AttributeSetService from '../../services/catalog/attributeSet.service';
import { handleError } from '../../utils/errorHandler';
import { IAttributeSet } from '../../models/catalog/attributeSet.model';

export const getAttributeSets = handleError(async (req: Request, res: Response) => {
    const attributeSets: IAttributeSet[] = await AttributeSetService.getAllAttributeSets();
    res.status(200).json(attributeSets);
});

export const getAttributeSetById = handleError(async (req: Request, res: Response) => {
    const attributeSet: IAttributeSet | null = await AttributeSetService.getAttributeSetById(req.params.id);
    if (!attributeSet) {
        return res.status(404).json({ message: 'Attribute set not found' });
    }
    res.status(200).json(attributeSet);
});

export const createAttributeSet = handleError(async (req: Request, res: Response) => {
    const newAttributeSet: IAttributeSet = await AttributeSetService.createAttributeSet(req.body);
    res.status(201).json(newAttributeSet);
});

export const updateAttributeSet = handleError(async (req: Request, res: Response) => {
    const updatedAttributeSet: IAttributeSet | null = await AttributeSetService.updateAttributeSet(req.params.id, req.body);
    if (!updatedAttributeSet) {
        return res.status(404).json({ message: 'Attribute set not found' });
    }
    res.status(200).json(updatedAttributeSet);
});

export const deleteAttributeSet = handleError(async (req: Request, res: Response) => {
    const deletedAttributeSet: IAttributeSet | null = await AttributeSetService.deleteAttributeSet(req.params.id);
    if (!deletedAttributeSet) {
        return res.status(404).json({ message: 'Attribute set not found' });
    }
    res.status(204).send();
});
