import * as AttributeSetRepository from '../../repository/catalog/attributeSet.repository';
import { IAttributeSet } from '../../models/catalog/attributeSet.model';
import { logger } from '../../utils/logger';

export const getAllAttributeSets = async (): Promise<IAttributeSet[]> => {
    logger('Fetching all attribute sets from service...');
    return AttributeSetRepository.findAllAttributeSets();
};

export const getAttributeSetById = async (attributeSetId: string): Promise<IAttributeSet | null> => {
    logger(`Fetching attribute set by ID: ${attributeSetId} from service...`);
    return AttributeSetRepository.findAttributeSetById(attributeSetId);
};

export const createAttributeSet = async (data: IAttributeSet): Promise<IAttributeSet> => {
    logger('Creating new attribute set from service...');
    return AttributeSetRepository.createAttributeSet(data);
};

export const updateAttributeSet = async (attributeSetId: string, data: Partial<IAttributeSet>): Promise<IAttributeSet | null> => {
    logger(`Updating attribute set by ID: ${attributeSetId} from service...`);
    return AttributeSetRepository.updateAttributeSet(attributeSetId, data);
};

export const deleteAttributeSet = async (attributeSetId: string): Promise<IAttributeSet | null> => {
    logger(`Deleting attribute set by ID: ${attributeSetId} from service...`);
    return AttributeSetRepository.deleteAttributeSet(attributeSetId);
};
