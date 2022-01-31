import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  register(firstName:string,lastName:string,email:string,mobile:number,address:string,postalCode:number,password:string):Observable<any>{
    const User={firstName:firstName,lastName:lastName,email:email,mobile:mobile,address:address,postalCode:postalCode,password:password};
    console.log(User);
    return this.http.post('http://localhost:3000/app/register',User);

  }  
  signIn(email:string,password:string):Observable<any>{
    const User={email:email,password:password};
    return this.http.post('http://localhost:3000/app/login',User);
  }

}
