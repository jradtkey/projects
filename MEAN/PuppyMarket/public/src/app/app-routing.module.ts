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
    pathMatch: 'full',
    component: BrowseComponent,
    children: []
  },

  {
    path: 'browse/mylistings',
    pathMatch: 'full',
    component: MyListingsComponent,
    children: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
