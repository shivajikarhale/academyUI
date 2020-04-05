 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IStudentPersonalInfo } from './istudent-personal-info';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http :HttpClient) { 

  }

  registerStudentDetails(studentDetails : IStudentPersonalInfo ){
    
    let _url = 'http://localhost:8080/academy/addstudpersonalinfo';
    return this._http.post(_url, studentDetails);
  }

}