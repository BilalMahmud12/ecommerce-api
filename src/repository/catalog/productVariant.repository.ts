import ProductVariant, { IProductVariant } from '../../models/catalog/productVariant.model';
import { logger } from '../../utils/logger';

export const findAllVariantsByProductId = async (productId: string): Promise<IProductVariant[]> => {
    logger(`Fetching all variants for product ID: ${productId}`);
    return ProductVariant.find({ product: productId }).populate('options').exec();
};

export const findVariantById = async (productId: string, variantId: string): Promise<IProductVariant | null> => {
    logger(`Fetching variant with ID: ${variantId} for product ID: ${productId}`);
    return ProductVariant.findOne({ _id: variantId, product: productId }).populate('options').exec();
};

export const createVariant = async (productId: string, data: any): Promise<IProductVariant> => {
    logger(`Creating new variant for product ID: ${productId}`);
    const variant = new ProductVariant({ ...data, product: productId });
    return variant.save();
};

export const updateVariant = async (productId: string, variantId: string, data: Partial<IProductVariant>): Promise<IProductVariant | null> => {
    logger(`Updating variant with ID: ${variantId} for product ID: ${productId}`);
    return ProductVariant.findOneAndUpdate({ _id: variantId, product: productId }, data, { new: true }).exec();
};

export const deleteVariant = async (productId: string, variantId: string): Promise<IProductVariant | null> => {
    logger(`Deleting variant with ID: ${variantId} for product ID: ${productId}`);
    return ProductVariant.findOneAndDelete({ _id: variantId, product: productId }).exec();
};
