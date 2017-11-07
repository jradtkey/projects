import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  userExists = null;
  score = null;
  user = '';
  promise;





  constructor(private _taskService: TaskService) {}

    onSubmit(){
      this.promise = this._taskService.getUser(this.user)
      if(this.promise){
        this.promise.then( (user) => {
          if (user.id) {
            this.userExists = true;
            this.score = user.public_repos + user.followers;
          }
          else {
            this.userExists = false;
            this.score = null;
          }
          this.user
          console.log(this.score)
        })
        .catch( (err) => {
          this.userExists = false;
        });
      }
      else {
        this.userExists = false;
      }
    }

    // this._taskService.getUser((user) => {
    //   // this.tasks.push(this.user);
    //   // console.log(this.tasks)
    // });



  ngOnInit() {
  }

}
