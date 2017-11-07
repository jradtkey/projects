import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors = [
    "aqua",
    "Bisque",
    "BlueViolet",
    "CadetBlue",
    "Coral",
    "Crimson",
    "DarkGreen"
  ];
  num = Math.floor(Math.random()*7)+0;
  val = 3;
  logVal(){
    console.log("val is: ", this.val);
  }
}
