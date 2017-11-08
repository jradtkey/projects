import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";
import { User } from './user';
import { Puppy } from './puppy';

@Injectable()
export class TaskService {

  private user: User[]=[];
  private puppy: Puppy[]=[];
  userID;

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

  fetchPosts(callback){
    this._http.get('/posts').subscribe(data => {
      callback(data);
    })
  }

  createPuppy(puppy:Puppy){
    console.log("inside service", puppy);
    this._http.post('/createPuppy', {puppy: puppy, id:this.userID}).subscribe(data => {});
  }

  checkPassword(password, email, callback){
    var x = {password:password, email:email}
    this._http.post('/user', x).subscribe(data => {callback(data)});
  }

  storeID(data){
    this.userID = data;
  }

  logOut(){
    this.userID = "";
  }

}
