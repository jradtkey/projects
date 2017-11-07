import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  time = new Date();
  display = 'none';
  switch: boolean = true;
  last_selected = null;

  showTime(time){
    this.time = new Date();
    if(time === 'mst'){
      this.time.setHours(this.time.getHours()+1);
    }
    else if(time === 'cst'){
      this.time.setHours(this.time.getHours()+2);
    }
    else if(time === 'est'){
      this.time.setHours(this.time.getHours()+3);
    }
    this.last_selected = time;
    this.switch = false;
  };

  clearTime(){
    this.switch = true;
    this.last_selected = null;
  };


}
