import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionComponent } from './question/question.component';
import { NewanswerComponent } from './newanswer/newanswer.component';


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
    path: 'dashboard/newquestion',
    pathMatch: 'full',
    component: NewQuestionComponent,
    children: []
  },
  {
    path: 'dashboard/newquestion/dashboard',
    redirectTo: '/dashboard',
  },
  {
    path: 'dashboard/question/:id/newanswer/:id',
    redirectTo: '/question/:id/newanswer',
  },
  {
    path: 'dashboard/question/:id',
    pathMatch: 'full',
    component: QuestionComponent,
    children: []
  },
  {
    path: 'question/:id/newanswer',
    pathMatch: 'full',
    component: NewanswerComponent,
    children: []
  },
  // {
  //   path: 'question/:id/newanswer',
  //   pathMatch: 'full',
  //   component: NewanswerComponent,
  //   children: []
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
