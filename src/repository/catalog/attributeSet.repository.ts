import AttributeSet, { IAttributeSet } from '../../models/catalog/attributeSet.model';
import { logger } from '../../utils/logger';


export const findAllAttributeSets = async (): Promise<IAttributeSet[]> => {
    logger('Start fetching all attribute sets...');

    const attributeSets = await AttributeSet.find()
        .populate('attributes')
        .populate('categories')
        .exec();

    logger('Attribute sets fetched successfully', attributeSets);
    return attributeSets;
};

export const findAttributeSetById = async (attributeSetId: string): Promise<IAttributeSet | null> => {
    logger(`Fetching attribute set with ID: ${attributeSetId}`);

    const attributeSet = await AttributeSet.findById(attributeSetId)
        .populate('attributes')
        .populate('categories')
        .exec();

    if (!attributeSet) {
        logger('Attribute set not found');
        throw new Error('Attribute set not found');
    }

    logger('Attribute set fetched successfully', attributeSet);
    return attributeSet;
};

export const createAttributeSet = async (data: IAttributeSet): Promise<IAttributeSet> => {
    logger('Creating new attribute set...');

    const attributeSet = new AttributeSet(data);
    const savedAttributeSet = await attributeSet.save();

    logger('Attribute set created successfully', savedAttributeSet);
    return savedAttributeSet;
};

export const updateAttributeSet = async (attributeSetId: string, data: Partial<IAttributeSet>): Promise<IAttributeSet | null> => {
    logger(`Updating attribute set with ID: ${attributeSetId}`);

    const updatedAttributeSet = await AttributeSet.findByIdAndUpdate(attributeSetId, data, { new: true }).exec();

    if (!updatedAttributeSet) {
        logger('Attribute set not found');
        throw new Error('Attribute set not found');
    }

    logger('Attribute set updated successfully', updatedAttributeSet);
    return updatedAttributeSet;
};

export const deleteAttributeSet = async (attributeSetId: string): Promise<IAttributeSet | null> => {
    logger(`Deleting attribute set with ID: ${attributeSetId}`);

    const deletedAttributeSet = await AttributeSet.findByIdAndDelete(attributeSetId).exec();

    if (!deletedAttributeSet) {
        logger('Attribute set not found');
        throw new Error('Attribute set not found');
    }

    logger('Attribute set deleted successfully', deletedAttributeSet);
    return deletedAttributeSet;
};
