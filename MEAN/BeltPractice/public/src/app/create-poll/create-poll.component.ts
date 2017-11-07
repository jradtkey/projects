import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  poll=[];

  constructor(private _service: TaskService) { }

  onSubmit(data){
    this._service.createPoll(data);
  }

  ngOnInit() {
  }

}
