import { Action, createReducer, on } from '@ngrx/store';

import { addProduct, removeProduct, clearProducts } from './products.actions';

import { ProductState as State } from './products.interfaces';
import { Product } from 'src/app/interfaces/product.interfaces';

export const initialState: State = {
  list: [],
};

function _addProduct(state: State, action: { payload: Product }): State {
  return {
    ...state,
    list: [...state.list, action.payload],
  };
}

function _removeProduct(state: State, action: { payload: Product }): State {
  return {
    ...state,
    list: state.list.filter((p) => p !== action.payload),
  };
}

function _clearProducts(state: State): State {
  return {
    ...state,
    list: [],
  };
}

const _productReducer = createReducer(
  initialState,
  on(addProduct, _addProduct),
  on(removeProduct, _removeProduct),
  on(clearProducts, _clearProducts)
);

export function productReducer(state: State, action: Action): State {
  return _productReducer(state, action);
}
