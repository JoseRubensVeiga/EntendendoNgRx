import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/products.reducer';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,

    StoreModule.forFeature('products', productReducer),
  ],
})
export class ProductsModule {}
