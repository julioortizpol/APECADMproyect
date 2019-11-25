import { Component, OnInit } from '@angular/core';
import { userdata } from '../staticData/userData';
import { MdcTabActivatedEvent } from '@angular-mdc/web';
import { FormGroup, FormControl } from '@angular/forms';
import { AttachfiledialogComponent } from '../attachfiledialog/attachfiledialog.component';
import { FilehistorydialogComponent } from '../filehistorydialog/filehistorydialog.component';
import { MdcDialog } from '@angular-mdc/web';

@Component({
  selector: 'app-taskdetaildialog',
  templateUrl: './taskdetaildialog.component.html',
  styleUrls: ['./taskdetaildialog.component.scss']
})
export class TaskdetaildialogComponent implements OnInit {
  tabs = [
    { label: 'Documentos', icon: 'insert_drive_file' },
    { label: 'Participantes', icon: 'people' }
  ];
  tabcontentflag = true;
  condition = false;
  usersData = [];
  constructor(public attachfiledialog: MdcDialog, public doclife: MdcDialog) {
    this.progresstate = new FormGroup({
      selectprogresstate: new FormControl('No iniciada')
    });
   }

  progresstate: FormGroup;


  ngOnInit() {
    this.usersData = userdata;
    for (let i = 0; i < this.usersData.length; i++) {
      this.usersData[i].validate = false;
      if (this.usersData[i].role == "ADM") {
        this.usersData[i].validate = true;
      }
    }
  }
  logTab(event: MdcTabActivatedEvent): void {
    if(event.index == 0){
      this.tabcontentflag = false;
    }else{
      this.tabcontentflag = true;
    }
  }
  openattachfiledialog(){
    const dialogRef = this.attachfiledialog.open(AttachfiledialogComponent);
    dialogRef.afterClosed().subscribe( reason =>{
    })
  }

  openfilehistorydialog(){
    this.doclife.open(FilehistorydialogComponent);
  }

}
