import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '../../material.module';
import { AddnewComponent } from './create-addNew-dialog/addnew.component';





@NgModule({
  declarations: [
    ListComponent,
   AddnewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
  ],
  exports:[
    AddnewComponent
  ]
})
export class UserModule { }
