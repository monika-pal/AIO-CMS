import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../common/header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';


const routes: Routes = [
  {
  
    path:'',
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

  { path: 'categories', 
  component: CategoriesComponent},
  { path: 'tags', 
  component: TagsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
