import { Request, Response } from 'express';
import {eq} from 'drizzle-orm'

import { db } from '../../db';
import { orderItemsTable, ordersTable } from '../../db/ordersSchema';


export async function createOrder(req: Request, res: Response) {
  try {
    const { order, items} = req.cleanBody;

    const userId = req.userId;
    console.log(userId);

    if (!userId) {
      res.status(400).json({ message: 'Invalid order data' });
    }

    const [newOrder] = await db
      .insert(ordersTable)
      // @ts-ignore
      .values({ userId: userId })
      .returning();

    // TODO: validate products ids, and take their actual price from db
    const orderItems = items.map((item: any) => ({
      ...item,
      orderId: newOrder.id,
    }));
    console.log(orderItems);

    const newOrderItems = await db
      .insert(orderItemsTable)
      .values(orderItems)
      .returning();

      res.status(201).json({ ...newOrder, items: newOrderItems });

  } catch (error) {
    res.status(400).json({ error: 'Invalid order data' });
  }
}

// if req.role is admin, return all orders
// if req.role is seller, return orders by sellerId
// else, return only orders filtered by req.userId
export async function listOrder (req:Request, res:Response) {
  try {
    const orders = await db.select().from(ordersTable);
    res.status(200).json(orders);
    
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
}

export async function getOrder (req:Request, res:Response) {
  try {
    const id = parseInt(req.params.id);


    // TODO: required to setup the relationship
    // const result = await db.query.ordersTable.findFirst({
    //   where: eq(ordersTable.id, id),
    //   with: {
    //     items: true,
    //   },
    // });

    const orderWithItems = await db.select().from(ordersTable).where(eq(ordersTable.id, id)).leftJoin(orderItemsTable,eq( ordersTable.id, orderItemsTable.orderId));

    if(orderWithItems.length === 0){
      res.status(404).json('Order not found');
      return;
    }

    const orderMerged = {
      ...orderWithItems[0].orders,
      items:orderWithItems.map((order) => order.order_items)
    }
    
    res.status(200).json(orderMerged);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function updateOrder (req:Request, res:Response) {
  try {
    const id = parseInt(req.params.id);

    const [updateOrder] = await db.update(ordersTable).set(req.body).where(eq(ordersTable.id,id)).returning();

    if(!updateOrder){
      res.status(404).json('Order not found');
      return;
    }

    res.status(200).json(updateOrder);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
