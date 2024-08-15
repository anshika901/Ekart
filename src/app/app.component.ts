import { Component, inject } from '@angular/core';
import { NavigationStart, Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ekart';
  showLoader:boolean=false;

  router:Router=inject(Router);
  ngOnInit(){
    this.router.events.subscribe((routerEvent : Event) => {
     if(routerEvent instanceof NavigationStart){
        this.showLoader=true;
      }
      if(routerEvent instanceof NavigationEnd){
        this.showLoader=false;
      }
    })
  }
}
