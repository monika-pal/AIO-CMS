import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { MaterialModule } from '../../material.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatNativeDateModule } from '@angular/material/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { RelatedDialogComponent } from './related-dialog/related-dialog.component';









@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    CategoryDialogComponent,
    RelatedDialogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
    HttpClientModule, 
    AngularEditorModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
 
})
export class BlogModule { }
