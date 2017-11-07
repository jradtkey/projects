import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    children: []
  },

  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    children: []
  },

  {
    path: 'task',
    pathMatch: 'full',
    component: TaskComponent,
    children: []
  },

  {
    path: 'task/:id',
    pathMatch: 'full',
    component: TaskDetailsComponent,
    children: []
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
    children: []
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
