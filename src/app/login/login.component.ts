import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { MdcDialog } from '@angular-mdc/web';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog/forgot-password-dialog.component';
import { MdcSnackbar } from '@angular-mdc/web';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = {
    id: null,
    username: "",
    password: "",
    mail: "",
    role: ""
  };

  constructor(public forgotPasworrdDialogC: MdcDialog,private stateOfSendRequest: MdcSnackbar,
    private router: Router) { }
  ngOnInit() {
  }  
  loginForm = new FormGroup({
    userPasword: new FormControl('',Validators.required),
    user: new FormControl('',Validators.required)
  })

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }else if(this.loginForm.value.user == "Admin" && this.loginForm.value.userPasword == "Admin"){
      this.router.navigate(['mainpage/proyectos']);
    }
    
  }
  openForgotPaswordDialog(){
    const dialogRef = this.forgotPasworrdDialogC.open(ForgotPasswordDialogComponent);
    dialogRef.afterClosed().subscribe( reason =>{
      if(reason != "close"){
        this.simple();
      }
    })
  }

  simple() {
    const snackbarRef = this.stateOfSendRequest.open('Your going to recive and Mail with the next steps');
    snackbarRef.afterDismiss().subscribe(reason => {
      console.log(reason);
    });
  }

}