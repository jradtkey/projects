import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  poll = [];

  constructor(private service: TaskService) {
    
  }

  onSubmit(data){
    this.poll.push(data.value.user);
    this.poll.push("true");
   console.log(this.poll);
   this.service.retrievePoll(data);
  }

  ngOnInit() {
  }

}
