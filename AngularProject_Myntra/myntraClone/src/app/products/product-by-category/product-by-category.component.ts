import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { IProduct } from '../IProduct.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {
id:number;
products:any[]=[];
pQuantity:any;
  constructor(private activatedRoute:ActivatedRoute,private cartService:CartService,private productsService:ProductsService) { 
    this.activatedRoute.paramMap.subscribe(data=>{
      this.id=+data.get('id');
      console.log(this.id);
    });
  }
  ngOnInit(): void {
    //calling getProducts
  this.getProducts();
  }
  getProducts(){
    this.productsService.productsByCategory(this.id).subscribe(data=>{
      this.products=data;
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
