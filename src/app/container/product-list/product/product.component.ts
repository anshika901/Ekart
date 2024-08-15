import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel';
import {WishlistService} from '../../../services/wishlist.service';
@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input()
  product:ProductModel;

  isHeartClicked: boolean = false;
  constructor(private wishlistService: WishlistService) { 
   }
   
  ngOnInit() {
    if (this.wishlistService.isProductInWishlist(this.product)) {
      this.isHeartClicked = true;
    }
  }

  toggleHeart(event: Event) {

    event.stopPropagation();
      this.isHeartClicked = !this.isHeartClicked;
      if (this.isHeartClicked) {
      
        this.addToWishlist();
    } else {
       this.removeFromWishlist();
    }
  }

 

  addToWishlist() {
  console.log('Product added to wishlist');
  this.wishlistService.addToWishlist(this.product);
}

removeFromWishlist() {
   this.wishlistService.removeFromWishlist(this.product);
    console.log('Product removed from wishlist');
}
}
