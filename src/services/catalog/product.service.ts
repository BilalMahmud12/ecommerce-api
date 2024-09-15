import * as ProductRepository from "../../repository/catalog/product.repository"
import * as ProductVariantRepository from "../../repository/catalog/productVariant.repository";
import { logger } from '../../utils/logger';

export const getAllProducts = async () => {
    logger('Fetching all products from service...');
    return ProductRepository.findAllProducts();
};

export const getProductById = async (productId: string) => {
    logger(`Fetching product by ID: ${productId} from service...`);
    return ProductRepository.findProductById(productId);
};

export const createProduct = async (data: any) => {
    logger('Creating new product from service...');
    return ProductRepository.createProduct(data);
};

export const updateProduct = async (productId: string, data: any) => {
    logger(`Updating product with ID: ${productId} from service...`);
    return ProductRepository.updateProduct(productId, data);
};

export const deleteProduct = async (productId: string) => {
    logger(`Deleting product with ID: ${productId} from service...`);
    return ProductRepository.deleteProduct(productId);
};

export const getAllProductVariantsByProductId = async (productId: string) => {
    logger(`Fetching all variants for product with ID: ${productId}`);
    return ProductVariantRepository.findAllVariantsByProductId(productId);
};

export const getProductVariantById = async (productId: string, variantId: string) => {
    logger(`Fetching variant with ID: ${variantId} for product ID: ${productId}`);
    return ProductVariantRepository.findVariantById(productId, variantId);
};

export const createProductVariant = async (productId: string, data: any) => {
    logger(`Creating variant for product with ID: ${productId}`);
    return ProductVariantRepository.createVariant(productId, data);
};

export const updateProductVariant = async (productId: string, variantId: string, data: any) => {
    logger(`Updating variant with ID: ${variantId} for product ID: ${productId}`);
    return ProductVariantRepository.updateVariant(productId, variantId, data);
};

export const deleteProductVariant = async (productId: string, variantId: string) => {
    logger(`Deleting variant with ID: ${variantId} for product ID: ${productId}`);
    return ProductVariantRepository.deleteVariant(productId, variantId);
};