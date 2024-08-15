import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../Models/ProductModel'; 

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: ProductModel[] = [];
  private wishlistSubject = new BehaviorSubject<ProductModel[]>([]);

  constructor() { }

  addToWishlist(product: ProductModel) {
    this.wishlist.push(product);
    this.wishlistSubject.next(this.wishlist);
  }
  removeFromWishlist(product:ProductModel){
    const index = this.wishlist.findIndex(item => item.id === product.id); 
        if (index !== -1) {
            this.wishlist.splice(index, 1);
        }
  }

  getWishlist() {
    return this.wishlistSubject.asObservable();
  }

  isProductInWishlist(product: ProductModel): boolean {
    if (!product || !this.wishlist) {
      return false;
    }
   
    return this.wishlist.some(p => p.id === product.id); 
  }
}
