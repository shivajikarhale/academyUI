import { Component, OnInit } from '@angular/core';
import { StudentprofileService } from './studentprofile.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.less']
})
export class StudentprofileComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  recentResults = [];
  recentCourses = [];
  coursesSuggestions = [];

  constructor(private _studentprofileService: StudentprofileService) { }

  ngOnInit() {
    this._studentprofileService.getStudentRecentInfo().then(
      data => {
        console.log(data);
        this.recentResults = data['results'];
        this.recentCourses = data['courses'];
        this.coursesSuggestions = data['suggestions'];
      },
      (err) => console.log(err)
    );
  }

}
