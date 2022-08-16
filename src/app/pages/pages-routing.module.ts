import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
