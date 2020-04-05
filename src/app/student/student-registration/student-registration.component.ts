import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { StudentService } from '../student.service';
import { IStudentPersonalInfo } from '../istudent-personal-info';


@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.less']
})

export class StudentRegistrationComponent implements OnInit {

   studentData: IStudentPersonalInfo={ 
      studentId:undefined,
      firstName:undefined,
      middleName:undefined,
      lastName:undefined,
      motherName:undefined,
      gender:undefined,
      dateOfBirth:undefined,
      aadharNumber:undefined,
      govtIdType:undefined,
      govtId:undefined,
      mobileNo:undefined,
      email:undefined,
      fatherOccupation:undefined,
      motherOccupation:undefined,
      firstCourse:undefined,
      registrationDate:undefined
    };

  registrationForm=new FormGroup({
    studentName:new FormControl(''),
    fathername:new FormControl(''),
    lastname:new FormControl(''),
    mothername:new FormControl(''),
    gender:new FormControl(''),
    dob:new FormControl(''),
    aadharnumber:new FormControl(''),
    govtIdType:new FormControl(''),
    govtIdNum:new FormControl(''),
    mobNum:new FormControl(''),
    email:new FormControl(''),
    fathOccu:new FormControl(''),
    mothOccu:new FormControl(''),
    courseToJoin:new FormControl('')
  });
  
  constructor(private fb: FormBuilder, private _service: StudentService) { 

  }

  ngOnInit() {
    
  }

  loadApiData(){
    this.registrationForm.patchValue(
      {
        studentName:'Shivaji',
        password:'Shiva@123',
        confirmPassword:'Shiva@123',
       
      }
    );
  }

  registerStudent(){
    this.studentData.firstName = this.registrationForm.controls["studentName"].value;
    this.studentData.middleName = this.registrationForm.controls["fathername"].value;
    this.studentData.lastName =this.registrationForm.controls["lastname"].value;
    this.studentData.motherName = this.registrationForm.controls["mothername"].value;
    this.studentData.gender = this.registrationForm.controls["gender"].value;
    this.studentData.dateOfBirth =this.registrationForm.controls["dob"].value;
    this.studentData.aadharNumber = this.registrationForm.controls["aadharnumber"].value;
    this.studentData.govtIdType = this.registrationForm.controls["govtIdType"].value;
    this.studentData.govtId =this.registrationForm.controls["govtIdNum"].value;
    this.studentData.mobileNo = this.registrationForm.controls["mobNum"].value;
    this.studentData.email = this.registrationForm.controls["email"].value;
    this.studentData.fatherOccupation =this.registrationForm.controls["fathOccu"].value;
    this.studentData.motherOccupation = this.registrationForm.controls["mothOccu"].value;
    this.studentData.firstCourse = this.registrationForm.controls["courseToJoin"].value;

     this._service.registerStudentDetails(this.studentData).subscribe((data) => {
             
     });
  }


}
