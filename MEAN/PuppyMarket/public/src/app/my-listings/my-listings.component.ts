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
  puppies = [];
  userID;


  ngOnInit() {
    this.userID = this.service.userID;

    this.service.fetchPosts(
      (res) => {
        this.puppies = res.json()['puppies'];
      }
    )
  }

  onSubmit(data){
    this.puppy.image = "";
    this.puppy.name = data.value.name;
    this.puppy.description = data.value.description;
    this.puppy.price = data.value.price;
    this.puppy.location = data.value.location;
    this.puppy.user_id = this.userID;
    console.log("CREATE pup in COMPONENT")
    this.service.createPuppy(this.puppy);
    this.service.fetchPosts(
      (res) => {
        this.puppies = res.json()['puppies'];
      }
    )

    this.router.navigate(['listing']);
    this.puppy = new Puppy("","","","","");

  }

  update(data, id){
    this.puppy.image = "";
    this.puppy.name = data.value.name;
    this.puppy.description = data.value.description;
    this.puppy.price = data.value.price;
    this.puppy.location = data.value.location;
    this.puppy.user_id = this.userID;
    console.log("UPDATE pup in COMPONENT")
    this.service.updatePuppy(this.puppy, id);
    this.puppy = new Puppy("","","","","");

    this.service.fetchPosts(
      (res) => {
        this.puppies = res.json()['puppies'];
      }
    )
    this.router.navigate(['listing']);
  }

  delete(id){
    this.service.delete(id);
    this.service.fetchPosts(
      (res) => {
        this.puppies = res.json()['puppies'];
      }
    )
  }

  logOut(){
    this.service.logOut();
    this.router.navigate(['/']);
  }

}
