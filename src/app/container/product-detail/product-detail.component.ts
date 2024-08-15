import { Component, Input ,EventEmitter,Output} from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductSelectionService } from '../../services/productSelection.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
 @Input() productListComp: ProductListComponent =undefined;

 @Input()
product: ProductModel;

 ngOnInit(){
  this.product=this.productListComp.selectedProduct;
 }


 constructor( private cartService: CartService,private productSelectionService: ProductSelectionService) { }



 @Output() close = new EventEmitter<void>();

 closeProductDetail(){
  this.close.emit();
 }


 addToCart(product:ProductModel){
  this.cartService.addToCart(product,this.selectedSize,this.selectedColor);
 }

 selectedSize: number; 

 selectSize(size: number) {
     this.selectedSize = size; 
     
 }
 selectedColor: string;

    selectColor(color: string) {
        this.selectedColor = color;
    }
}
