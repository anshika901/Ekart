import { Component } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { ProductModel } from '../Models/ProductModel';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {

  wishlist: ProductModel[] = [];
  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlistService.getWishlist().subscribe(wishlist => {
      this.wishlist = wishlist;
    });
  }

  clickedHeart:boolean=false;
  selectedProduct:any;

  toggleHeart(product: ProductModel) {
      this.clickedHeart=true;
      this.removeFromWishlist(product);
}

removeFromWishlist(product: ProductModel) {
    this.wishlistService.removeFromWishlist(product);
}


}






