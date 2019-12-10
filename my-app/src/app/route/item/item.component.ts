import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
id : number
price : string
product : string
subaru : Subscription
subqaru : Subscription
  constructor(private activateRoute:ActivatedRoute) { 
    // this.id = activateRoute.params.subscribe["id"]
    this.subaru = activateRoute.params.subscribe(params => this.id = params["id"])
    this.subqaru = activateRoute.queryParams.subscribe((queryParams) => {this.product = queryParams["product"]; this.price = queryParams["price"]})
  }

  ngOnInit() {
  }

}
