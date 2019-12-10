import { Component, } from '@angular/core';
import { Router, } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  name:string = "Name"

  constructor(private route:Router){}
    goHome() {
      this.route.navigate([""])
    }
}
