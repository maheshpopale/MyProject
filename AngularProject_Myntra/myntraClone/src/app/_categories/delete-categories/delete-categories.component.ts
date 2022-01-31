import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-delete-categories',
  templateUrl: './delete-categories.component.html',
  styleUrls: ['./delete-categories.component.css']
})
export class DeleteCategoriesComponent implements OnInit {
id:number;
data:any;
deleted=false;
  constructor(private activatedRoute:ActivatedRoute,private categoryService:CategoriesService) {
    this.activatedRoute.paramMap.subscribe(data=>{
      this.id=+data.get('id');
      console.log(this.id);
    });
   }

  ngOnInit(): void {
    this.deleteCategory(this.id);
  }
  deleteCategory(id:number)
  {
    this.categoryService.deleteCategory(id).subscribe(data=>{
      if(data)
      {
        console.log(data);
        this.deleted=true;
        alert("Record Deleted Succesfully");
      }
      
    })
  }

}
