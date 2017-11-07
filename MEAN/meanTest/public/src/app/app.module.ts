import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskService } from './task.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionComponent } from './question/question.component';
import { NewanswerComponent } from './newanswer/newanswer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NewQuestionComponent,
    QuestionComponent,
    NewanswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
