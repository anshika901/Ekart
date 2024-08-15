import { Component } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confrmation',
  templateUrl: './confrmation.component.html',
  styleUrls: ['./confrmation.component.css']
})
export class ConfrmationComponent {
transactionId="";

constructor(private payment:PaymentService,private router:Router){}

ngOnInit():void{
this.transactionId=this.payment.transactionId;

}
redirectToProducts(): void {
  this.router.navigateByUrl('/products');
}

}
