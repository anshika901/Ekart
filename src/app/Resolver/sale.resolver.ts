import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../Models/ProductModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleResolver implements Resolve<ProductModel[]> {

  constructor(private productService: ProductService) {}

  resolve(): Observable<ProductModel[]> {
    return this.productService.getAllProducts(); // Adjust this to match your actual method for fetching discounted products
  }
}
