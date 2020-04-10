import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { StudentprofileService } from 'src/app/student/studentprofile/studentprofile.service';
import { IStudentLogin } from 'src/app/core/login/istudent-login';
import { LoginService } from './login-service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.less']
})

export class LoginComponent implements OnInit {

  submitted = false;
  returnUrl: string;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _service: StudentprofileService,
    private _loginService: LoginService,
    public dialogRef: MatDialogRef<LoginComponent>) {

  }

  ngOnInit() {

  }

  get f() {
    return this.loginForm['controls'];
  }

  goToStudentRegistration() {
    this.closeDialog();
    this.router.navigate(['register-student']);
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let studLogin: IStudentLogin = this.loginForm.value;

    this._loginService.userLogin(studLogin).then(
      (profileInfo) => {
        this._loginService.loginNameObserve.emit(profileInfo.loginName);
        this._loginService.isLoginObserve.emit(true);
        console.log(this.dialogRef);
        this.closeDialog();
        this._service.getStudentProfile(studLogin).subscribe(
          (data) => { },
          (err) => console.log(err)
        );
        this.router.navigate(['/studprofile']).then((e) => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      },
      (error) => {
        console.log("Error getting response => " + error);
        this.loginForm.get('password').setErrors({ 'invalidLoginCredentials': true });
      }
    );
  }

  closeDialog() {
    try {
      this.dialogRef.close();
    } catch (error) {
      
    }
  }
}

