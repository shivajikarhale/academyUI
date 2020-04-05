import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.less']
})
export class StudentprofileComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  recentResults = [ {name: 'OPTCSAT2547', value: 70, total: 100}, {name: 'OPTCSAT2345', value: 70, total: 75}, {name: 'OPTGEO5211', value: 40, total: 100}];
  recentCourses = [ {name: 'geography', faculty: 'shiva', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting'},
                    {name: 'csat', faculty: 'hosh', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting'}];
  coursesSuggestion = [ {name: 'history', faculty: 'megha', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting'},
                    {name: 'reasoning', faculty: 'atul', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting'}];
  
  constructor() { }

  ngOnInit() {
  }

}
