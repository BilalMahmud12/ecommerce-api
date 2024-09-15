import Joi from 'joi';

export const createOptionSetSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    options: Joi.array().items(Joi.string()).optional(),
});

export const updateOptionSetSchema = Joi.object({
    name: Joi.string().min(2).max(100).optional(),
    options: Joi.array().items(Joi.string()).optional(),
});
