import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'THIS FORM';
  users = [];
  user = {
    firstName: '',
    lastName: ''
  }

  onSubmit(){
    console.log("submitted");
    this.users.push(this.user);
    this.user = {
      firstName: '',
      lastName: ''
    }
  }

}
