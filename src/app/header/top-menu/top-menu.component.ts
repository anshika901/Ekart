import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit{
public loggedIn:boolean=false;
constructor(private loginService:LoginService){}
ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
}
logout(){
  this.loginService.logout();
  location.reload();
  this.loggedIn = false; 
}

}
