import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';


  switchArray = [
    false, false, false, false, false, false, false, false, false, false 
  ];

  makeGreen(btn){
    this.switchArray[btn] = !this.switchArray[btn];
      // if(btn === 'btn1'){
      //   if(this.switch1 === false){
      //     this.switch1 = true;
      //   }
      //   else {
      //     this.switch1 = false;
      //   }
      // }
      // else if(btn === 'btn2'){
      //   if(this.switch2 === false){
      //     this.switch2 = true;
      //   }
      //   else {
      //     this.switch2 = false;
      //   }
      // }
      // else if(btn === 'btn3'){
      //   if(this.switch3 === false){
      //     this.switch3 = true;
      //   }
      //   else {
      //     this.switch3 = false;
      //   }
      // }
      // else if(btn === 'btn4'){
      //   if(this.switch4 === false){
      //     this.switch4 = true;
      //   }
      //   else {
      //     this.switch4 = false;
      //   }
      // }
    }

}
