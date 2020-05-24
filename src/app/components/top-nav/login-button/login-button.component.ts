import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, LoginState } from "../../../services/auth-service.service";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
  }


  get logged_in(): boolean{
    return {
      [LoginState.LOGGED_IN]: true,
      [LoginState.LOGGED_OUT]: false,
    }[this.authService.getLoginState()] || false;
  }
  get icon(): String {
    return this.logged_in ? "account_circle" : "vpn_key";
  }


  onClick(): void {
    console.log("login!");
    if(this.logged_in){

    } else{
      this.router.navigate(["login"]);
    }
  }
}
