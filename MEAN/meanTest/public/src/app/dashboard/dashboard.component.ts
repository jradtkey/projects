import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  questions = [];
  user;

  constructor(private _route: ActivatedRoute, private service: TaskService, private router: Router) { }

  onClick(){
    this.user = "";
    this.service.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.user = this.service.getUser();

    let getter = this.service.showQuestions();
    console.log(getter);
    for(var i=0; i < getter.length; i++){
      this.questions.push(getter[i]);
    }
  }
}
