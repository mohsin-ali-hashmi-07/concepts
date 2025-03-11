import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegularComponent } from './regular/regular.component';

const routes: Routes = [{
  path:"regular", component: RegularComponent
},
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
