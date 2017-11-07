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
  created_at: Date;

  constructor(poll, question, option1, votes1, option2, votes2, option3, votes3, option4, votes4, created_at){
    this.user = name;
    this.question = question;
    this.option1 = option1;
    this.votes1 = 0;
    this.option2 = option2;
    this.votes2 = 0;
    this.option3 = option3;
    this.votes3 = 0;
    this.option4 = option4;
    this.votes4 = 0;
    this.created_at = created_at;
  }

}
