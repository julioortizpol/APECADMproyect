import { Component } from '@angular/core';



import { MdcDialogRef } from '@angular-mdc/web';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss']
})
export class ForgotPasswordDialogComponent {

  constructor(public dialogRef: MdcDialogRef<ForgotPasswordDialogComponent>,) {
   }

   forgotPaswordForm = new FormGroup({
     user: new FormControl('', Validators.required)
   })
   submit(): void {
    if (this.forgotPaswordForm.invalid) {
      return;
    }

    this.dialogRef.close();
  }

}
