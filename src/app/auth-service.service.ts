import { Injectable } from '@angular/core';

export enum LoginState {
  LOGGED_IN,
  LOGGED_OUT,
  PENDING,
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private login_state: LoginState = LoginState.LOGGED_OUT;

  constructor() { }

  login(): boolean {
    this.login_state = LoginState.LOGGED_IN;
    return true;
  }

  getLoginState(): LoginState {
    return this.login_state;
  }
}
