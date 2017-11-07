import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;

  constructor(private service: TaskService, private router: Router) { }

  onSubmit(data){
    this.user = data.value.user;
    this.service.storeUser(this.user);
    this.router.navigate(['browse']);
  }

  ngOnInit() {
  }

}
