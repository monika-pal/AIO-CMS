import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./login-flow/login.module').then(m => m.LoginModule)
  },
  {
    path:'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }