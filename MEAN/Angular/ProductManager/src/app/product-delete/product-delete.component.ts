import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
