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
    path: 'browse/:id',
    pathMatch: 'full',
    component: BrowseComponent,
    children: []
  },

  {
    path: 'browse/:id/mylistings',
    component: MyListingsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
