import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[DashboardComponent,
    LogoutComponent,
  AdminRoutingModule]
})
export class AdminModule { }
