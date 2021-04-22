import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpdeskRoutingModule } from './helpdesk-routing.module';
import { HelpdeskHomeComponent } from './helpdesk-home/helpdesk-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HelpdeskHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HelpdeskRoutingModule
  ]
})
export class HelpdeskModule { }
