import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class TaskService {

  poll = [];

  constructor(private _http: Http) {

  }

  createPoll(data){
    this.poll.push(data.value)
    console.log(this.poll)
    this._http.post('/poll', data).subscribe( data =>{
      this.poll
    }
      // (response) => { this.poll = response.json() }, // <— first method
      // (error) => { console.log("bad"); }
    );

  }

  retrievePoll(data){
    console.log("data");
  }


}
