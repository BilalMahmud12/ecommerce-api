import * as AttributeRepository from '../../repository/catalog/attribute.repository';
import { IAttribute } from '../../models/catalog/attribute.model';
import { logger } from '../../utils/logger';

export const getAllAttributes = async (): Promise<IAttribute[]> => {
    logger('Fetching all attributes from service...');
    return AttributeRepository.findAllAttributes();
};

export const getAttributeById = async (attributeId: string): Promise<IAttribute | null> => {
    logger(`Fetching attribute by ID: ${attributeId} from service...`);
    return AttributeRepository.findAttributeById(attributeId);
};

export const createAttribute = async (data: IAttribute): Promise<IAttribute> => {
    logger('Creating new attribute from service...');
    return AttributeRepository.createAttribute(data);
};

export const updateAttribute = async (attributeId: string, data: Partial<IAttribute>): Promise<IAttribute | null> => {
    logger(`Updating attribute by ID: ${attributeId} from service...`);
    return AttributeRepository.updateAttribute(attributeId, data);
};

export const deleteAttribute = async (attributeId: string): Promise<IAttribute | null> => {
    logger(`Deleting attribute by ID: ${attributeId} from service...`);
    return AttributeRepository.deleteAttribute(attributeId);
};
