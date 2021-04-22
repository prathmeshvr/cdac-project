import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleHomeComponent } from './schedule-home/schedule-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ScheduleHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
