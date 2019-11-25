import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectdetails',
  templateUrl: './proyectdetails.component.html',
  styleUrls: ['./proyectdetails.component.scss']
})
export class ProyectdetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/mainpage/detalleproyecto/tareas']);
  }

}
