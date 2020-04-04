import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { StudentprofileService } from 'src/app/student/studentprofile.service';
import { IStudentLogin } from 'src/app/student/istudent-login';

@Component({ 
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.less']
})
    
export class LoginComponent implements OnInit {

    submitted = false;
    returnUrl: string;
    studLogin:IStudentLogin;
    loginForm=new FormGroup({
        username:new FormControl(''),
        password:new FormControl('')
      });

    constructor(private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private _service:StudentprofileService ) {
       
    }

    ngOnInit() {
        
    }

    goToStudentRegistration(){
      this.router.navigate(['register-student'])
    }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.router.navigate(['/studprofile']).then( (e) => {
            if (e) {
              console.log("Navigation is successful!");
            } else {
              console.log("Navigation has failed!");
            }
          });
     this._service.getStudentProfile(this.studLogin).subscribe((data) => {
             
     });
    
    }
}

