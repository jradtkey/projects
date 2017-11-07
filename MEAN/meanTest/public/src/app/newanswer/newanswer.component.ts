import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { Answer } from '../answer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newanswer',
  templateUrl: './newanswer.component.html',
  styleUrls: ['./newanswer.component.css']
})
export class NewanswerComponent implements OnInit {

  questionID;
  question;

  constructor(private _route: ActivatedRoute, private service: TaskService, private router: Router) { }

  answer: Answer = new Answer("","","","","");

  onSubmit(data){
    this.answer.answer = data.value.answer;
    this.answer.details = data.value.details;
    this.answer.questionID = this.questionID;
    console.log(this.answer);
    this.service.createAnswer(this.answer);
    this.router.navigate(['dashboard']);
  }

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
    });

  }

}
