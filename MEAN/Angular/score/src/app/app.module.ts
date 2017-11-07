import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskService } from './task.service';
import {FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskNewComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
