import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './IProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/app/products";
  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/app/products');
  }

  productsByCategory(id:number):Observable<any>{
    return this.http.get<any>('http://localhost:3000/app/products/bycategory/'+id)
  }
  //add Product
  addProduct(productName:string,quantity:number,productPrice:number,productDescription:string,productImg:string,categoryId:number):Observable<any>{
    const product={productName:productName,productQuantity:quantity,productPrice:productPrice,productDescription:productDescription,image:productImg,CategoryId:categoryId};
    console.log(product);
    let add_url=`${this.url}/add/`;
    return this.http.post('http://localhost:3000/app/products/add/',product);
  }
  getProduct(id:number):Observable<IProduct>{
    console.log(id);
    return this.http.get<IProduct>('http://localhost:3000/app/products/'+id);
  }

  //update Product
  updateProduct(id:number,productName:string,productQuantity:number,productPrice:number,productDescription:string,image:string,CategoryId:number,){
    const product={productName:productName,productQuantity:productQuantity,productPrice:productPrice,productDescription:productDescription,image:image,CategoryId:CategoryId};
      console.log(product);
    return this.http.put(`http://localhost:3000/app/products/update/${id}`,product);
  }

  //delete Product
  deleteProduct(id:number){
    console.log(id);
    this.http.delete('http://localhost:3000/app/products/delete/'+id).subscribe(data=>{
      console.log(data);
    });
  }
}
