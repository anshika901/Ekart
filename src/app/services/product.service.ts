import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../Models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductModel[] = [];

  

  constructor() { }

  setProducts(products: ProductModel[]) {
    this.products = products;
    console.log(products);
  }

  getProducts() {
    return this.products;
  }
  filterProductsOnDiscount() {
    this.products = this.products.filter(product => product. discountPrice);
  }

  getAllProducts(): Observable<ProductModel[]> {
    return new Observable<ProductModel[]>((observer) => {
      setTimeout(() => {
        observer.next(this.products);
        observer.complete(); // Indicate that all products have been emitted
      });
    });
  }
   
 
}
