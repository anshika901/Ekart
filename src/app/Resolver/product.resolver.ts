import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductService } from '../services/product.service'; // Import your product service
import { ProductModel } from '../Models/ProductModel'; // Import your product model
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductResolver  {
  constructor(private productService: ProductService) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel> {
//     const productId = route.paramMap.get('id'); // Assuming your product detail route has a parameter named 'id'
//     return this.productService.getProducts();// Replace this with your actual method to fetch product details by ID
//   }
}
