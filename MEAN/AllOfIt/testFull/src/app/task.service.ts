import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import "rxjs";

@Injectable()
export class TaskService {

  private users: User[]=[];

  constructor(private _http: Http) {
    this.retrieve();
  }

  retrieve(){
    return this._http.get('/users').subscribe(data => {
      console.log("Inside subscirbe call back");

      var all_users=data.json()['users'];
      for(var i=0; i < all_users[i].length; i++){
        var created_at_string = all_users[i].created_at;
        var created_at = new Date(created_at_string);
        var user = new User(all_users[i].name, created_at);
        this.users.push(user);
      }
    });
  }

  showUsers(){
    return this.users;
  }

  create(user:User){
    this.users.push(user);
  }

}
