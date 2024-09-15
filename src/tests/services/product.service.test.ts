import * as ProductRepository from '../../repository/catalog/product.repository';
import * as ProductService from '../../services/catalog/product.service';

jest.mock('../../repository/catalog/product.repository');

describe('Product Service', () => {
    it('should fetch all products', async () => {
        const mockProducts = [
            { name: 'Product 1', price: 100 },
            { name: 'Product 2', price: 200 },
        ];

        (ProductRepository.findAllProducts as jest.Mock).mockResolvedValue(mockProducts);

        const products = await ProductService.getAllProducts();

        expect(products).toEqual(mockProducts);
        expect(ProductRepository.findAllProducts).toHaveBeenCalledTimes(1);
    });

    it('should create a new product', async () => {
        const newProductData = {
            name: 'New Product',
            price: 150,
        };

        const savedProduct = { ...newProductData, _id: 'product-id' };

        (ProductRepository.createProduct as jest.Mock).mockResolvedValue(savedProduct);

        const result = await ProductService.createProduct(newProductData);

        expect(result).toEqual(savedProduct);
        expect(ProductRepository.createProduct).toHaveBeenCalledWith(newProductData);
        expect(ProductRepository.createProduct).toHaveBeenCalledTimes(1);
    });

    it('should update an existing product', async () => {
        const updateData = { name: 'Updated Product' };
        const updatedProduct = { ...updateData, _id: 'product-id', price: 150 };

        (ProductRepository.updateProduct as jest.Mock).mockResolvedValue(updatedProduct);

        const result = await ProductService.updateProduct('product-id', updateData);

        expect(result).toEqual(updatedProduct);
        expect(ProductRepository.updateProduct).toHaveBeenCalledWith('product-id', updateData);
        expect(ProductRepository.updateProduct).toHaveBeenCalledTimes(1);
    });

    it('should delete a product', async () => {
        (ProductRepository.deleteProduct as jest.Mock).mockResolvedValue(null);

        await ProductService.deleteProduct('product-id');

        expect(ProductRepository.deleteProduct).toHaveBeenCalledWith('product-id');
        expect(ProductRepository.deleteProduct).toHaveBeenCalledTimes(1);
    });
});
