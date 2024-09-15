import Joi from 'joi';

export const createBrandSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    slug: Joi.string().required(),
    description: Joi.string().optional(),
    logo: Joi.string().optional(),
    metaTitle: Joi.string().optional(),
    metaDescription: Joi.string().optional(),
    metaKeywords: Joi.string().optional(),
});

export const updateBrandSchema = Joi.object({
    name: Joi.string().min(2).max(100).optional(),
    slug: Joi.string().optional(),
    description: Joi.string().optional(),
    logo: Joi.string().optional(),
    metaTitle: Joi.string().optional(),
    metaDescription: Joi.string().optional(),
    metaKeywords: Joi.string().optional(),
});
