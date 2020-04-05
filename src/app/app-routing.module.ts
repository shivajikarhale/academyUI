import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentRegistrationComponent } from './student/student-registration/student-registration.component';
import { HomepageComponent } from './core/homepage/homepage.component';
import { StudentprofileComponent } from './student/studentprofile/studentprofile.component';


const routes: Routes = [
  {path:'register-student', component: StudentRegistrationComponent},
  {path:'', component: HomepageComponent},
  {path:'studprofile', component: StudentprofileComponent},
  {path:'homepage', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
