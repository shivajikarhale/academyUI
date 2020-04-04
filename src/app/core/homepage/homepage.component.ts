import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {

  title = 'UpscAcademy';

  constructor(private _router: Router){

  }

  goToStudentRegistration(){
    this._router.navigate(['register-student'])
  }

  ngOnInit() {
  }

}
