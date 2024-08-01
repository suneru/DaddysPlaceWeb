import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  this.http.post('https://localhost:7189/api/User/Add',(this.signupObj)).subscribe(
    (res:any) => {
      if(res)
      {
        this.router.navigateByUrl('/user-login')
        console.log(res);
        console.log("Success register");
      }
    })
 }

 onLogin()
 {
  debugger
  this.http.get('https://localhost:7189/api/User/FetchbyUserName?email='+ this.loginObj.Email+'&password='+this.loginObj.Password).subscribe(
    (res:any) => {
      if(res)
      {
        console.log("Success register");
        console.log(res);
      }
      
    })
 }

}

  
  



