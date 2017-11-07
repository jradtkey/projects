import { Component, OnInit } from '@angular/core';
import { Product1 } from '../product1';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  product1: Product1 = new Product1("","");
  bids = [];
  highest = 0;

  constructor(private service: ServiceService, private router: Router) { }

  onSubmit(data){
    this.product1.bid = data.value.bid;
    this.service.createBid(this.product1);
    this.bids.push(this.product1);
  }

  delete(){
    this.service.delete();
  }

  ngOnInit() {

    this.service.fetchBids(
      (res) => {
        this.bids = res.json()['bids'];

        for(let i = 0; i < this.bids.length; i ++){
          if (this.highest < this.bids[i].bid) {
              this.highest = this.bids[i].bid;
          }
        }
      }
    )
  }

}
