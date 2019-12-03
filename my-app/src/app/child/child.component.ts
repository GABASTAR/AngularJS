import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  name = "Anime"
  @Output() onChanged = new EventEmitter<boolean>();
  change(incr) {
    this.onChanged.emit(incr)
  }
  constructor() { }

  ngOnInit() {
  }

}
