import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLOginComponent  {

 loginObj: any = {
  Email:"",
  Password:""
 }

 signupObj: any = {
  Name:"",
  ContactNumber:"000000000",
  Password:"",
  Email:"",
  Status:true,
  Role:"USER"
 }

 constructor(private http:HttpClient,private router:Router)
 {


 }
 onSignup()
 {

 
  this.http.post(`${environment.apiUrl}api/User/Add`,(this.signupObj)).subscribe(
    (res:any) => {
      if(res)
      {        
        alert("Registration Successful");
        this.router.navigateByUrl('/user-login')
                
      }
    
    })
 }

 onLogin()
 {
  
  this.http.get(`${environment.apiUrl}api/User/FetchbyUserName?email=${this.loginObj.Email}&password=${this.loginObj.Password}`).subscribe(
    (res:any) => {
      if(res)
      {
        localStorage.setItem('LoginDetails',this.loginObj);
         alert("Registration Successful");
        this.router.navigate(['/pos-dashboard'])
       
      }

    })
 }

}






