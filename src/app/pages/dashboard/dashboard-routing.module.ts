import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashviewComponent } from './dashview/dashview.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
