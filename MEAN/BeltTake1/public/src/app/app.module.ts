import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TaskService } from './task.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateComponent,
    PollComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
