import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  pollId;
  poll;

  constructor(private _route: ActivatedRoute, private service: TaskService) {



  }



  ngOnInit() {

    this._route.paramMap.subscribe( params => {
       console.log(params.get('id'));
       this.pollId = params.get('id');

      this.service.showPoll(this.pollId,
      (response) => {
        this.poll = response.json()['poll'];
        console.log("In polll", this.poll);
      }
      );
    });
  
  }

}
