import * as CategoryRepository from '../../repository/catalog/category.repository';
import { ICategory } from '../../models/catalog/category.model';
import { logger } from "../../utils/logger"

export const getAllCategories = async (): Promise<ICategory[]> => {
    logger('Fetching all categories from service...');
    return CategoryRepository.findAllCategories();
};

export const getCategoryById = async (categoryId: string): Promise<ICategory | null> => {
    logger(`Fetching category by ID: ${categoryId} from service...`);
    return CategoryRepository.findCategoryById(categoryId);
};

export const createCategory = async (data: ICategory): Promise<ICategory> => {
    logger('Creating new category from service...');
    return CategoryRepository.createCategory(data);
};

export const updateCategory = async (categoryId: string, data: Partial<ICategory>): Promise<ICategory | null> => {
    logger(`Updating category with ID: ${categoryId} from service...`);
    return CategoryRepository.updateCategory(categoryId, data);
};

export const deleteCategory = async (categoryId: string): Promise<ICategory | null> => {
    logger(`Deleting category with ID: ${categoryId} from service...`);
    return CategoryRepository.deleteCategory(categoryId);
};
