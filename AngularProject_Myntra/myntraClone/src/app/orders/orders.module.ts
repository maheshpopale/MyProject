import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    OrderComponent,
    PlaceOrderComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[OrderComponent,
          PlaceOrderComponent,
          SuccessComponent
]
})
export class OrdersModule { }
