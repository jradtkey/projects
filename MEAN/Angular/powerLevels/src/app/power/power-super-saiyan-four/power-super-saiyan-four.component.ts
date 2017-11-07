import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power-super-saiyan-four',
  templateUrl: './power-super-saiyan-four.component.html',
  styleUrls: ['./power-super-saiyan-four.component.css']
})
export class PowerSuperSaiyanFourComponent implements OnInit {

  @Input() superSaiyanFour;

  constructor() { }

  ngOnInit() {
  }

}
