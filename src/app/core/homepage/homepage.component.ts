import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login-service';
import { HomepageService } from './homepage-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {

  isLogin: boolean = false;
  carouselData = [];
  newsData = [];

  constructor(
    private _loginService: LoginService,
    private _homepageService: HomepageService
  ) {}


  ngOnInit() {
    this._loginService.isLoginObserve.subscribe(
      (isLogin: boolean) => this.isLogin = isLogin
    );
    this._homepageService.getCarousel().then(
      data => this.carouselData = data,
      err => console.log(err)
    );
    this._homepageService.getNews().then(
      data => this.newsData = data,
      err => console.log(err)
    );
  }

}
