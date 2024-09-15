import * as OptionSetRepository from '../../repository/catalog/optionSet.repository';
import { IOptionSet } from '../../models/catalog/optionSet.model';
import { logger } from '../../utils/logger';

export const getAllOptionSets = async (): Promise<IOptionSet[]> => {
    logger('Fetching all option sets from service...');
    return OptionSetRepository.findAllOptionSets();
};

export const getOptionSetById = async (optionSetId: string): Promise<IOptionSet | null> => {
    logger(`Fetching option set by ID: ${optionSetId} from service...`);
    return OptionSetRepository.findOptionSetById(optionSetId);
};

export const createOptionSet = async (data: IOptionSet): Promise<IOptionSet> => {
    logger('Creating new option set from service...');
    return OptionSetRepository.createOptionSet(data);
};

export const updateOptionSet = async (optionSetId: string, data: Partial<IOptionSet>): Promise<IOptionSet | null> => {
    logger(`Updating option set by ID: ${optionSetId} from service...`);
    return OptionSetRepository.updateOptionSet(optionSetId, data);
};

export const deleteOptionSet = async (optionSetId: string): Promise<IOptionSet | null> => {
    logger(`Deleting option set by ID: ${optionSetId} from service...`);
    return OptionSetRepository.deleteOptionSet(optionSetId);
};
