import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from './question';
import { Answer } from './answer';
import "rxjs";

@Injectable()
export class TaskService {

  private qustion: Question[]=[];
  private answer: Answer[]=[];
  questions = [];
  user;

  constructor(private _http: Http) { }

  storeUser(data){
    this.user = data;
  }

  getUser(){
    return this.user;
  }

  createQuestion(question:Question){
    this._http.post('/questions', question).subscribe(data => {});
  }

  showQuestions(){
    return this.questions;
  }

  getQuestions(){
    this._http.get('/questions').subscribe(data => {
      this.questions = data.json()['questions'];
      console.log("get questions...", this.questions);
      return this.questions;
    })
  }

  logout(){
    this.user = "";
  }

  showQuestion(id, callback){
    var data = {id:id};
    this._http.post('/question', data).subscribe(
    (response) => {
      callback(response);
    })
  }

  createAnswer(answer:Answer){
    var user = this.user;
    answer.user = user;
    console.log("CREATE ANSWER", answer)
    this._http.post('/answers', answer).subscribe(data => {});
  }

  getAnswers(id, callback){

  }

}
