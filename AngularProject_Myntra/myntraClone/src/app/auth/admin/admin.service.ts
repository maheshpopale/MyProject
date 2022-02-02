import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  checkLogin(email:string,password:string):Observable<any>{
    const user={email:email,password:password};
    console.log(user);
    return this.http.post('http://localhost:3000/app/admin/login/',user);

  }
}
