import {Router} from 'express'
import { validateData } from '../../middlewares/validationMiddlewares';
import { verifyToken } from '../../middlewares/authMiddleware';

import {createOrder, getOrder, listOrder} from '../orders/ordersController'
import { insertOrderItemSchema } from '../../db/ordersSchema';

const router = Router();

router.get('/', verifyToken, listOrder)
router.get('/:id', verifyToken, getOrder)
router.post('/',verifyToken,validateData(insertOrderItemSchema), createOrder)

export default router;