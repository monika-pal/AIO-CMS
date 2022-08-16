import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { SigninComponent } from './sign-in/signin.component';

const routes: Routes = [
  {
    path:'', redirectTo:'signin', component:SigninComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'forgot-password',
    component:ForgotPassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
