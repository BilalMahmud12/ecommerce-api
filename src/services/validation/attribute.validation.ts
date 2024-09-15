import Joi from 'joi';

export const createAttributeSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    valueType: Joi.string().valid('string', 'number', 'boolean').required(),
    options: Joi.array().items(Joi.string()).optional(),
});

export const updateAttributeSchema = Joi.object({
    name: Joi.string().min(2).max(100).optional(),
    valueType: Joi.string().valid('string', 'number', 'boolean').optional(),
    options: Joi.array().items(Joi.string()).optional(),
});
