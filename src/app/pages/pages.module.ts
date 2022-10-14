import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material.module';
import { PagesComponent } from './pages.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';


@NgModule({
  declarations: [
   PagesComponent,
   CategoriesComponent,
   TagsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,  
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MaterialModule
  ]
})
export class PagesModule { }
