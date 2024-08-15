import { CanActivateFn, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private loginService: LoginService,private router:Router) {}

  canActivate : CanActivateFn = (route, state) =>{

    if(this.loginService.isLoggedIn()){
      console.log("user is logged in");
      return true;
    }
    this.router.navigate([''])
    return false;
  }
 
};
