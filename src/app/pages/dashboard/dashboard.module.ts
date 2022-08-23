import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashviewComponent } from './dashview/dashview.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
  DashviewComponent,

  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
