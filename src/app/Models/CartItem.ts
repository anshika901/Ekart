
import { ProductModel } from './ProductModel';

export class CartItem {
    product: ProductModel;
    selectedSize: number;
    selectedColor: string;

    constructor(product: ProductModel, selectedSize: number, selectedColor: string) {
        this.product = product;
        this.selectedSize = selectedSize;
        this.selectedColor = selectedColor;
    }
  }

