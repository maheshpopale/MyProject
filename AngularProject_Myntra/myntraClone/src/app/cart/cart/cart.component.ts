import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of, toArray } from 'rxjs';
import { OrderComponent } from 'src/app/orders/order/order.component';
import { OrdersService } from 'src/app/orders/orders.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products:any[]=[];
public user=new Array(5);
public grandTotal:number=0;
  router: any;
  constructor(private cartService:CartService,private route:Router,private formBuiler:FormBuilder,private ordersService:OrdersService) { }

  ngOnInit(): void {
   this.cartService.getProductList().subscribe(data=>{
     this.products=data;
    console.log(this.products);
    this.products.forEach(element=>{
      console.log(element.product);
        
    
    })
     this.grandTotal=this.cartService.getTotalPrice();
   });
   }
   removeItem(item:any){
     this.cartService.removeCartItem(item);
   }
   emptyCart(){
     this.cartService.removeAllCart();
   }
  




   Checkout(){   
     const userId=parseInt(localStorage.getItem("id"));
     console.log(userId);
      const orderComponent=new OrderComponent(this.cartService,this.formBuiler,this.ordersService,this.route);
      this.products.forEach(item=>{
       this.cartService.insertCart(item.product.productName,item.product.productPrice,item.quantity,userId);
      // .subscribe(data=>{
      //   console.log(data);
      // });
    });
     this.route.navigate(['/checkout']);
   }
  //  public productList=new BehaviorSubject<any>([]);
  //  public cartItems:any=[];
  //  Checkout(products:any){
  //    this.cartItems.push(products);
  //    this.productList.next(this.cartItems);
  //    console.log(this.productList);
  //    return this.productList;

  //  }
   
  }


