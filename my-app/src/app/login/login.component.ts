import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string
  password: string

  constructor() { }

  ngOnInit() {
    this.login = "adm"
    this.password = "adm123"
  }
  MakeLogin() {
    console.log(this.login)
    console.log(this.password)
    if (this.login == "adm" && this.password == "adm123") {
      console.log("You have entered succesfully")
    }
  }

}
