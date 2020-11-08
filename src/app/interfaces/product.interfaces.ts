export type CategoryProduct = 'AUTOMOVEL' | 'COMIDA' | 'FARMACIA';

export interface Product {
  description: string;
  price: number;
  imageUrl: string;
  category: CategoryProduct;
}
