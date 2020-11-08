import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product.interfaces';

export enum ProductActionsType {
  AddProduct = '[Products] Add Product',
  RemoveProduct = '[Products] Remove Product',
  ClearProducts = '[Products] Clear Products',
}

export const addProduct = createAction(
  ProductActionsType.AddProduct,
  props<{ payload: Product }>()
);
export const removeProduct = createAction(
  ProductActionsType.RemoveProduct,
  props<{ payload: Product }>()
);
export const clearProducts = createAction(ProductActionsType.ClearProducts);
