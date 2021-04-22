import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ContentPlaceholderAnimationComponent } from './content-placeholder-animation/content-placeholder-animation.component';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { LayoutComponent } from './layout/layout.component';
import { LineComponent } from './graphs/line/line.component';
import { BarComponent } from './graphs/bar/bar.component';
import { PieComponent } from './graphs/pie/pie.component';



// import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";
// import { environment as env } from '../environments/environment';

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

@NgModule({
  imports: [
    RouterModule,
    CustomMaterialModule,
    FormsModule,
    // MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: [
    ConfirmDialogComponent,
    ContentPlaceholderAnimationComponent,
    LimitToPipe,
    LocalDatePipe,
    YesNoPipe,
    LayoutComponent,
    LineComponent,
    BarComponent,
    PieComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    LimitToPipe,
    ConfirmDialogComponent,
    ContentPlaceholderAnimationComponent,
    LocalDatePipe,
    YesNoPipe,
    // MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
