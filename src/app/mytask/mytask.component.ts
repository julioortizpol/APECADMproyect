import { Component, OnInit } from '@angular/core';
import { MdcDialog } from '@angular-mdc/web';
import { TaskdetaildialogComponent } from '../taskdetaildialog/taskdetaildialog.component';
import { CreartareaComponent } from '../creartarea/creartarea.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.scss']
})
export class MytaskComponent implements OnInit {
  tasks = [
    {
      name: "Contratar especialistas",
      startDate: "11/5/2019",
      duration: "20 días",
      progres: "No iniciada",
      proyect: "Creacion de departamento de calidad"
    },
    {
      name: "Contratar especialistas",
      startDate: "11/5/2019",
      duration: "20 días",
      progres: "No iniciada",
      proyect: "Creacion de departamento de calidad"
    },
    {
      name: "Contratar especialistas",
      startDate: "11/5/2019",
      duration: "20 días",
      progres: "No iniciada",
      proyect: "Creacion de departamento de calidad"
    },
    {
      name: "Contratar especialistas",
      startDate: "11/5/2019",
      duration: "20 días",
      progres: "No iniciada",
      proyect: "Creacion de departamento de calidad"
    },
    {
      name: "Contratar especialistas",
      startDate: "11/5/2019",
      duration: "20 días",
      progres: "No iniciada",
      proyect: "Creacion de departamento de calidad"
    },
  ]
  constructor(public taskDetailDialog: MdcDialog, private router:Router,public createtaskDialog: MdcDialog) { }
  elementVisible = false;
  ngOnInit() {
    if(this.router.url == "/mainpage/tareas"){
      this.elementVisible = true;
    }
  }
  openTaskDetailDialog() {
    const dialogRef = this.taskDetailDialog.open(TaskdetaildialogComponent);
    dialogRef.afterClosed().subscribe(reason => {
      
    })
  }

  openCreateTaskDialog(){
    this.createtaskDialog.open(CreartareaComponent);
  }
}
