import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login-service';


@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.less']
})
export class MainmenuComponent implements OnInit {

  isLogin: boolean = false;
  loginName: string = "";

  constructor(
    private _loginService: LoginService
  ) {}

  ngOnInit() {
    this._loginService.isLoginObserve.subscribe(
      (isLogin: boolean) => this.isLogin = isLogin
    )
    this._loginService.loginNameObserve.subscribe(
      (username: string) => this.loginName = username
    )
  }

}
