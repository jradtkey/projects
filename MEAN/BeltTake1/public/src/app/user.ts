export class User {

  user:string;
  created_at: Date;

  constructor(user, created_at){
    this.user = user;
    this.created_at = created_at;
  }

}
