import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [StudentprofileComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class StudentModule { }
