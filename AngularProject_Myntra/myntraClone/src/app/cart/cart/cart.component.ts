import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of, toArray } from 'rxjs';
import { OrderComponent } from 'src/app/orders/order/order.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products:any[]=[];
public grandTotal:number=0;
  router: any;
  constructor(private cartService:CartService,private route:Router) { }

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
     const orderComponent=new OrderComponent(this.cartService);
    //  localStorage.setItem('products',JSON.stringify(products));
     this.route.navigate(['/order']);
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


