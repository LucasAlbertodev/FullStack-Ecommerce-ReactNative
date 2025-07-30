import { Router } from 'express';
import { validateData } from '../../middlewares/validationMiddlewares';
import { verifyToken } from '../../middlewares/authMiddleware';

import {
  createOrder,
  getOrder,
  listOrder,
  updateOrder,
} from '../orders/ordersController';
import { insertOrderItemSchema, updateOrderSchema } from '../../db/ordersSchema';

const router = Router();

router.get('/', verifyToken, listOrder);
router.get('/:id', verifyToken, getOrder);
router.put('/:id', verifyToken,validateData(updateOrderSchema), updateOrder);
router.post('/', verifyToken, validateData(insertOrderItemSchema), createOrder);

export default router;
