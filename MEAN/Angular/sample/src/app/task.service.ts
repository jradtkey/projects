import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {

  tasks = []

  constructor(private _http: Http) { }

  retrieveTasks(callback){
    this._http.get('/tasks').subscribe(
      (response) => {
        this.tasks = response.json();
        callback(this.tasks);
      },
      (error) => { console.log(error); } // <— second method
    );
  }

  createTask(task){
    this.tasks.push(task);
  }

}
