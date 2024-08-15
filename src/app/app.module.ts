import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { AppSearchComponent } from './container/app-search/app-search.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './sale/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import {  AppRoutingModule } from '../app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SaleComponent } from './sale/sale.component';
import { ContactComponent } from './contact/contact.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ProductService } from './services/product.service';
import { WishlistService } from './services/wishlist.service';
import { CartComponent } from './cart/cart.component';
import {  RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { ConfrmationComponent } from './confrmation/confrmation.component';

import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    AppSearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    HomeComponent,
    SaleComponent,
    ContactComponent,
    WishListComponent,
    CartComponent,
    PaymentComponent,
    ConfrmationComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    MatCardModule,
    HttpClientModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule
  ],

  
  providers: [ProductService,WishlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
