import Product, { IProduct } from "../../models/catalog/product.model"
import { logger } from "../../utils/logger"

export const findAllProducts = async (): Promise<IProduct[]> => {
    logger('Start fetching products...');
    
    const products = await Product.find()
        .populate('categories')
        .populate('variants')
        .exec();

    logger('Products fetched successfully', products);
    return products;
};

export const findProductById = async (productId: string): Promise<IProduct | null> => {
    logger(`Fetching product with ID: ${productId}`);

    const product = await Product.findById(productId)
        .populate('categories')
        .populate('variants')
        .exec();

    if (!product) {
        throw new Error('Product not found');
    }

    logger('Product fetched successfully', product);

    return product;
};

export const createProduct = async (data: IProduct): Promise<IProduct> => {
    logger('Creating new product...');

    const product = new Product(data);

    const savedProduct = await product.save();

    logger('Product created successfully', savedProduct);

    return savedProduct;
};

export const updateProduct = async (productId: string, data: Partial<IProduct>): Promise<IProduct | null> => {
    logger(`Updating product with ID: ${productId}`);

    const updatedProduct = await Product.findByIdAndUpdate(productId, data, { new: true }).exec();

    if (!updatedProduct) {
        throw new Error('Product not found');
    }

    logger('Product updated successfully', updatedProduct);

    return updatedProduct;
};

export const deleteProduct = async (productId: string): Promise<IProduct | null> => {
    logger(`Deleting product with ID: ${productId}`);

    const deletedProduct = await Product.findByIdAndDelete(productId).exec();

    if (!deletedProduct) {
        throw new Error('Product not found');
    }

    logger('Product deleted successfully');
    
    return deletedProduct;
};