import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MdcFabModule,
  MdcIconModule,
  MdcMenuModule,
  MdcButtonModule,
  MdcTopAppBarModule,
  MdcCardModule,
  MdcListModule,
  MdcDrawerModule,
  MdcTextFieldModule,
  MdcCheckboxModule,
  MdcIconButtonModule,
  MdcDialogModule,
  MdcSnackbarModule,
  MdcTabBarModule,
  MdcRippleModule,
  MdcRadioModule,
  MDCDataTableModule,
  MdcSelectModule,
  MdcLinearProgressModule 
} from '@angular-mdc/web';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForgotPasswordDialogComponent } from './login/forgot-password-dialog/forgot-password-dialog.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { MytaskComponent } from './mytask/mytask.component';
import { HumanresourceComponent } from './humanresource/humanresource.component';
import { CreateProyectComponent } from './create-proyect/create-proyect.component';
import { AsignAdmsProyectDialogComponent } from './create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component';
import { CreatenewuserdialogComponent } from './createnewuserdialog/createnewuserdialog.component';
import { UsersdetailComponent } from './humanresource/usersdetail/usersdetail.component';
import { TaskdetaildialogComponent } from './taskdetaildialog/taskdetaildialog.component';
import { AttachfiledialogComponent } from './attachfiledialog/attachfiledialog.component';
import { FilehistorydialogComponent } from './filehistorydialog/filehistorydialog.component';
import { ProyectdetailsComponent } from './proyectdetails/proyectdetails.component';
import { ProyectdetailinfoComponent } from './proyectdetailinfo/proyectdetailinfo.component';
import { CreartareaComponent } from './creartarea/creartarea.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ForgotPasswordDialogComponent,
    ProyectsComponent,
    MytaskComponent,
    HumanresourceComponent,
    CreateProyectComponent,
    AsignAdmsProyectDialogComponent,
    CreatenewuserdialogComponent,
    UsersdetailComponent,
    TaskdetaildialogComponent,
    AttachfiledialogComponent,
    FilehistorydialogComponent,
    ProyectdetailsComponent,
    ProyectdetailinfoComponent,
    CreartareaComponent,
  ],
  entryComponents:[
    ForgotPasswordDialogComponent,
    CreateProyectComponent,
    AsignAdmsProyectDialogComponent,
    CreatenewuserdialogComponent,
    UsersdetailComponent,
    TaskdetaildialogComponent,
    AttachfiledialogComponent,
    FilehistorydialogComponent,
    CreartareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MdcFabModule,
    MdcIconModule,
    MdcMenuModule,
    MdcButtonModule,
    MdcTopAppBarModule,
    MdcCardModule,
    MdcListModule,
    MdcDrawerModule,
    MdcTextFieldModule,
    MdcCheckboxModule,
    MdcIconButtonModule,
    MdcDialogModule,
    MdcSnackbarModule,
    ReactiveFormsModule,
    MdcTabBarModule,
    MdcRippleModule,
    MdcRadioModule,
    MDCDataTableModule,
    MdcLinearProgressModule,
    MdcSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
