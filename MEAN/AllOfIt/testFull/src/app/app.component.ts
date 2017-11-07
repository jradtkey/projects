import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'USERSSRSR';

  users: User [];

  constructor(private service:TaskService){

    // grab all our notes from the service
    this.users = service.showUsers();
  }

}
