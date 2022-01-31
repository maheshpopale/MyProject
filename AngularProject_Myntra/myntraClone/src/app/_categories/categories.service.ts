import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ICategory } from './ICategory.model';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public http:HttpClient) {
  }
  //baseUrl = 'http://localhost:3000/categories';
  url="http://localhost:3000/app/categories";
  getCategories():Observable<ICategory[]>
  {
    return this.http.get<ICategory[]>(this.url);
  }

  getCategory(id:number):Observable<ICategory>
 {  
     console.log(id);
    return this.http.get<ICategory>('http://localhost:3000/app/categories/'+id);
 }
//add category
  addCategory(categoryName:string,categoryDescription:string):Observable<any>{
    let add_url=`${this.url}/add/`;
    console.log(categoryName);
    console.log(categoryDescription);
    const headers = { 'content-type': 'application/json'};
    const category={Name:categoryName,Description:categoryDescription}
    //console.log(category);
    return this.http.post(add_url,category, {responseType: 'text'});
  }

  //update category
  updateCategory(id:number,name:string,description:string){
    const categorydata={"Name":name,"Description":description};
    let updateUrl=`http://localhost:3000/app/categories/update/${id}`;
    return this.http.put(updateUrl,categorydata,{responseType:'text'});
  }

  //delete category
   deleteCategory(id:number)
   {
     let Id=id;
     return this.http.delete('http://localhost:3000/app/categories/delete/'+Id);
     
   }
}
