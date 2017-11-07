import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

import { Poll } from '../poll';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  polls = [];


  constructor(private service: TaskService) {}


  ngOnInit() {
    let getter = this.service.showPolls();
    for(var i=0; i < getter.length; i++){
      this.polls.push(getter[i]);
  }
}
}
