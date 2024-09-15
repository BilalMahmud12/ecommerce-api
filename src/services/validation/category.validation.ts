import Joi from 'joi';

export const createCategorySchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    slug: Joi.string().required(),
    description: Joi.string().optional(),
});

export const updateCategorySchema = Joi.object({
    name: Joi.string().min(2).max(100).optional(),
    slug: Joi.string().optional(),
    description: Joi.string().optional(),
});
