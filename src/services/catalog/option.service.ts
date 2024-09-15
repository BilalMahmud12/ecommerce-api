import * as OptionRepository from '../../repository/catalog/option.repository';
import { IOption } from '../../models/catalog/option.model';
import { logger } from '../../utils/logger';

export const getAllOptions = async (): Promise<IOption[]> => {
    logger('Fetching all options from service...');
    return OptionRepository.findAllOptions();
};

export const getOptionById = async (optionId: string): Promise<IOption | null> => {
    logger(`Fetching option by ID: ${optionId} from service...`);
    return OptionRepository.findOptionById(optionId);
};

export const createOption = async (data: IOption): Promise<IOption> => {
    logger('Creating new option from service...');
    return OptionRepository.createOption(data);
};

export const updateOption = async (optionId: string, data: Partial<IOption>): Promise<IOption | null> => {
    logger(`Updating option by ID: ${optionId} from service...`);
    return OptionRepository.updateOption(optionId, data);
};

export const deleteOption = async (optionId: string): Promise<IOption | null> => {
    logger(`Deleting option by ID: ${optionId} from service...`);
    return OptionRepository.deleteOption(optionId);
};
