import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  userData:any[]=[];
  public userDetails=new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }
  getUserDetails(){
    return this.userDetails.asObservable();
  }

  order(userId:number){
    const order={userId:userId};
    console.log(order);
    return this.http.post('http://localhost:3000/app/orders/add/',order);
  }
  getOrderDetails():Observable<any>{
    return this.http.get('http://localhost:3000/app/orderdetails');
  }
  getDetails(firstName:string,lastName:string,email:string,address:string,city:string,state:string,zip:string,paymentType:string){
    const userDetails={firstName:firstName,lastName:lastName,email:email,address:address,city:city,state:state,zip:zip,paymentType:paymentType};
    this.userData.push(userDetails);
    this.userDetails.next(this.userData);
    // console.log(userDetails);
  }

  placeOrder(firstName:string,lastName:string,email:string,address:string,city:string,state:string,zip:string,paymentMethod:string,
    productId:number,productQuantity:number,productPrice:number,
    orderId:number):Observable<any>{

    const order={firstName:firstName,lastName:lastName,email:email,address:address,
                city:city,state:state,zip:zip,paymentMethod:paymentMethod,
                productId:productId,productQuantity:productQuantity,productPrice:productPrice,
                orderId:orderId
              };
                console.log(order);
                return this.http.post('http://localhost:3000/app/orderdetails/add/',order);
                
    }

}
