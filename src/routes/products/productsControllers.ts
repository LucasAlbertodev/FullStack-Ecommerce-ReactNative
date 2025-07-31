import { Request, Response } from 'express';

export function listProducts(req: Request, res: Response) {
  res.send('list of products');
}

export function getProducByid(req: Request, res: Response) {
  console.log(req.params);
  res.send('getProductbyid');
}

export function createProduct(req: Request, res: Response) {
  res.send('create product');
}

export function updateProduct(req: Request, res: Response) {
  res.send('update product');
}

export function deleteProduct(req: Request, res: Response) {
  res.send('delete product');
}
