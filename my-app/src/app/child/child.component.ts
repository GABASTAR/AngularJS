import {  Output, 
  EventEmitter, 
  Component, 
  Input, 
  OnInit,
  DoCheck,
  OnChanges,
 AfterContentInit, 
 AfterContentChecked, 
 AfterViewChecked, 
 AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,
DoCheck,
OnChanges,
AfterContentInit, 
AfterContentChecked, 
AfterViewChecked, 
AfterViewInit {
  name = "Anime"
  @Input() ename: string;
  count:number=1;
  @Output() onChanged = new EventEmitter<boolean>();
  change(incr) {
    this.onChanged.emit(incr)
  }
  constructor() { }
  
  @Input() UserName: string
  @Output() UserNameChange = new EventEmitter<string>()
  onNameChange(newName:string) {
    console.log("Entered onNameChange")
    this.UserName = newName
    this.UserNameChange.emit(newName)
  }
  ngOnInit() {
       
    this.log(`ngOnInit`);
  }
  ngOnChanges() {
     
    this.log(`OnChanges`);
  }
  ngDoCheck() {
     
    this.log(`ngDoCheck`);
  }
  ngAfterViewInit() {
     
    this.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
     
    this.log(`ngAfterViewChecked`);
  }
  ngAfterContentInit() {
     
    this.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {
     
    this.log(`ngAfterContentChecked`);
  }

  private log(msg: string) {
      console.log(this.count + ". " + msg);
      this.count++;
  }
}