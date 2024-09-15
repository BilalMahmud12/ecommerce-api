import { Request, Response, NextFunction } from 'express';
import * as ProductController from '../../controllers/catalog/product.controller';
import * as ProductService from '../../services/catalog/product.service';

jest.mock('../../services/catalog/product.service');

describe('Product Controller', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let jsonMock: jest.Mock;
    let next: NextFunction;

    beforeEach(() => {
        jsonMock = jest.fn();
        res = {
            status: jest.fn().mockReturnThis(),
            json: jsonMock,
        };

        next = jest.fn();
    });

    it('should get all products', async () => {
        const mockProducts = [
            { name: 'Product 1', price: 100 },
            { name: 'Product 2', price: 200 },
        ];

        (ProductService.getAllProducts as jest.Mock).mockResolvedValue(mockProducts);

        await ProductController.getProducts(req as Request, res as Response, next);

        expect(ProductService.getAllProducts).toHaveBeenCalledTimes(1);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(mockProducts);
    });

    it('should return a product by ID', async () => {
        const mockProduct = { name: 'Product 1' };
        req = { params: { id: 'product-id' } };

        (ProductService.getProductById as jest.Mock).mockResolvedValue(mockProduct);

        await ProductController.getProductById(req as Request, res as Response, next);

        expect(ProductService.getProductById).toHaveBeenCalledWith('product-id');
        expect(res.status).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(mockProduct);
    });
});
