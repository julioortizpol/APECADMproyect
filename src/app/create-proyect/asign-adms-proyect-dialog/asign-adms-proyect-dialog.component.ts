import { Component, OnInit } from '@angular/core';
import { MdcDialogRef } from '@angular-mdc/web';
import { userdata } from '../../staticData/userData';

@Component({
  selector: 'app-asign-adms-proyect-dialog',
  templateUrl: './asign-adms-proyect-dialog.component.html',
  styleUrls: ['./asign-adms-proyect-dialog.component.scss']
})
export class AsignAdmsProyectDialogComponent implements OnInit {

  constructor(public dialogRef: MdcDialogRef<AsignAdmsProyectDialogComponent>,) { }
  condition = false;
  usersData = [];
  ngOnInit() {
    this.usersData = userdata;
    for(let i=0; i<this.usersData.length; i++){
      this.usersData[i].validate = false;
      if(this.usersData[i].role == "ADM"){
        this.usersData[i].validate = true;
      }
    }
  }

}
