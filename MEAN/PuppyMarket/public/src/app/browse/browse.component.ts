import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Puppy } from '../puppy';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  puppies = [];
  userID;

  constructor(private _route: ActivatedRoute, private service: TaskService, private router: Router) { }

  ngOnInit() {
    this.userID = this.service.userID;

    this.service.fetchPosts(
      (res) => {
        this.puppies = res.json()['puppies'];
      }
    )
  }

  delete(id){
    this.service.delete(id);
  }

}
