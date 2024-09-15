import Joi from 'joi';

export const createOptionSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    value: Joi.string().required(),
});

export const updateOptionSchema = Joi.object({
    name: Joi.string().min(2).max(100).optional(),
    value: Joi.string().optional(),
});
