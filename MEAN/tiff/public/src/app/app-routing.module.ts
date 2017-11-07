import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BidComponent } from './bid/bid.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    children: []
  },

  {
    path: 'bid',
    pathMatch: 'full',
    component: BidComponent,
    children: []
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
