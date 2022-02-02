import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  checkoutForm:FormGroup
  public productsList:any[]=[];
  orderDetails:any[]=[];
  grandTotal=0;
  result=[];
  constructor(private cartService:CartService,private formBuilder:FormBuilder,private orderService:OrdersService,private route:Router) {
  this.cartService.getProductList().subscribe(data=>{
      this.productsList=data;
      // console.log(this.productsList);
      this.grandTotal=this.cartService.getTotalPrice();
    })
   }

  ngOnInit(): void {
    this.checkoutForm=new FormGroup({
      firstName:new FormControl(null,{validators:Validators.required}),
      lastName:new FormControl(null,{validators:[Validators.required]}),
      email:new FormControl({Validators:[Validators.required,Validators.email]}),
      address:new FormControl({Validators:[Validators.required]}),
      city:new FormControl({Validators:[Validators.required]}),
      state:new FormControl({Validators:[Validators.required]}),
      zip:new FormControl({Validators:[Validators.required]}),
      paymentType:new FormControl(),
    })
  }
  addUserDetail(){
  console.log(this.checkoutForm.value);
   let userId=parseInt(localStorage.getItem("id"));
   this.orderService.order(userId).subscribe(data=>{
     console.log(data);
   });
 
   this.orderService.getDetails(this.checkoutForm.value.firstName,
    this.checkoutForm.value.lastName,
    this.checkoutForm.value.email,
    this.checkoutForm.value.address,
    this.checkoutForm.value.city,
    this.checkoutForm.value.state,
    this.checkoutForm.value.zip,
    this.checkoutForm.value.paymentType
    );
    this.route.navigate(['/order']);
  
  }

  }
