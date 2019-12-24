import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent { 
  name:string = "Jotaro"
  click: number = 0;
  onChanged(incr) {
    console.log("Entered onChanged")
    if(incr) {
      this.click = this.click + 1
    }
    else {
      this.click = this.click - 1
    }
  }
}
