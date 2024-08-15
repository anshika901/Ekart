import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoginMode:boolean=true;
  visible = false; 
  @ViewChild('authForm') authForm!: NgForm;
  credentials={
   email:'',
    password:''
  }

  constructor(private loginService:LoginService,private httpclient:HttpClient){}

onSwitchMode(){
  this.isLoginMode=!this.isLoginMode;
 
}
togglePasswordVisibility(): void {
  this.visible = !this.visible;
}

onSubmit(){
if(this.isLoginMode){
  if((this.credentials.email!=''&& this.credentials.password!='')&& (this.credentials.email!=null && this.credentials.password!=null)){
 this.loginService.generateToken(this.credentials).subscribe(
  (response:any)=>{
    //success
console.log(response.jwtToken);
this.loginService.loginUser(response.jwtToken);
window.location.href="home";
  },
  error=>{
    //failure
    console.log(error);
  }
 )

  }
  else{
    console.log("Fields are empty");
  }
}
else{
  if (this.credentials.email && this.credentials.password) {
    this.httpclient.post<any>('http://localhost:8003/auth/create-user', this.credentials)
      .subscribe(
        response => {
          console.log('User created successfully:', response);
         this.isLoginMode = true;
          this.authForm.resetForm(); 
        },
        error => {
          console.error('Error creating user:', error);
        }
      );
  } else {
    console.log("Fields are empty");
  }
}
 }
}


