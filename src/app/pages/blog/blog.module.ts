import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { MaterialModule } from '../../material.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';





@NgModule({
  declarations: [
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
    MatTabsModule,
    MatExpansionModule,
    MatPaginatorModule,
    HttpClientModule, 
    AngularEditorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
 
    
  ]
})
export class BlogModule { }
