import Brand, { IBrand } from '../../models/catalog/brand.model';
import { logger } from "../../utils/logger";

export const findAllBrands = async (): Promise<IBrand[]> => {
    logger('Start fetching all brands...');

    const brands = await Brand.find()
        .exec();

    logger('Brands fetched successfully', brands);
    return brands;
};

export const findBrandById = async (brandId: string): Promise<IBrand | null> => {
    logger(`Fetching brand with ID: ${brandId}`);

    const brand = await Brand.findById(brandId)
        .populate('products')
        .exec();

    if (!brand) {
        logger('Brand not found');
        throw new Error('Brand not found');
    }

    logger('Brand fetched successfully', brand);
    return brand;
};

export const createBrand = async (data: IBrand): Promise<IBrand> => {
    logger('Creating new brand...');

    const brand = new Brand(data);
    const savedBrand = await brand.save();

    logger('Brand created successfully', savedBrand);
    return savedBrand;
};

export const updateBrand = async (brandId: string, data: Partial<IBrand>): Promise<IBrand | null> => {
    logger(`Updating brand with ID: ${brandId}`);

    const updatedBrand = await Brand.findByIdAndUpdate(brandId, data, { new: true }).exec();

    if (!updatedBrand) {
        logger('Brand not found');
        throw new Error('Brand not found');
    }

    logger('Brand updated successfully', updatedBrand);
    return updatedBrand;
};


export const deleteBrand = async (brandId: string): Promise<IBrand | null> => {
    logger(`Deleting brand with ID: ${brandId}`);

    const deletedBrand = await Brand.findByIdAndDelete(brandId).exec();

    if (!deletedBrand) {
        logger('Brand not found');
        throw new Error('Brand not found');
    }

    logger('Brand deleted successfully', deletedBrand);
    return deletedBrand;
};
