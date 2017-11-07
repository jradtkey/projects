import { Component, OnInit} from '@angular/core';
import { Power } from './power';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  title = "Initial Power Level:";


  power: number;

  constructor() { }

  onSubmit(formData){
    console.log("success")
    this.power = formData.form;
  }

  ngOnInit() {
  }

}
