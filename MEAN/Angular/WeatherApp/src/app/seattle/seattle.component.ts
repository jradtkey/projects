import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  tasks;

  constructor(private _taskService: TaskService) {
    this._taskService.retrieveTasks((tasks) => {
      this.tasks = tasks;
    });
  }


  ngOnInit() {
  }

}
