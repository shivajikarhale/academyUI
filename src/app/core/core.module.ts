import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [HomepageComponent, LoginComponent, MainmenuComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule
  ],
  entryComponents: [
    LoginComponent
  ],
  exports: [
    HomepageComponent,
    MainmenuComponent
  ]
})
export class CoreModule { }
