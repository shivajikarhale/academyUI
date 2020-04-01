import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'UpscAcademy';

  constructor(private _router: Router){

  }

  goToStudentRegistration(){
    this._router.navigate(['register-student'])
  }

}
