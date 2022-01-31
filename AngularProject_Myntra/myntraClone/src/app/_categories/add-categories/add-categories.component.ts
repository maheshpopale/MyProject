import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from '../categories.service';
@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

categoryForm:FormGroup;
 message=false;
  constructor(formBuilder:FormBuilder,private categoryService:CategoriesService) {
    this.categoryForm=formBuilder.group(
      {
      categoryName:['',[Validators.required]],
      categoryDescription:['',[Validators.required]]
      }
    )
   }

  ngOnInit(): void {
  }
  postData()
  {
    // console.log(this.categoryForm.value);
    // console.log(this.categoryForm.value.categoryName);
    // console.log(this.categoryForm.value.categoryDescription);
    this.categoryService.addCategory(this.categoryForm.value.categoryName,this.categoryForm.value.categoryDescription).subscribe(response=>{
    if(response)
    console.log(response);
    this.message=true;
    }
    );
    this.categoryForm.reset();
  }

}
