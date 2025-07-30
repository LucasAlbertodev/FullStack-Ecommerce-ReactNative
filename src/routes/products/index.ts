import { Router } from 'express';
import { validateData } from '../../middlewares/validationMiddlewares';

import { createProductSchema, updateProductSchema } from '../../db/productsSchema';
import { createProduct, deleteProduct, getProducByid, listProducts, updateProduct } from './productsControllers';
import { verifySeller, verifyToken } from '../../middlewares/authMiddleware';


const router = Router();

router.get('/', listProducts);

router.get('/:id', getProducByid);

router.post('/', verifyToken,verifySeller,validateData(createProductSchema), createProduct);

router.put('/update/:id', verifyToken,verifySeller,validateData(updateProductSchema), updateProduct);

router.delete('/delete/:id',  verifyToken,verifySeller,deleteProduct);

export default router;
