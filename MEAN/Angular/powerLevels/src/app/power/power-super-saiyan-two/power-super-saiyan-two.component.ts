import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power-super-saiyan-two',
  templateUrl: './power-super-saiyan-two.component.html',
  styleUrls: ['./power-super-saiyan-two.component.css']
})
export class PowerSuperSaiyanTwoComponent implements OnInit {

  @Input() superSaiyanTwo;

  constructor() { }

  ngOnInit() {
  }

}
