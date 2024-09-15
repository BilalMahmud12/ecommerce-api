import Joi from "joi";

export const validateCategory = (data: any) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        slug: Joi.string().min(3).max(50).required(),
        description: Joi.string().max(255).optional(),
        parent: Joi.string().optional(), // This can be an ID reference to another category
        media: Joi.object().optional(), // Assuming media is an object, adjust accordingly
        meta_description: Joi.string().max(160).optional(),
    });

    return schema.validate(data);
};