import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm:FormGroup;
  signedIn=false;
  Invalid=false;
  constructor(private formBuilder:FormBuilder,private adminService:AdminService,private route:Router) {
    this.loginForm=formBuilder.group(
      {
      email:['',[Validators.required,Validators.email]],
      userPassword:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
      });
   }

  ngOnInit(): void {
  }

  onLogin(){
    this.adminService.checkLogin(this.loginForm.value.email,this.loginForm.value.userPassword).subscribe(data=>{
      console.log(data);
      if(data)
      {
        this.route.navigate(['/admindashboard']);
      }
    }
    )
    
  }
}
