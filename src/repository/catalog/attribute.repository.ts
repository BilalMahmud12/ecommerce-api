import Attribute, { IAttribute } from '../../models/catalog/attribute.model';
import { logger } from '../../utils/logger';

export const findAllAttributes = async (): Promise<IAttribute[]> => {
    logger('Start fetching all attributes...');

    const attributes = await Attribute.find().exec();

    logger('Attributes fetched successfully', attributes);
    return attributes;
};

export const findAttributeById = async (attributeId: string): Promise<IAttribute | null> => {
    logger(`Fetching attribute with ID: ${attributeId}`);

    const attribute = await Attribute.findById(attributeId).exec();

    if (!attribute) {
        logger('Attribute not found');
        throw new Error('Attribute not found');
    }

    logger('Attribute fetched successfully', attribute);
    return attribute;
};

export const createAttribute = async (data: IAttribute): Promise<IAttribute> => {
    logger('Creating new attribute...');

    const attribute = new Attribute(data);
    const savedAttribute = await attribute.save();

    logger('Attribute created successfully', savedAttribute);
    return savedAttribute;
};

export const updateAttribute = async (attributeId: string, data: Partial<IAttribute>): Promise<IAttribute | null> => {
    logger(`Updating attribute with ID: ${attributeId}`);

    const updatedAttribute = await Attribute.findByIdAndUpdate(attributeId, data, { new: true }).exec();

    if (!updatedAttribute) {
        logger('Attribute not found');
        throw new Error('Attribute not found');
    }

    logger('Attribute updated successfully', updatedAttribute);
    return updatedAttribute;
};

export const deleteAttribute = async (attributeId: string): Promise<IAttribute | null> => {
    logger(`Deleting attribute with ID: ${attributeId}`);

    const deletedAttribute = await Attribute.findByIdAndDelete(attributeId).exec();

    if (!deletedAttribute) {
        logger('Attribute not found');
        throw new Error('Attribute not found');
    }

    logger('Attribute deleted successfully', deletedAttribute);
    return deletedAttribute;
};
