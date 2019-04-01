import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {environment} from '../environment';


@Component({
  selector: 'login-dialog',
  templateUrl: 'login.component.html',
})
export class LoginComponent {

  constructor(  public dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
