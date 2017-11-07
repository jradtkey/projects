import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { Question } from '../question';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  question: Question = new Question("","");

  constructor(private service: TaskService, private router: Router) { }

  onClick(){
    this.service.logout();
    this.router.navigate(['/']);
  }

  onSubmit(data){
    this.question.question = data.value.question;
    this.question.description = data.value.description;
    this.service.createQuestion(this.question);
    this.router.navigate(['dashboard']);
  }

  ngOnInit() {
  }

}
