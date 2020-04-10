import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatMenuModule, MatProgressBarModule, MatCardModule } from '@angular/material';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  providers: [
    {provide: MatDialogRef, useValue: {}}
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatCardModule,
    MatDialogModule
  ],
})
export class AngularMaterialModule { }
