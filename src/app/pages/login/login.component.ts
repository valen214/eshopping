import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AuthService, LoginState } from "../../services/auth-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide_password: boolean;

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
      private hostElement: ElementRef,
      private authService: AuthService,
      private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const nativeElem = this.hostElement.nativeElement;
    const password_field = nativeElem.getElementsByClassName(
          "password-field")[0];

    password_field.children[0].children[0].style.paddingTop = 0;
  }

  getErrorMessage() {
    if(this.email.hasError('required')){
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  loginClick(){
    var login_success = this.authService.login();
    if(login_success){
      this.router.navigate([ "home" ]);
      // TODO: navigate to previous page
    }
  }
}
