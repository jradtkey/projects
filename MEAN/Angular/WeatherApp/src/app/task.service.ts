import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class TaskService {

  link = 'http://api.openweathermap.org/data/2.5/weather?q=seattle&appid=77cd27f4512d3d0f6b9e79034eb91705';
  tasks;



  constructor(private _http: Http) { }

  retrieveTasks(callback) {
    this._http.get(this.link).subscribe(
      (response)=> {
        this.tasks = response.json();
        callback(this.tasks);
      },
      (error)=> { console.log(error); }
    );
  }
}
