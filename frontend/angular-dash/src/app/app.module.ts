import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppRoutingModule } from './app-routing.module';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import 'echarts/theme/macarons.js';

// import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";
import { environment as env } from '../environments/environment';
// import { AnalyticsHomeComponent } from './analytics/analytics-home/analytics-home.component';

// const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
//     hostname: "18.188.171.16",
//     port: 9001,
//     protocol: "ws",
//     path: '',
// };

// export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
//   hostname: '18.188.171.16',
//   port: 9001
// };



// const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
//   hostname: environment.mqtt.server,
//   port: environment.mqtt.port,
//   protocol: (environment.mqtt.protocol === "wss") ? "wss" : "ws",
//   path: '',
// };

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({ echarts }),
    BrowserAnimationsModule,
    CoreModule,
    
    SharedModule,
    // MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    CustomMaterialModule.forRoot(),
    AppRoutingModule,
    LoggerModule.forRoot({
      serverLoggingUrl: `http://localhost/my-api/logs`,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel
    }),
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
