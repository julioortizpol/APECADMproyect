import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { MytaskComponent } from './mytask/mytask.component';
import { HumanresourceComponent } from './humanresource/humanresource.component';
import { ProyectdetailsComponent } from './proyectdetails/proyectdetails.component';
import { ProyectdetailinfoComponent } from './proyectdetailinfo/proyectdetailinfo.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'mainpage', component: HeaderComponent, 
    children: [
      {
        path: 'proyectos', component: ProyectsComponent
      },
      {
        path: 'tareas', component: MytaskComponent
      },
      {
        path: 'personal', component: HumanresourceComponent
      },
      {
        path: 'detalleproyecto', component: ProyectdetailsComponent,
        children: [
          {
            path: 'tareas', component: MytaskComponent
          },
          {
            path: 'personal', component: HumanresourceComponent
          },
          {
            path: 'detalles', component: ProyectdetailinfoComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
