import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
products:any[]=[];
imageToDisplay:any;
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productsService.getProducts().subscribe(data=>{
      this.products=data;
      this.products.forEach(element=>{
        this.imageToDisplay=element.image;
      }
    );
      console.log(this.products);
    })
  }

}
