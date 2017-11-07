import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questionID;
  question;

  constructor(private _route: ActivatedRoute, private service: TaskService, private router: Router) { }

  onClick(){
    this.service.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {

    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this.questionID = params.get('id');

      this.service.showQuestion(this.questionID,
      (response) => {
        this.question = response.json()['question'];
        console.log("In QUESTION", this.question);
      }
      );

// BEGINNING OF ANSWERS CALL
      // this.service.getAnswers(this.questionID,
      // (response) => {
      //   this.question = response.json()['answer'];
      //   console.log("In QUESTION", this.question);
      // }
      // );

    });

  }

}
