import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/ProductModel';
import { Observable,of ,BehaviorSubject} from 'rxjs';
import { CartItem } from '../Models/CartItem';
import { CartComponent } from '../cart/cart.component';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cart);
  private cartCountSubject = new BehaviorSubject<number>(0);
  private quantityMap: { [productId: number]: number } = {};
  constructor() { }

  addToCart(product: ProductModel,selectedSize: number, selectedColor: string) {
    const existingItem = this.cart.find(item => item.product.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor);

    if (existingItem) {
      // this.quantityMap[existingItem.product.id]++;
     
    
    } else {
    const cartItem: CartItem = {
      product: product,
      selectedSize: selectedSize,
      selectedColor: selectedColor
    };

    this.cart.push(cartItem);
    this.updateCartCount();
    console.log(this.cart);
  }
  }
  removeFromCart(cartItem: CartItem) {
    const index = this.cart.findIndex(item => item === cartItem);
    if (index !== -1) {
    
      this.cart.splice(index, 1);
      this.updateCart();
      this.updateCartCount(); 
    }
  }
  private updateCart() {
    this.cartSubject.next(this.cart);
    this.updateCartCount();
  }
  clearCart() {
    this.cart = [];
  }
  getCart(): Observable<CartItem[]> {
   
    return of(this.cart);
  }

  private updateCartCount() {
    this.cartCountSubject.next(this.cart.length);
  }

  getCartCount(): Observable<number> {
    return this.cartCountSubject.asObservable();
  }
}
