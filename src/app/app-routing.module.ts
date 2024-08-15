// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { SaleComponent } from './sale/sale.component';
import {WishListComponent} from './wish-list/wish-list.component';
import { ContactComponent } from './contact/contact.component';
import { SaleResolver } from './Resolver/sale.resolver';
import { CartComponent  } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfrmationComponent } from './confrmation/confrmation.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'products',component:ContainerComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  { path: 'sale', component: SaleComponent, resolve: { products: SaleResolver },canActivate:[AuthGuard]},
  { path: 'wish list', component: WishListComponent,canActivate:[AuthGuard]},
  { path: 'contact', component: ContactComponent,canActivate:[AuthGuard] },
  {path:'shop',component:CartComponent,canActivate:[AuthGuard] },
  {path:'payment',component:PaymentComponent,canActivate:[AuthGuard]},
  {path:'payment/confirmation',component:ConfrmationComponent,canActivate:[AuthGuard]},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
