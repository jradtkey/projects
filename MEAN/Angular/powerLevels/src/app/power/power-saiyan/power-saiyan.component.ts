import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power-saiyan',
  templateUrl: './power-saiyan.component.html',
  styleUrls: ['./power-saiyan.component.css']
})
export class PowerSaiyanComponent implements OnInit {

  @Input() saiyanPower;

  constructor() { }

  ngOnInit() {
  }

}
