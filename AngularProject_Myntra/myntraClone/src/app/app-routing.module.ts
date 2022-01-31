import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './_categories/add-categories/add-categories.component';
import { DeleteCategoriesComponent } from './_categories/delete-categories/delete-categories.component';
import { UpdateCategoriesComponent } from './_categories/update-categories/update-categories.component';
import { ViewCategoriesComponent } from './_categories/view-categories/view-categories.component';


const routes: Routes = [
 {path:'addCategory',component:AddCategoriesComponent},
 {path:'updateCategory/:id',component:UpdateCategoriesComponent},
 {path:'viewCategories',component:ViewCategoriesComponent},
 {path:'deleteCategory/:id',component:DeleteCategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
