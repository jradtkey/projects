import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;

  constructor(private service: ServiceService, private router: Router) { }

  onSubmit(data){
    this.service.storeUser(data.value.user);
    this.router.navigate(['bid']);
  }

  ngOnInit() {
  }

}
