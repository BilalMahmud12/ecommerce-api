
# E-Commerce API (Node.js, Express, TypeScript, MongoDB)

This is a comprehensive e-commerce API built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**. The API allows for managing various catalog entities such as products, categories, brands, attributes, options, and their relationships. The application also supports input validation, testing, and security best practices.

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Validation](#validation)
- [Security](#security)
- [Testing](#testing)
- [Contributing](#contributing)

## Project Structure

```
src/
 ├── config/          # MongoDB connection and other configurations
 ├── controllers/     # Business logic layer (e.g., ProductController, CategoryController)
 ├── middleware/      # Custom middlewares (e.g., validation, logging, error handling)
 ├── models/          # Mongoose models for MongoDB (e.g., Product, Category, Attribute)
 ├── repository/      # Data access layer for database queries
 ├── routes/          # Express routes for different entities (Product, Category, etc.)
 ├── services/        # Service layer (business logic abstraction)
 │   ├── catalog/     # Catalog-related services (e.g., ProductService, CategoryService)
 │   └── validation/  # Joi validation schemas for each entity
 ├── utils/           # Helper functions (e.g., logger)
 └── server.ts        # Entry point for the application
```

### Key Directories:
- **controllers/**: Handles the business logic for each route.
- **services/**: Contains services for the catalog, which abstract away business logic.
- **repository/**: Handles database queries and operations.
- **models/**: Mongoose schemas for entities like Product, Category, etc.
- **routes/**: Defines the routes for each catalog entity (e.g., /products, /categories).
- **validation/**: Joi schemas to validate payloads. exists as service layer.

---

## Technologies Used

- **Node.js**: JavaScript runtime for server-side applications.
- **Express**: Web framework for building APIs.
- **TypeScript**: A superset of JavaScript that adds type safety.
- **MongoDB**: NoSQL database for storing catalog data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Joi**: Schema-based validation library for validating incoming requests.
- **Jest**: Testing framework used for unit testing.
- **Helmet**: Middleware for securing HTTP headers.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BilalMahmud12/ecommerce-api.git
   cd ecommerce-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB and environment variables.

---

## Environment Variables

Create a `.env` file in the root directory with the following environment variables:

```bash
# MongoDB connection string
MONGO_URI=mongodb://localhost:27017/ecommerce

# Server port
PORT=5000
```

---

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run dev`

Runs the application in development mode using **nodemon**. The server will restart upon changes.

```bash
npm run dev
```

### `npm test`

Runs unit tests using **Jest**.

```bash
npm test
```

### `npm run test:watch`

Runs unit tests in watch mode, which automatically reruns tests when a file is changed.

```bash
npm run test:watch
```

### `npm run test:coverage`

Runs tests and generates a coverage report.

```bash
npm run test:coverage
```

### `npm run build`

Builds the project for production.

```bash
npm run build
```

### `npm start`

Runs the project in production mode after building it.

```bash
npm start
```

---

## API Endpoints

All catalog-related endpoints are grouped under `/api/catalog`. Below are some key endpoints:

### Products

- **GET /api/catalog/products**: Get all products.
- **GET /api/catalog/products/:id**: Get a product by ID.
- **POST /api/catalog/products**: Create a new product.
- **PUT /api/catalog/products/:id**: Update an existing product.
- **DELETE /api/catalog/products/:id**: Delete a product.

### Categories

- **GET /api/catalog/categories**: Get all categories.
- **GET /api/catalog/categories/:id**: Get a category by ID.
- **POST /api/catalog/categories**: Create a new category.
- **PUT /api/catalog/categories/:id**: Update an existing category.
- **DELETE /api/catalog/categories/:id**: Delete a category.

### Brands

- **GET /api/catalog/brands**: Get all brands.
- **POST /api/catalog/brands**: Create a new brand.

### Options and Option Sets

- **GET /api/catalog/options**: Get all options.
- **POST /api/catalog/options**: Create a new option.
- **GET /api/catalog/option-sets**: Get all option sets.
- **POST /api/catalog/option-sets**: Create a new option set.

---

## Validation

Payload validation is handled using **Joi**. Each entity (Product, Category, etc.) has its own validation schema defined in the **services/validation** folder.

### Example: Product Validation

```typescript
import Joi from 'joi';

export const createProductSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    slug: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().positive().required(),
    stock: Joi.number().integer().min(0).required(),
    category: Joi.string().required(),
    brand: Joi.string().optional(),
});
```

Validation middleware ensures that all incoming requests adhere to the defined schema.

---

## Security

This API is secured using the following measures:

- **Helmet**: Adds various HTTP headers to help protect the API against common vulnerabilities like XSS attacks and clickjacking.
  ```typescript
  import helmet from 'helmet';
  app.use(helmet());
  ```

- **Payload Validation**: All incoming data is validated using **Joi** to ensure that the data is well-formed and prevents injection attacks.
  
---

## Testing

Unit tests are implemented using **Jest** and cover controllers, services, and validation logic.

### Example: Product Service Unit Test

```typescript
import * as ProductService from '../../services/catalog/product.service';
import * as ProductRepository from '../../repository/catalog/product.repository';

jest.mock('../../repository/catalog/product.repository');

describe('Product Service', () => {
    it('should fetch all products', async () => {
        const mockProducts = [{ name: 'Product 1' }, { name: 'Product 2' }];
        (ProductRepository.findAllProducts as jest.Mock).mockResolvedValue(mockProducts);

        const products = await ProductService.getAllProducts();
        expect(products).toEqual(mockProducts);
    });
});
```

To run the tests:

```bash
npm test
```

You can also check code coverage with:

```bash
npm run test:coverage
```

---

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License.

---

### Conclusion

This **E-commerce API** provides the core backend functionalities required for managing a catalog of products, categories, brands, and more. The project includes full CRUD operations, validation, unit testing, and essential security features. Feel free to explore, extend, and improve the project as needed.
