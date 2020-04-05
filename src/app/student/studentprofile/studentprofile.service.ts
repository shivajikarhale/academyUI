import { Injectable } from '@angular/core';
import { IStudentLogin } from '../../core/login/istudent-login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentprofileService {

  constructor(private _http :HttpClient) { }
  
  getStudentProfile(studLogin:IStudentLogin){
    let _url = 'http://localhost:8080/academy/addstudpersonalinfo';
    return this._http.post(_url, studLogin);

  }
}
