import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../Models/ProductModel';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent  {
  // discountedProducts: ProductModel[] = [];

  // constructor(private productService: ProductService) { }

  // ngOnInit(): void {
  //   this.fetchDiscountedProducts();
  // }

  // fetchDiscountedProducts() {
  //   this.productService.getDiscountedProducts().subscribe(products => {
  //     this.discountedProducts = products;
  //   });
  // }
  @Input() products: ProductModel[];

  loading: boolean = true;

  @Input()
  selectedFilterButtonChanged: string = "all";

  selectedProduct:ProductModel;
  saleComponent:SaleComponent;
  showProductDetail: boolean = false;


  onProductClicked(product: ProductModel) {
    this.selectedProduct = product;
    this.showProductDetail = true;
  }


  saleProducts: any[];
  totalProductCount:number;
  totalInstockCount:number;
  totalOutstockCount:number;


  constructor(private route: ActivatedRoute,private productService: ProductService) { }

  ngOnInit(): void {
    // Filter products on discount
    this.productService.filterProductsOnDiscount();
    console.log(this.products);
    this.saleProducts = this.productService.getProducts();


    this.totalProductCount = this.saleProducts.length;
    this.totalInstockCount = this.saleProducts.filter(p=> p.is_in_inventory==true).length;
    this.totalOutstockCount = this.saleProducts.filter(p=> p.is_in_inventory==false).length;

    this.route.data.subscribe(data => {
      this.products =data['products'];
    });
    
     this.loading = false;
    }
 
onFilterChanged(value : string){
    this.selectedFilterButtonChanged = value;
    console.log(this.selectedFilterButtonChanged);

  }

  closeProductDetail(): void {
    this.showProductDetail = false; 
  }

 
}
