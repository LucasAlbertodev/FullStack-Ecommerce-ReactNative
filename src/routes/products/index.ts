import { Router } from 'express';
import { validateData } from '../../middlewares/validationMiddlewares';

import { createProductSchema, updateProductSchema } from '../../db/productsSchema';
import { createProduct, deleteProduct, getProducByid, listProducts, updateProduct } from './productsControllers';


const router = Router();

router.get('/', listProducts);

router.get('/:id', getProducByid);

router.post('/', validateData(createProductSchema), createProduct);

router.put('/update/:id',validateData(updateProductSchema), updateProduct);

router.delete('/delete/:id', deleteProduct);

export default router;
