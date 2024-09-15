import { Router } from 'express';
import productRoutes from './product.routes';
import categoryRoutes from './category.routes';
import brandRoutes from './brand.routes';
import attributeSetRoutes from './attributeSet.routes';
import attributeRoutes from './attribute.routes';
import optionSetRoutes from './optionSet.routes';
import optionRoutes from './option.routes';

const catalogRouter = Router();

// Group all catalog-related routes under /api/catalog
catalogRouter.use('/products', productRoutes);
catalogRouter.use('/categories', categoryRoutes);
catalogRouter.use('/brands', brandRoutes);
catalogRouter.use('/attribute-sets', attributeSetRoutes);
catalogRouter.use('/attributes', attributeRoutes);
catalogRouter.use('/option-sets', optionSetRoutes);
catalogRouter.use('/options', optionRoutes);

export default catalogRouter;