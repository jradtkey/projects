import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    children: []
  },

  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
    children: []
  },

  {
    path: 'dashboard/create',
    pathMatch: 'full',
    component: CreateComponent,
    children: []
  },

  {
    path: 'dashboard/poll/:id',
    pathMatch: 'full',
    component: PollComponent,
    children: []
  },

  {
    path: 'dashboard/poll/:id/back',
    redirectTo: '/dashboard',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
