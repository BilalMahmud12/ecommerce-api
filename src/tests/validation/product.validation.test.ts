import { createProductSchema } from '../../services/validation';

describe('Product Validation', () => {
    it('should pass with valid data', () => {
        const validData = {
            name: 'Product A',
            slug: 'product-a',
            description: 'This is a product description',
            price: 99.99,
            stock: 10,
            category: 'some-category-id',
        };

        const { error } = createProductSchema.validate(validData);
        expect(error).toBeUndefined();
    });

    it('should fail with missing required fields', () => {
        const invalidData = {
            price: 99.99,
        };

        const { error } = createProductSchema.validate(invalidData);
        expect(error).toBeDefined();
        expect(error?.details[0].message).toContain('"name" is required');
    });

    it('should fail if price is negative', () => {
        const invalidData = {
            name: 'Product B',
            slug: 'product-b',
            description: 'This is another product description',
            price: -10,
            stock: 5,
            category: 'some-category-id',
        };

        const { error } = createProductSchema.validate(invalidData);
        expect(error).toBeDefined();
        expect(error?.details[0].message).toContain('"price" must be a positive number');
    });
});
