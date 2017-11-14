import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';
import { MyListingsComponent } from './my-listings/my-listings.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    children: []
  },

  {
    path: 'browse',
    component: BrowseComponent,
  },

  {
    path: 'browse/:id',
    redirectTo: 'listing'
  },

  {
    path: 'browse/browse',
    redirectTo: 'listing'
  },

  {
    path: 'listing/mylistings',
    redirectTo: 'listing'
  },

  {
    path: 'listing',
    component: MyListingsComponent,
  },

  {
    path: 'listing/browse',
    redirectTo: 'browse'
  },

  {
    path: 'browse/browse/browse',
    redirectTo: 'browse'
  },

  // {
  //   path: 'browse/:id/mylistings',
  //   component: MyListingsComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
