import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  name = "Anime"
  @Input() username: string;
  _userage: number;
  @Input()
  set userage(age:number) {
    if (age < 0) {
      this._userage = 0
    }
    else if (age > 100) {
      this._userage = 100
    }
    else {
      this._userage = age
    }
  }
  get userage() {
    return this._userage
  }
  constructor() { }

  ngOnInit() {
  }

}
