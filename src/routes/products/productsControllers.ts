import { Request, Response } from 'express';
import { db } from '../../db/index';
import { productsTable } from '../../db/productsSchema';
import { eq } from 'drizzle-orm';

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(productsTable);

    res.json(products);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Failed to get products Error ${error}`);
  }
}

export async function getProducByid(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, id));

    if (!product) {
      res.status(404).send({ message: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(`Failed to get a product Error ${error}`);
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    console.log(req.body);

    const [product] = await db
      .insert(productsTable)
      .values(req.body)
      .returning();

    console.log('new product created');
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Failed to create a product Error: ${error}`);
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const updateFields = req.body;

    const [updatedProduct] = await db
      .update(productsTable)
      .set(updateFields)
      .where(eq(productsTable.id, id))
      .returning();

    if (!updatedProduct) {
      res.status(404).send({ message: 'Product not found' });
    } else {
      res.send({ message: 'Product updated', updateProduct });
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(`Failed to get products Error ${error}`);
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const [deletedProduct] = await db
      .delete(productsTable)
      .where(eq(productsTable.id, id))
      .returning();

    if (deletedProduct) {
      res.status(204).send({ message: 'Product deleted' });
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(`Failed to get products Error ${error}`);
  }
}
