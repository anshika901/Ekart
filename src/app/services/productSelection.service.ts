// product-selection.service.ts

import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductSelectionService {
  selectedProduct: ProductModel | null = null;

  constructor() { }

  selectProduct(product: ProductModel) {
    this.selectedProduct = product;
  }

  clearSelectedProduct() {
    this.selectedProduct = null;
  }
}
