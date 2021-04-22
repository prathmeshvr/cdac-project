import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
// import { AssetHomeComponent } from './asset-home/asset-home.component';
import { NgxEchartsModule } from 'ngx-echarts';

import * as echarts from 'echarts';
import 'echarts/theme/macarons.js';

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxEchartsModule.forRoot({ echarts }),
    SharedModule
  ],
  entryComponents: []
})
export class DashboardModule { }
