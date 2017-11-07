import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  products;
  product;
  id;

  constructor(private route: ActivatedRoute, private router: Router, private service: TaskService) {}

  onSubmit(formData){
    this.router.navigate(['/products']);
  }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
    this.products = this.service.retrieveTasks();
    this.product = this.products[params.get('id')];
    this.id = params.get('id');
    console.log(this.product)
    })
  }

  delete(){
    this.products.splice(this.id, 1);
    this.router.navigate(['/products']);
  }

}
