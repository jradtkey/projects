import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";
import { User } from './user';

@Injectable()
export class TaskService {

  private user: User[]=[];

  constructor(private _http: Http) { }

  createUser(user:User){
    console.log("inside service", user);
    this._http.post('/createusers', user).subscribe(data => {});
  }

  fetchUsers(callback){
    this._http.get('/users').subscribe(data => {
      callback(data);
    })
  }

  checkPassword(password){
    console.log("service", password)
    var x = {password:password}
    this._http.post('/user', x).subscribe(data => {data.json()})
  }

}
