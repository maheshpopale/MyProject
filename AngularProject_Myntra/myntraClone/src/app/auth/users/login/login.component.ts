import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
        console.log(data);
        if(data.id!=null){
          this.route.navigate(['/allProducts']);
        }
        else
        this.Invalid=true;
      });

  }
  }


