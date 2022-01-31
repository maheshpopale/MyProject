import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products:any[]=[];
  pQuantity:any;
    constructor(private productService:ProductsService,private cartService:CartService) { }
  
    ngOnInit(): void {
      this.getProducts();
    }
    getProducts()
    {
      this.productService.getProducts().subscribe(data=>{
        this.products=data;
        console.log(this.products);
        this.products.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.productPrice})
        })
      });
    }
    addtoCart(product:any,pQuantity:number){
      console.log(pQuantity);
       this.cartService.addtoCart(product,pQuantity);
    }

}
