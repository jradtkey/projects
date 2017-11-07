import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power-super-saiyan',
  templateUrl: './power-super-saiyan.component.html',
  styleUrls: ['./power-super-saiyan.component.css']
})
export class PowerSuperSaiyanComponent implements OnInit {

  @Input() superSaiyanPower; 
  constructor() { }

  ngOnInit() {
  }

}
