import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { ICategory } from '../ICategory.model';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.css']
})
export class UpdateCategoriesComponent implements OnInit {
id:number;
public category:ICategory;
message=false;
categoryId=0;
categoryName='';
categoryDescription='';
  constructor(private activatedRoute:ActivatedRoute,public categoryService:CategoriesService) {
   this.activatedRoute.paramMap.subscribe(data=>{
     this.id=+data.get('id');
     console.log(this.id);
   });
  }
   

  ngOnInit(): void {
    this.getCategory(this.id);
  }
   getCategory(id:number)
   {
    this.categoryService.getCategory(id).subscribe(data=>{
      console.log(this.category=data);
      this.categoryId=this.category.id;
      this.categoryName=this.category.Name;
      this.categoryDescription=this.category.Description;
    });
   }
   updateCategory(updateForm:NgForm){
    this.categoryService.updateCategory(updateForm.value.categoryId,updateForm.value.categoryName,updateForm.value.categoryDescription).subscribe(data=>{
      if(data)
      {
        this.message=true;
      }
    });
    updateForm.reset();

   }
}
