import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User("","");

  constructor(private service: TaskService, private router: Router) { }

  onSubmit(data){
    this.user.created_at = new Date();
    this.user.user = data.value.user;
    console.log(this.user);
    this.service.createUser(this.user);
    this.router.navigate(['dashboard']);
  }

  ngOnInit() {
  }

}
