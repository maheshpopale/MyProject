import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
navbardisplay=true;
public totalItems:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
     this.getproductsLength();
  

  }
   getproductsLength()
   {
     this.cartService.getProductList().subscribe(res=>{
     this.totalItems=(res.length);
     console.log(res);
       })
   }
  //  showNavbar(show:boolean){
  //    this.navbardisplay=show;
  //  }
}
