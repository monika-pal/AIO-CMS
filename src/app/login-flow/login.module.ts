import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { SigninComponent } from './sign-in/signin.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    ForgotPassComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ]
})
export class LoginModule { }
