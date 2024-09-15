import Joi from 'joi';

export const createProductSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    slug: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().positive().required(),
    stock: Joi.number().integer().min(0).required(),
    category: Joi.string().required(),
    brand: Joi.string().optional(),
    options: Joi.array().items(Joi.string()).optional(),
});

export const updateProductSchema = Joi.object({
    name: Joi.string().min(2).max(100).optional(),
    slug: Joi.string().optional(),
    description: Joi.string().optional(),
    price: Joi.number().positive().optional(),
    stock: Joi.number().integer().min(0).optional(),
    category: Joi.string().optional(),
    brand: Joi.string().optional(),
    options: Joi.array().items(Joi.string()).optional(),
});
