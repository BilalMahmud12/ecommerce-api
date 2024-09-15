import OptionSet, { IOptionSet } from '../../models/catalog/optionSet.model';
import { logger } from '../../utils/logger';

export const findAllOptionSets = async (): Promise<IOptionSet[]> => {
    logger('Fetching all option sets...');
    const optionSets = await OptionSet.find().populate('options').exec();
    logger('Option sets fetched successfully', optionSets);
    return optionSets;
};

export const findOptionSetById = async (optionSetId: string): Promise<IOptionSet | null> => {
    logger(`Fetching option set with ID: ${optionSetId}`);
    const optionSet = await OptionSet.findById(optionSetId).populate('options').exec();
    if (!optionSet) {
        logger('Option set not found');
        throw new Error('Option set not found');
    }
    logger('Option set fetched successfully', optionSet);
    return optionSet;
};

export const createOptionSet = async (data: IOptionSet): Promise<IOptionSet> => {
    logger('Creating new option set...');
    const optionSet = new OptionSet(data);
    const savedOptionSet = await optionSet.save();
    logger('Option set created successfully', savedOptionSet);
    return savedOptionSet;
};

export const updateOptionSet = async (optionSetId: string, data: Partial<IOptionSet>): Promise<IOptionSet | null> => {
    logger(`Updating option set with ID: ${optionSetId}`);
    const updatedOptionSet = await OptionSet.findByIdAndUpdate(optionSetId, data, { new: true }).exec();
    if (!updatedOptionSet) {
        logger('Option set not found');
        throw new Error('Option set not found');
    }
    logger('Option set updated successfully', updatedOptionSet);
    return updatedOptionSet;
};

export const deleteOptionSet = async (optionSetId: string): Promise<IOptionSet | null> => {
    logger(`Deleting option set with ID: ${optionSetId}`);
    const deletedOptionSet = await OptionSet.findByIdAndDelete(optionSetId).exec();
    if (!deletedOptionSet) {
        logger('Option set not found');
        throw new Error('Option set not found');
    }
    logger('Option set deleted successfully', deletedOptionSet);
    return deletedOptionSet;
};
