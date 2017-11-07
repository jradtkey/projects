import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [];
  product;

  constructor(private _taskService: TaskService, private router: Router, private route: ActivatedRoute) {
    this.products = this._taskService.retrieveTasks();
  }


  ngOnInit() {
  }

  delete(idx){
    this.products.splice(idx, 1);
  }

}
