import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
signedIn=false;
Invalid=false;
user:any;
  constructor(private formBuilder:FormBuilder,private userService:UsersService,private route:Router,private appCompoent:AppComponent) {
    this.loginForm=formBuilder.group(
      {
      email:['',[Validators.required,Validators.email]],
      userPassword:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
      });

   }

  ngOnInit(): void {
  }
  onLogin()
  {
    // console.log(this.loginForm.value);
    this.userService.signIn(
      this.loginForm.value.email,
      this.loginForm.value.userPassword
      ).subscribe(data=>{
        if(data){
          var result = [];
          var keys = Object.keys(data);
          keys.forEach(function(key){
              result.push(data[key]);
          });
          // console.log(typeof(result));
          result.forEach(element=>{
            let id=element.id;
            // console.log(id);
            localStorage.setItem('id',id);
          })
         
          this.route.navigate(['/allProducts']);
        }
        else
        this.Invalid=true;
      });
      // localStorage.setItem("email",this.loginForm.value.email);



  }
  }


