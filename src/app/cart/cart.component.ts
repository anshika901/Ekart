import { Component } from '@angular/core';
import { ProductModel } from '../Models/ProductModel';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CartItem } from '../Models/CartItem';
import { PaymentDataService } from '../services/payment-data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [];
  cartCount: number;
  // quantity:number=1;
  quantity: { [productId: number]: number } = {};
  totalCost: number = 0;
 


  constructor(private cartService: CartService,private router:Router,private paymentData:PaymentDataService){}

  shopNow(){
    this.router.navigate(["products"]);
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.cartItems= cart;
      this.updateCartCount();
    });
    this.cartService.getCartCount().subscribe(count => {
      this.cartCount = count;
    });
    this.cartItems.forEach(item => {
      this.quantity[item.product.id] = 1; // Default quantity is 1
    });
  }
  removeProduct(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem);
  }

  private updateCartCount() {
    this.cartCount = this.cartItems.length;
  }


  incrementQuantity(item:CartItem) {
 if (this.quantity[item.product.id] < this.cartItems.find(item => item.product.id === item.product.id)?.product.items_left) {
      this.quantity[item.product.id]++;
    }
   
  }

  decrementQuantity(item:CartItem) {
   if (this.quantity[item.product.id] > 1) {
      this.quantity[item.product.id]--;
    }
  }

  calculateTotalPrice(): number {
   return this.totalCost = this.cartItems.reduce((total, item) => {
    const itemQuantity = this.quantity[item.product.id]; // Retrieve quantity for the item
    const price = item.product.discountPrice ? item.product.discountPrice : item.product.price; // Get the price of the item

    return total + (price * itemQuantity);
    }, 0);
  }
  calculateTotalPriceWithTax(): number {
    return this.calculateTotalPrice() + 1; 
}

  proceedToCheckout() {
    this.totalCost = this.calculateTotalPriceWithTax();
    this.paymentData.totalCost =this.totalCost ;
   this.router.navigate(["payment"]);
  }
}
