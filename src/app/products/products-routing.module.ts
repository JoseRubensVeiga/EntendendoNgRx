import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { ProductsComponent } from './products.component';
import { productReducer } from './store/products.reducer';

const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('products', productReducer),
  ],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
