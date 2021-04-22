import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsHomeComponent } from './analytics-home/analytics-home.component';
import { SharedModule } from '../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

import * as echarts from 'echarts';
import 'echarts/theme/macarons.js';

@NgModule({
  declarations: [AnalyticsHomeComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    NgxEchartsModule.forRoot({ echarts }),
    SharedModule
  ]
})
export class AnalyticsModule { }
