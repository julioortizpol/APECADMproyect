import { Component, OnInit } from '@angular/core';
import { userdata } from '../staticData/userData';
import { MdcDialog } from '@angular-mdc/web';
import { CreatenewuserdialogComponent } from '../createnewuserdialog/createnewuserdialog.component';
import { UsersdetailComponent } from '../humanresource/usersdetail/usersdetail.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-humanresource',
  templateUrl: './humanresource.component.html',
  styleUrls: ['./humanresource.component.scss']
})
export class HumanresourceComponent implements OnInit {
  users = [];
  constructor(public HumanresourceDialog: MdcDialog, public userDetailDialog: MdcDialog,
    private router:Router) { }
  elementVisible = false;
  ngOnInit() {
    if(this.router.url == "/mainpage/personal"){
      this.elementVisible = true;
    }
    this.users = userdata;
  }

  openAddUserDialog(){
    const dialogRef = this.HumanresourceDialog.open(CreatenewuserdialogComponent);
    dialogRef.afterClosed().subscribe( reason =>{
      
    })
  }

  openUserDetailDialog(){
    const dialogRef = this.userDetailDialog.open(UsersdetailComponent);
    dialogRef.afterClosed().subscribe( reason =>{

    })
  }

}
