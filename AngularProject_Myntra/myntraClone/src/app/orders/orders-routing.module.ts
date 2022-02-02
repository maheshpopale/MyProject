import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:'checkout',component:OrderComponent},
  {path:'order',component:PlaceOrderComponent},
  {path:'success',component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
