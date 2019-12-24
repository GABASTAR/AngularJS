import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string
  password: string
  entered: boolean

  constructor() { }

  ngOnInit() {
    this.login = "adm"
    this.password = "adm123"
    this.entered = false
  }
  MakeLogin() {
    console.log(this.login)
    console.log(this.password)
    if (this.login == "adm" && this.password == "adm123") {
      this.entered = true
      console.log("You have entered succesfully")
    }
    else {
      this.entered = false
      localStorage.setItem("login", this.login)
      localStorage.setItem("password", this.password)
      const pass = localStorage.getItem("password")
      const log = localStorage.getItem("login")
      if (pass === this.login && log === this.password) {
        this.entered = true;
        console.log("Nice!")
      }
    }
  }
  
}
