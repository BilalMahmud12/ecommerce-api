import Option, { IOption } from '../../models/catalog/option.model';
import { logger } from '../../utils/logger';

export const findAllOptions = async (): Promise<IOption[]> => {
    logger('Fetching all options...');
    const options = await Option.find().exec();
    logger('Options fetched successfully', options);
    return options;
};

export const findOptionById = async (optionId: string): Promise<IOption | null> => {
    logger(`Fetching option with ID: ${optionId}`);
    const option = await Option.findById(optionId).exec();
    if (!option) {
        logger('Option not found');
        throw new Error('Option not found');
    }
    logger('Option fetched successfully', option);
    return option;
};

export const createOption = async (data: IOption): Promise<IOption> => {
    logger('Creating new option...');
    const option = new Option(data);
    const savedOption = await option.save();
    logger('Option created successfully', savedOption);
    return savedOption;
};

export const updateOption = async (optionId: string, data: Partial<IOption>): Promise<IOption | null> => {
    logger(`Updating option with ID: ${optionId}`);
    const updatedOption = await Option.findByIdAndUpdate(optionId, data, { new: true }).exec();
    if (!updatedOption) {
        logger('Option not found');
        throw new Error('Option not found');
    }
    logger('Option updated successfully', updatedOption);
    return updatedOption;
};

export const deleteOption = async (optionId: string): Promise<IOption | null> => {
    logger(`Deleting option with ID: ${optionId}`);
    const deletedOption = await Option.findByIdAndDelete(optionId).exec();
    if (!deletedOption) {
        logger('Option not found');
        throw new Error('Option not found');
    }
    logger('Option deleted successfully', deletedOption);
    return deletedOption;
};
