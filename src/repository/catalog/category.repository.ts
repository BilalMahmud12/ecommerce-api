import Category, { ICategory } from '../../models/catalog/category.model';
import { logger } from "../../utils/logger";

export const findAllCategories = async (): Promise<ICategory[]> => {
    logger('Start fetching all categories...');

    const categories = await Category.find()
        .populate('attributeSets')
        .populate('optionSets')
        .exec();

    logger('Categories fetched successfully', categories);

    return categories;
};

export const findCategoryById = async (categoryId: string): Promise<ICategory | null> => {
    logger(`Fetching category with ID: ${categoryId}`);

    const category = await Category.findById(categoryId)
        .populate('attributeSets')
        .populate('optionSets')
        .exec();

    if (!category) {
        logger('Category not found');
        throw new Error('Category not found');
    }

    logger('Category fetched successfully', category);
    return category;
};

export const createCategory = async (data: ICategory): Promise<ICategory> => {
    logger('Creating new category...');

    const category = new Category(data);

    const savedCategory = await category.save();

    logger('Category created successfully', savedCategory);
    return savedCategory;
};

export const updateCategory = async (categoryId: string, data: Partial<ICategory>): Promise<ICategory | null> => {
    logger(`Updating category with ID: ${categoryId}`);

    const updatedCategory = await Category.findByIdAndUpdate(categoryId, data, { new: true }).exec();

    if (!updatedCategory) {
        logger('Category not found');
        throw new Error('Category not found');
    }

    logger('Category updated successfully', updatedCategory);

    return updatedCategory;
};

export const deleteCategory = async (categoryId: string): Promise<ICategory | null> => {
    logger(`Deleting category with ID: ${categoryId}`);

    const deletedCategory = await Category.findByIdAndDelete(categoryId).exec();

    if (!deletedCategory) {
        logger('Category not found');
        throw new Error('Category not found');
    }

    logger('Category deleted successfully', deletedCategory);
    return deletedCategory;
};
