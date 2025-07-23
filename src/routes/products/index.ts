import { Router } from 'express';
import { createProduct, deleteProduct, getProducByid, listProducts, updateProduct } from './productsControllers';

const router = Router();

router.get('/', listProducts);

router.get('/:id', getProducByid);

router.post('/', createProduct);

router.put('/update/:id', updateProduct);

router.delete('/delete/:id', deleteProduct);

export default router;
