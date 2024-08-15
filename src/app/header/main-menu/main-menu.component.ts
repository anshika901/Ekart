import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { CartService } from '../../services/cart.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  mainMenuItems: string[] = ['Home', 'Products', 'Sale', 'Wish List', 'Contact'];

  loggedIn:boolean=false;

  cartCount: number = 0;
  constructor(private cartService: CartService,private router: Router,private loginService:LoginService) { }

  onCartClicked(){
    this.router.navigate(['/shop']);
    console.log("cart clicked");
  }

  updateCartCount(count: number) {
    this.cartCount = count;
  }
  ngOnInit(): void {
    this.cartService.getCartCount().subscribe(count => {
      this.cartCount = count;
    });
    this.loggedIn=this.loginService.isLoggedIn();
  }

}
