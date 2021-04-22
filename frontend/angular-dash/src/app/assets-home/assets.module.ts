import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AssetsHomeComponent } from './assets-home/assets-home.component';
import { NgxEchartsModule } from 'ngx-echarts';

import * as echarts from 'echarts';
import 'echarts/theme/macarons.js';
// import { IMqttMessage, MqttModule, IMqttServiceOptions } from "ngx-mqtt";
//  var MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
//   hostname: '18.188.171.16',
//   port: 9001,
//   path: '/mqtt'
// }

@NgModule({
  declarations: [AssetsHomeComponent],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    NgxEchartsModule.forRoot({ echarts }),
    SharedModule,
    
  ],
  entryComponents: []
})
export class AssetsModule { }
