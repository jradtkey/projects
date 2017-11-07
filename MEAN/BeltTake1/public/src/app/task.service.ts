import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { Poll } from './poll';
import "rxjs";

@Injectable()
export class TaskService {

  private user: User[]=[];
  private poll: Poll[]=[];

  username;

  polls = [];
  _id;

  constructor(private _http: Http) {
  }

  getPolls(){
    this._http.get('/polls').subscribe(data => {
      console.log("inside poll callback");
      this.polls = data.json()['polls'];
      console.log(this.polls);
      return this.polls;
    })
  }

  showPoll(id, callback){
    var data = {id:id};
    this._http.post('/poll', data).subscribe(
    (response) => {
      callback(response);
    })
  }

  showPolls(){
    return this.polls;
  }

  createUser(user:User){

    console.log("user - service");
    this.user.push(user);
    this._http.post('/users', user).subscribe(data => {
        console.log(data)
      }
    );
  }

  createPoll(poll:Poll){

    var name = this.user[0].user;
    poll.user = name;
    console.log("THIS IS THE POLL", poll)


    console.log("poll - service", poll.user);
    // this.user.push(data);
    this._http.post('/polls', poll).subscribe(data => {
        console.log("BBBBBBBB",poll)
      }
    );
  }

}
