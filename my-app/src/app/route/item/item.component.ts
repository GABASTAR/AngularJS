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
sub : Subscription
  constructor(private activateRoute:ActivatedRoute) { 
    // this.id = activateRoute.params.subscribe["id"]
    this.sub = activateRoute.params.subscribe(params => this.id = params["id"])
  }

  ngOnInit() {
  }

}
