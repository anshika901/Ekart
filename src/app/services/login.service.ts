import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8003"


generateToken(credentials:any){
  return this.http.post(`${this.url}/auth/login`,credentials)
}

loginUser(token){
    localStorage.setItem("token",token);
    return true; // means user is logged in and in local storage the token is stored;
  }


// for checking if user is logged in 
  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined|| token==null|| token==''){
      return false;
    }
    else{
      return true;
    }
  }


  //for logout the user
  logout(){
    localStorage.removeItem('token');
    return true;
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
