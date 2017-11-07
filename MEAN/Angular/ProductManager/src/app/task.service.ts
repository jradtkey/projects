import { Injectable } from '@angular/core';



@Injectable()
export class TaskService {

  products = [];

  constructor() { }

  retrieveTasks(){
    return this.products;
  }



  createProduct(product)
  {
    this.products.push(product);
  }

}
