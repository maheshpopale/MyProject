import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {path:'addProduct',component:AddProductComponent},
  {path:'updateProduct/:id',component:UpdateProductComponent},
  {path:'allProducts',component:ListProductsComponent},
  {path:'viewProducts',component:ViewProductsComponent},
  {path:'deleteProduct/:id',component:DeleteProductComponent},
  {path:'bycategory/:id',component:ProductByCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
