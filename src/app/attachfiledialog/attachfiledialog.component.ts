import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MdcDialogRef } from '@angular-mdc/web';


@Component({
  selector: 'app-attachfiledialog',
  templateUrl: './attachfiledialog.component.html',
  styleUrls: ['./attachfiledialog.component.scss']
})
export class AttachfiledialogComponent implements OnInit {

  constructor(public dialogRef: MdcDialogRef<AttachfiledialogComponent>) { }

  ngOnInit() {
  }
  addfileForm = new FormGroup({
    filename: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required)
  })
  submit(): void {
   if (this.addfileForm.invalid) {
     return;
   }

   this.dialogRef.close();
 }

}
