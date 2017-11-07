import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class TaskService {


  constructor(private _http: Http) { }

  getUser(user){
    if(user){
      return this._http.get('https://api.github.com/users/' + user).map( data => data.json()).toPromise();
    }

    // this._http.get(this.link).subscribe(
    //   (response) => { this.tasks = response.json(); callback(this.tasks); console.log(this.tasks)}, // <— first method
    //   (error) => { console.log(error); } // <— second method
    // );
  }

}
