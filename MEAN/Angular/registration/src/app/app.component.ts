import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  users = [];
  user = new User();

  onSubmit(formData){
    if(formData.valid !== false){
      this.users.push(this.user);
      console.log(formData.form);

    }
}
}
