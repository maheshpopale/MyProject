import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http';
import { AddCategoriesComponent } from './_categories/add-categories/add-categories.component';
import { UpdateCategoriesComponent } from './_categories/update-categories/update-categories.component';
import { ViewCategoriesComponent } from './_categories/view-categories/view-categories.component';
import { DeleteCategoriesComponent } from './_categories/delete-categories/delete-categories.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SliderComponent } from './layout/slider/slider.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CartModule } from './cart/cart.module';
import { CartRoutingModule } from './cart/cart-routing.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { UsersRoutingModule } from './auth/users/users-routing.module';
import { UsersModule } from './auth/users/users.module';
import { AdminModule } from './auth/admin/admin.module';
import { AdminRoutingModule } from './auth/admin/admin-routing.module';
import { DashboardComponent } from './auth/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoriesComponent,
    UpdateCategoriesComponent,
    ViewCategoriesComponent,
    DeleteCategoriesComponent,
    HeaderComponent,
    SidebarComponent,
    SliderComponent,
    FooterComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CartModule,
    ProductsModule,
    CartRoutingModule,
    OrdersModule,
    UsersRoutingModule,
    UsersModule,
    AdminModule,
    AdminRoutingModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
