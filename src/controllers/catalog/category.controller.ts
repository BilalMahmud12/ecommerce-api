import { Request, Response } from 'express';
import * as CategoryService from '../../services/catalog/category.service';
import { handleError } from '../../utils/errorHandler';
import { ICategory } from '../../models/catalog/category.model';

export const getCategories = handleError(async (req: Request, res: Response) => {
    const categories: ICategory[] = await CategoryService.getAllCategories();
    res.status(200).json(categories);
});

export const getCategoryById = handleError(async (req: Request, res: Response) => {
    const category: ICategory | null = await CategoryService.getCategoryById(req.params.id);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
});

export const createCategory = handleError(async (req: Request, res: Response) => {
    const newCategory: ICategory = await CategoryService.createCategory(req.body);
    res.status(201).json(newCategory);
});

export const updateCategory = handleError(async (req: Request, res: Response) => {
    const updatedCategory: ICategory | null = await CategoryService.updateCategory(req.params.id, req.body);
    if (!updatedCategory) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(updatedCategory);
});

export const deleteCategory = handleError(async (req: Request, res: Response) => {
    const deletedCategory: ICategory | null = await CategoryService.deleteCategory(req.params.id);
    if (!deletedCategory) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.status(204).send();
});
