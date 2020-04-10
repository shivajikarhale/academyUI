import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login-service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.less']
})
export class MainmenuComponent implements OnInit {

  isLogin: boolean = false;
  loginName: string = "";

  constructor(
    private _loginService: LoginService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this._loginService.isLoginObserve.subscribe(
      (isLogin: boolean) => this.isLogin = isLogin
    )
    this._loginService.loginNameObserve.subscribe(
      (username: string) => this.loginName = username
    )
  }

  loginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '25%',
      height: '70%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logout() {
    this._loginService.isLoginObserve.emit(false);
    this._loginService.loginNameObserve.emit("");
    this.router.navigate(['']);
  }

}
