import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Puppy } from '../puppy';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private service: TaskService, private router: Router) { }

  puppy: Puppy = new Puppy("","","","","");
  userId;

  // this._route.paramMap.subscribe( params => {
  //   console.log("USER ID:", params.get('id'));
  //   this.userId = params.get('id');
  // });

  ngOnInit() {
  }

  onSubmit(data){
    console.log(data.value);
    this.router.navigate(['/browse/mylistings']);
  }

}
