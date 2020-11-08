import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../interfaces/product.interfaces';
import { addProduct } from './store/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products$: Observable<Product[]>;

  constructor(private store: Store<{ products: Product[] }>) {
    this.products$ = this.store.select('products');
  }

  addProduct(): void {
    const prod: Product = {
      category: 'AUTOMOVEL',
      description: 'Descrição teste',
      imageUrl: 'url',
      price: 10.99,
    };
    this.store.dispatch(addProduct({ payload: prod }));
  }
}
