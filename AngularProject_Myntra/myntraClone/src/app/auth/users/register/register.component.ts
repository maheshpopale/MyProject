import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
signUpForm:FormGroup
registered=false;
  constructor(private formBuilder:FormBuilder,private userService:UsersService) { 
    this.signUpForm=formBuilder.group(
      {
      FirstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      mobileNumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      address:['',[Validators.required]],
      postalCode:['',[Validators.required,Validators.maxLength(6)]],
      userPassword:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
      conPassword:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]]

      }
      
    )
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.signUpForm.valid)
    {
      console.log(this.signUpForm.value);
    this.userService.register(this.signUpForm.value.FirstName,
      this.signUpForm.value.lastName,
      this.signUpForm.value.email,
      this.signUpForm.value.mobileNumber,
      this.signUpForm.value.address,
      this.signUpForm.value.postalCode,
      this.signUpForm.value.userPassword).subscribe(data=>{
        console.log(data);
        if(data)
        this.registered=true;
      });
    }
    this.signUpForm.reset();

  }
}
