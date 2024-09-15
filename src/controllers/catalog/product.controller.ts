import { Request, Response } from 'express';
import * as ProductService from '../../services/catalog/product.service';
import { handleError } from '../../utils/errorHandler';

export const getProducts = handleError(async (req: Request, res: Response) => {
    const products = await ProductService.getAllProducts();
    res.status(200).json(products);
});

export const getProductById = handleError(async (req: Request, res: Response) => {
    const product = await ProductService.getProductById(req.params.id);
    res.status(200).json(product);
});

export const createProduct = handleError(async (req: Request, res: Response) => {
    const newProduct = await ProductService.createProduct(req.body);
    res.status(201).json(newProduct);
});

export const updateProduct = handleError(async (req: Request, res: Response) => {
    const updatedProduct = await ProductService.updateProduct(req.params.id, req.body);
    res.status(200).json(updatedProduct);
});

export const deleteProduct = handleError(async (req: Request, res: Response) => {
    await ProductService.deleteProduct(req.params.id);
    res.status(204).send();
});
