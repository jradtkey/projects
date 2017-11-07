import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    children: []
  },

  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    children: []
  },

  {
    path: 'products',
    pathMatch: 'full',
    component: ProductListComponent,
    children: []
  },

  {
    path: 'products/new',
    pathMatch: 'full',
    component: ProductNewComponent,
    children: []
  },

  {
    path: 'products/edit/:id',
    pathMatch: 'full',
    component: ProductEditComponent,
    children: []
  },

  {
    path: 'products/delete/:id',
    pathMatch: 'full',
    component: ProductListComponent,
    children: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
