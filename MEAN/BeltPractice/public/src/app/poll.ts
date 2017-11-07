export class Poll {

  user:string;
  question:string;
  option1: string;
  votes1: number;
  option2: string;
  votes2: number;
  option3: string;
  votes3: number;
  option4: string;
  votes4: number;

  constructor(user, question){
    this.user = user;
    this.question = question;
    this.option1;
    this.option2;
    this.option3;
    this.option4;
  }

}
