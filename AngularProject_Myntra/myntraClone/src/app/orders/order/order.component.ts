import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public productsList:any[]=[];
  constructor(private cartService:CartService) {
    this.cartService.getProductList().subscribe(data=>{
      this.productsList=data;
      console.log(this.productsList);
    })
   }

  ngOnInit(): void {
  }

  
}
