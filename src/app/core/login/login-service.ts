import { Injectable, EventEmitter } from '@angular/core';
import { IStudentLogin } from './istudent-login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  isLoginObserve: EventEmitter<Boolean> = new EventEmitter();
  loginNameObserve: EventEmitter<String> = new EventEmitter();
  
  userLogin(istudent: IStudentLogin): Promise<any> {
    let _url = 'http://localhost:8080/login';
    if (istudent.password !== 'admin') {
      return Promise.reject({});
    }
    return Promise.resolve({loginName: istudent.username});
    // return Promise.resolve(this._http.post(_url, istudent));
  }
}
