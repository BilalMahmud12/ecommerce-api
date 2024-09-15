import * as BrandRepository from '../../repository/catalog/brand.repository';
import { IBrand } from '../../models/catalog/brand.model';
import { logger } from '../../utils/logger';

export const getAllBrands = async (): Promise<IBrand[]> => {
    logger('Fetching all brands from service...');
    return BrandRepository.findAllBrands();
};

export const getBrandById = async (brandId: string): Promise<IBrand | null> => {
    logger(`Fetching brand by ID: ${brandId} from service...`);
    return BrandRepository.findBrandById(brandId);
};

export const createBrand = async (data: IBrand): Promise<IBrand> => {
    logger('Creating new brand from service...');
    return BrandRepository.createBrand(data);
};

export const updateBrand = async (brandId: string, data: Partial<IBrand>): Promise<IBrand | null> => {
    logger(`Updating brand by ID: ${brandId} from service...`);
    return BrandRepository.updateBrand(brandId, data);
};

export const deleteBrand = async (brandId: string): Promise<IBrand | null> => {
    logger(`Deleting brand by ID: ${brandId} from service...`);
    return BrandRepository.deleteBrand(brandId);
};
