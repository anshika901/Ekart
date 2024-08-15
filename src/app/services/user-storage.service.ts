import { Injectable } from '@angular/core';

const TOKEN='ekart-token';
const USER='ekart-user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  public saveToken(token:string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
}

  public saveUser(user:string):void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(TOKEN,JSON.stringify(user));

    
  }
}
