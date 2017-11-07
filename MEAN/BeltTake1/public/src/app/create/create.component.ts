import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll';
import { User } from '../user';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  poll: Poll = new Poll("","","","","","","","","","","");

  constructor(private service: TaskService, private router: Router) { }


  onSubmit(data){
    this.poll.created_at = new Date();
    console.log(this.poll);
    this.service.createPoll(this.poll);
    this.router.navigate(['dashboard']);
  }

  ngOnInit() {
  }

}
