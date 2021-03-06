import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { HttpModule } from '@angular/http';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SeattleComponent,
    SanjoseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
