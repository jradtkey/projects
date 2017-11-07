import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power-super-saiyan-three',
  templateUrl: './power-super-saiyan-three.component.html',
  styleUrls: ['./power-super-saiyan-three.component.css']
})
export class PowerSuperSaiyanThreeComponent implements OnInit {

  @Input() superSaiyanThree;

  constructor() { }

  ngOnInit() {
  }

}
