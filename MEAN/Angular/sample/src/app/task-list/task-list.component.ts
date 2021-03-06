import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks = [];

  constructor(private _taskService: TaskService) {

    this._taskService.retrieveTasks((tasks) => {
      this.tasks = tasks;
    });

  }

  ngOnInit() {
  }

}
