import Joi from 'joi';

export const createAttributeSetSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    attributes: Joi.array().items(Joi.string()).optional(),
    categories: Joi.array().items(Joi.string()).optional(),
});

export const updateAttributeSetSchema = Joi.object({
    name: Joi.string().min(2).max(100).optional(),
    attributes: Joi.array().items(Joi.string()).optional(),
    categories: Joi.array().items(Joi.string()).optional(),
});
