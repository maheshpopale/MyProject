import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';


@NgModule({
  declarations: [
    AddProductComponent,
    UpdateProductComponent,
    ListProductsComponent,
    DeleteProductComponent,
    ViewProductsComponent,
    ProductByCategoryComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AddProductComponent,
    UpdateProductComponent,
    ListProductsComponent,
    DeleteProductComponent,
    ViewProductsComponent,
    ProductByCategoryComponent
  ]
})
export class ProductsModule { }
