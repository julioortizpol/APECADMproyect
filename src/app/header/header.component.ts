import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdcDialog } from '@angular-mdc/web';
import { CreateProyectComponent } from '../create-proyect/create-proyect.component';
import { headerData } from '../staticData/mainpageHeaderData';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tabs = [];
  userDrawerActions = [];
  helpDrawerActions = [];
  activatedtab = '1'
  constructor(private router: Router, public createProyectComponent: MdcDialog) {
    router.events.subscribe((val) => {
      this.setFocusTabWithTheUrl();
    })
  }
  ngOnInit() {
    this.setFocusTabWithTheUrl();
    this.tabs = headerData.tabs;
    this.helpDrawerActions = headerData.helpDrawerActions;
    this.userDrawerActions = headerData.userDrawerActions;
  }

  opencreateProyectComponent() {
    const dialogRef = this.createProyectComponent.open(CreateProyectComponent);
    dialogRef.afterClosed().subscribe(reason => {
    })
  }

  logout() {
    this.router.navigate(['/']);
  }

  setFocusTabWithTheUrl() {
    switch (this.router.url) {
      case '/mainpage/personal':
        this.activatedtab = '2'
        break;
      case '/mainpage/proyectos':
        this.activatedtab = '0'
        break;
      case '/mainpage/tareas':
        this.activatedtab = '1'
        break;
    }
  }

}
