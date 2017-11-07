import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";
import { Product1 } from './product1';

@Injectable()
export class ServiceService {

  user;
  private product1: Product1[]=[];

  constructor(private _http: Http) { }

  storeUser(data){
    this.user = data;
    console.log("service", this.user)
  }

  createBid(product1:Product1){
    product1.name = this.user
    console.log(product1)
    this._http.post('/product1', product1).subscribe(data => {});
  }

  fetchBids(callback){
    this._http.get('/bids').subscribe(data => {
      callback(data);
    })
  }

  delete(){
    this._http.get('/delete').subscribe(data=>{})
  }

}
