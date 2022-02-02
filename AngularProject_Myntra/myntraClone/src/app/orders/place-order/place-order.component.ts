import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
public products:any[]=[];
public userDetails:any[]=[];
public orders:any[]=[];
public orderid=0;
public userId=0;
grandTotal=0;
//products details
productId=0;
productQuantity=0;
productPrice=0;
//user shipping
firstName:string;
lastName:string;
email:string;
address:string;
city:string;
state:string;
zip:string;
paymentMethod:string;
 constructor(private cartService:CartService,private ordersService:OrdersService,private route:Router) { }

  ngOnInit(): void {
    //get ProductsList from CartService
    this.cartService.getProductList().subscribe(data=>{
      this.products=data;
    });

    //getShippingDetails from ordersService
    this.ordersService.getUserDetails().subscribe(data=>{
      this.userDetails=data;
      // console.log(this.userDetails);
    });

    //get grandTotal
    this.grandTotal=this.cartService.getTotalPrice();
  }
  placeOrder(){
    this.ordersService.getOrderDetails().subscribe(data=>{
      this.orders=data;
      this.orders.forEach(element=>{
        this.orderid=element.id;
        this.userId=element.UserId;
        // console.log(this.orderid);
        // console.log(this.userId);
      })
        this.userDetails.forEach(user=>{
          this.firstName=user.firstName;
          this.lastName=user.lastName;
          this.email=user.email;
          this.address=user.address;
          this.city=user.city;
          this.state=user.state;
          this.zip=user.zip;
          this.paymentMethod=user.paymentMethod;
        })
       
        console.log(this.firstName);
        this.products.forEach(item=>{
          this.productId=item.product.id;
          this.productQuantity=item.quantity;
          this.productPrice=item.product.productPrice;
          console.log(this.firstName);
          console.log(this.productId);
          console.log(this.productQuantity);
          console.log(this.productPrice);


            this.ordersService.placeOrder(this.firstName,
              this.lastName,
              this.email,
              this.address,
              this.city,
              this.state,
              this.zip,
              'Cash On Delevery',
              this.productId,
              this.productQuantity,
              this.productPrice,
              this.orderid,
              ).subscribe(data=>{
                console.log(data);
                if(data){
                  this.route.navigate(['/success']);
                }
              });
          })

         
        })
      
  }

}
