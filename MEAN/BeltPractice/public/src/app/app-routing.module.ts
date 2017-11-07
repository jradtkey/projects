import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePollComponent } from './create-poll/create-poll.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    children: []
  },

  {
    path: 'dashboard/:user',
    pathMatch: 'full',
    component: DashboardComponent,
    children: []
  },

  {
    path: 'dashboard/:user/create',
    pathMatch: 'full',
    component: CreatePollComponent,
    children: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
