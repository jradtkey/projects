import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  product = new Product();

  constructor(private taskService: TaskService, private router: Router) {}

  onSubmit(formData){
    console.log(formData.form);
    this.product.name = formData.form.value.name;
    this.product.price = formData.form.value.price;
    this.product.image = formData.form.value.image;
    this.taskService.createProduct(this.product);
    console.log(this.product);
    this.router.navigate(['/products']);
  }

  ngOnInit() {
  }

}
