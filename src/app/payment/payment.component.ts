import { style } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, defaultUrlMatcher } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { PaymentService } from '../services/payment.service';
import { Router } from '@angular/router';
import { PaymentDataService } from '../services/payment-data.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  totalCost: number;
  constructor(private route: ActivatedRoute,
    private payment:PaymentService,
    private router:Router,
    private paymentData:PaymentDataService
  ) { }

  ngOnInit(): void {
    this.totalCost = this.paymentData.totalCost;
    this.route.queryParams.subscribe(params => {
      window.paypal.Buttons(
        {
          style:{
            layout:'horizontal',
            color:'blue',
            shape:'rect',
            label:'paypal',
            height: 40, 
            width: 120, 
            fontSize: 14, 
            borderRadius: 5,
            margin: '10px 50px'
            
          },
          createOrder:(data:any,actions:any)=>{
            return actions.order.create({
              purchase_units:[
                {
                  amount:{
                    value:this.totalCost.toString(),
                    currency_code:'USD'
                  }
                }
              ]
            });
          },
          onApprove :(data:any,actions:any)=>{
            return actions.order.capture().then((details:any)=>{
               if(details.status==='COMPLETED'){
                console.log("status is completed");
                this.payment.transactionId=details.id;
                this.router.navigate(['payment/confirmation']);


               }
            });
          },
          onError:(error:any)=>{
            console.log(error);
          }
        }
      ).render(this.paymentRef.nativeElement);
    });
}

@ViewChild('paymentRef',{static:true})paymentRef!:ElementRef;



onCancel(){
  this.router.navigateByUrl('shop');
}
}
