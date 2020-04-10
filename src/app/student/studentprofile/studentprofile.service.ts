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

  getStudentRecentInfo() : Promise<any> {
    let _url = 'http://localhost:8080/academy/studrecentinfo';
    let recentResults = [ {name: 'OPTCSAT2547', value: 70, total: 100},
                          {name: 'OPTCSAT2345', value: 70, total: 75},
                          {name: 'OPTGEO5211', value: 40, total: 100}
                        ];
    let recentCourses = [ 
                          {name: 'geography', faculty: 'shiva', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting'},
                          {name: 'csat', faculty: 'hosh', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting'}
                        ];
    let coursesSuggestion = [ {name: 'history', faculty: 'megha', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting'},
                              {name: 'reasoning', faculty: 'atul', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting'}
                            ];

    let studrecentinfo = {results: recentResults, courses: recentCourses, suggestions: coursesSuggestion};
    return Promise.resolve(studrecentinfo);
    // return Promise.resolve(this._http.get(_url));

  }
}
