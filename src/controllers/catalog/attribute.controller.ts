import { Request, Response } from 'express';
import * as AttributeService from '../../services/catalog/attribute.service';
import { handleError } from '../../utils/errorHandler';
import { IAttribute } from '../../models/catalog/attribute.model';

export const getAttributes = handleError(async (req: Request, res: Response) => {
    const attributes: IAttribute[] = await AttributeService.getAllAttributes();
    res.status(200).json(attributes);
});

export const getAttributeById = handleError(async (req: Request, res: Response) => {
    const attribute: IAttribute | null = await AttributeService.getAttributeById(req.params.id);
    if (!attribute) {
        return res.status(404).json({ message: 'Attribute not found' });
    }
    res.status(200).json(attribute);
});

export const createAttribute = handleError(async (req: Request, res: Response) => {
    const newAttribute: IAttribute = await AttributeService.createAttribute(req.body);
    res.status(201).json(newAttribute);
});

export const updateAttribute = handleError(async (req: Request, res: Response) => {
    const updatedAttribute: IAttribute | null = await AttributeService.updateAttribute(req.params.id, req.body);
    if (!updatedAttribute) {
        return res.status(404).json({ message: 'Attribute not found' });
    }
    res.status(200).json(updatedAttribute);
});

export const deleteAttribute = handleError(async (req: Request, res: Response) => {
    const deletedAttribute: IAttribute | null = await AttributeService.deleteAttribute(req.params.id);
    if (!deletedAttribute) {
        return res.status(404).json({ message: 'Attribute not found' });
    }
    res.status(204).send();
});
