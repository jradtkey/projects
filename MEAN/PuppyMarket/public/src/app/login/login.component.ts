import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User("","","","");
  users = [];
  login = true;
  exists = false;
  credentials = true;
  userID;

  constructor(private _route: ActivatedRoute, private service: TaskService, private router: Router) { }

  onSubmit(data){

    for (var email of this.users){
      if(email.email == data.value.email){
        this.exists = true;
        this.router.navigate(['/']);
      }
    }

    if(this.exists == false){
      console.log("user info:", data.value)
      this.user.firstname = data.value.firstname;
      this.user.lastname = data.value.lastname;
      this.user.email = data.value.email;
      this.user.password = data.value.password;
      this.service.createUser(this.user);
      this.router.navigate(['browse']);
    }

  }

  checkPassword(password, email){
    this.service.checkPassword(password, email,
    (data) => {
      if(data.json()['user'].length == 0){
        console.log("INCORRECT CREDENTIALS");
        this.credentials = false;
        this.router.navigate(['/']);
      }
      else{
        this.userID = data.json()['user'][0]._id;
        console.log("COMPONENT",this.userID);
        this.service.storeID(this.userID); 
        this.router.navigate(['browse', this.userID]);
      }
  });
  }

  ngOnInit() {
    this.service.fetchUsers(
      (res) => {
        this.users = res.json()['users'];
      }
    )
  }

  onClick(){
    this.login = false;
  }

  onSign(){
    this.login = true;
  }

}
