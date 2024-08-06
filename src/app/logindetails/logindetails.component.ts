import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserLoginDetailsService } from '../_service/api/user-login-details.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, throwError } from 'rxjs';
@Component({
  selector: 'app-logindetails',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './logindetails.component.html',
  styleUrl: './logindetails.component.css'
})
export class LogindetailsComponent implements OnInit {

  UserArray: any[] = [];
  userId: any;

  entity: any = { 
    id:"",  
    status:""      
   }

   userRole: any = { 
    id:"",  
    role:""      
   }

  constructor(private http: HttpClient, private userloginService: UserLoginDetailsService) {
  }

  

  ngOnInit() {
    this.userloginService.getUserData().subscribe((res: any[]) => {
      this.UserArray = res;
    });
  }

 
 


  updateUserStatus(userId: string,state:Boolean) {
    this.entity.status=state;
    this.entity.id=userId;
    this.userloginService.editUser(userId,  this.entity).subscribe(
      user => this.userId = user.id 
      
    );
    this.userloginService.getUserData().subscribe((res: any[]) => {
      this.UserArray = res;
    });
  }

  updateUserRole(userId: string,role:string) {
    this.userRole.role=role;
    this.userRole.id=userId;
    this.userloginService.editUserRole(userId,  this.userRole).subscribe(
      user => this.userId = user.id 
    );
    this.userloginService.getUserData().subscribe((res: any[]) => {
      this.UserArray = res;
    });
  }


  }


 



