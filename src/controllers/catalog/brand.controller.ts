import { Request, Response } from 'express';
import * as BrandService from '../../services/catalog/brand.service';
import { handleError } from '../../utils/errorHandler';
import { IBrand } from '../../models/catalog/brand.model';

export const getBrands = handleError(async (req: Request, res: Response) => {
    const brands: IBrand[] = await BrandService.getAllBrands();
    res.status(200).json(brands);
});

export const getBrandById = handleError(async (req: Request, res: Response) => {
    const brand: IBrand | null = await BrandService.getBrandById(req.params.id);
    if (!brand) {
        return res.status(404).json({ message: 'Brand not found' });
    }
    res.status(200).json(brand);
});

export const createBrand = handleError(async (req: Request, res: Response) => {
    const newBrand: IBrand = await BrandService.createBrand(req.body);
    res.status(201).json(newBrand);
});

export const updateBrand = handleError(async (req: Request, res: Response) => {
    const updatedBrand: IBrand | null = await BrandService.updateBrand(req.params.id, req.body);
    if (!updatedBrand) {
        return res.status(404).json({ message: 'Brand not found' });
    }
    res.status(200).json(updatedBrand);
});

export const deleteBrand = handleError(async (req: Request, res: Response) => {
    const deletedBrand: IBrand | null = await BrandService.deleteBrand(req.params.id);
    if (!deletedBrand) {
        return res.status(404).json({ message: 'Brand not found' });
    }
    res.status(204).send();
});
