import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingHomeComponent } from './billing-home/billing-home.component';
import { SharedModule } from '../shared/shared.module';
import { NgxGaugeModule } from './../../../node_modules/ngx-gauge';

@NgModule({
  declarations: [BillingHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    BillingRoutingModule,
    NgxGaugeModule
  ]
})
export class BillingModule { }
