import { Component, OnInit } from '@angular/core';
import { CreateProyectComponent } from '../create-proyect/create-proyect.component';
import { MdcDialog } from '@angular-mdc/web';


@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  constructor(public createProyectComponent: MdcDialog) { }

  ngOnInit() {
  }

  opencreateProyectComponent(){
    const dialogRef = this.createProyectComponent.open(CreateProyectComponent);
    dialogRef.afterClosed().subscribe( reason =>{
    })
  }

}
