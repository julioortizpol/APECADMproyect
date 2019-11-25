import { Component } from '@angular/core';

import { MdcDialogRef } from '@angular-mdc/web';
import { MdcDialog } from '@angular-mdc/web';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AsignAdmsProyectDialogComponent } from '../create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component';


@Component({
  selector: 'app-create-proyect',
  templateUrl: './create-proyect.component.html',
  styleUrls: ['./create-proyect.component.scss']
})
export class CreateProyectComponent {

  newProyectFrom = new FormGroup({
    planName: new FormControl('', Validators.required)
  })
  submit(): void {
    if (this.newProyectFrom.invalid) {
      return;
    }

    this.dialogRef.close();
  }
  constructor(public dialogRef: MdcDialogRef<CreateProyectComponent>, public asignadmsproyectDialog: MdcDialog) { }

  openasignadmsproyectDialog(){
    const dialogRef = this.asignadmsproyectDialog.open(AsignAdmsProyectDialogComponent);
    dialogRef.afterClosed().subscribe( reason =>{
    })
  }
}
