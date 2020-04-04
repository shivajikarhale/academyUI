import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatMenuModule } from  '@angular/material';



@NgModule({
  declarations: [HomepageComponent, LoginComponent, MainmenuComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [
    HomepageComponent,
    MainmenuComponent
  ]
})
export class CoreModule { }
